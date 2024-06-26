import React, { useEffect, useState, Children, ReactNode, ReactElement, useRef } from 'react'
import styles from './Carousel.module.scss'


type CarouselTypes = {
  children: ReactNode
}

const Carousel: React.FC<CarouselTypes> = ({ children }) => {
  const [pages, setPages] = useState<ReactNode[]>([]);
  const [offset, setOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderWidth, setSliderWidth] = useState(0);

 
  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + sliderWidth
      const maxOffset = -(sliderWidth * (pages.length - 1))
      const result = newOffset <= 0 ? newOffset : maxOffset;
      // return Math.min(newOffset, 0)
      return result
    })
  }
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - sliderWidth
      const maxOffset = -(sliderWidth * (pages.length - 1))
      const result = newOffset >= maxOffset ? newOffset : 0;

      // Math.max(newOffset, maxOffset)
      return result
    })
  }
  useEffect(() => {
    const newChildren = Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return <div
          style={{
            minWidth: '100%',
            maxWidth: '100%',
            height: '100%',
            ...child.props.style 
          }}
        >
          {child}
        </div>;
      }
      return null;
    }) as ReactElement[];
    setPages(newChildren);
  }, [children]);

  const handleResize = () => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth;
      setSliderWidth(width);
      setOffset(0);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.main_container}>
      <div ref={sliderRef} className={styles.window}>
        <div className={styles.all_pages_container}
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </div>
        
        <div className={styles.slider}>
              <div onClick={handleLeftArrowClick} className={styles.button_left}>
                <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12"  fill="none" fill-rule="evenodd" /></svg>
              </div>
              <div onClick={handleRightArrowClick} className={styles.button_right}>
                <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24"  fill="none" fill-rule="evenodd" /></svg>
              </div>
            </div>
      </div>
    </div>
  )
};

export default Carousel;