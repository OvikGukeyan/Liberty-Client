import React, { LegacyRef, useRef } from 'react';
import { Carousel, LoginForm } from '../../components';
import styles from './Home.module.scss'


const Home: React.FC = () => {




  return (
    <div className={styles.wrapper}>
      <div className={styles.box_1}>
        <div className={styles.main}>
          <video muted autoPlay className={styles.video} src="./assets/Lingen1.mp4"></video>
          <header>
            <div className={styles.logo}>
              <img src="./assets/logo.png" alt="" />
            </div>
            <nav>
              <ul>
                <li>home</li>
                <li>shope</li>
                <li>about</li>
                <li>contact</li>
              </ul>
            </nav>
          </header>
        </div>
        <div className={styles.services}>
          <Carousel>
            <div className={styles.slide}>
              <h1>Seien Sie in jeder Lebenssituation geschützt</h1>
              <p>Wir bieten maßgeschneiderte Versicherungslösungen für Ihr Zuhause an. Schützen Sie Ihr Eigentum vor unvorhergesehenen Ereignissen mit unseren flexiblen Versicherungsprodukten. Verlassen Sie sich auf uns, um Ihre Bedürfnisse zu verstehen und Ihnen den richtigen Schutz zu bieten.</p>
              <button>SHOP NOW
                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" /></svg>
              </button>

            </div>
            <div className={styles.slide}>
              <h1>Baufinanzierung</h1>
              <p>Sichern Sie sich Ihr Traumhaus mit unserer maßgeschneiderten Baufinanzierungslösung. Egal, ob Neubau, Kauf oder Umbau - wir bieten Ihnen flexible Finanzierungsoptionen, um Ihr Bauprojekt zu realisieren. Vertrauen Sie auf unsere langjährige Erfahrung, um Ihre individuellen Bedürfnisse zu verstehen und Ihnen die passende Baufinanzierung anzubieten.</p>
              <button>SHOP NOW
                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" /></svg>
              </button>

            </div>
            <div className={styles.slide}>
              <h1>Privatkredit</h1>
              <p>Erfüllen Sie sich Ihre persönlichen Wünsche mit unserem maßgeschneiderten Privatkredit. Egal, ob Sie eine Reise planen, ein Auto kaufen oder eine Renovierung vornehmen möchten - wir bieten Ihnen flexible Kreditoptionen, um Ihre finanziellen Ziele zu erreichen. Verlassen Sie sich auf unsere Expertise, um Ihnen den richtigen Privatkredit anzubieten.</p>
              <button>SHOP NOW
                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" /></svg>
              </button>
            </div>
            <div className={styles.slide}>
              <h1>Autokredit</h1>
              <p>Machen Sie sich den Autokauf leicht mit unserem maßgeschneiderten Autokredit. Egal, ob Neu- oder Gebrauchtwagen - wir bieten Ihnen flexible Finanzierungsmöglichkeiten, um Ihren Autokauf zu erleichtern. Vertrauen Sie auf unsere Kompetenz, um Ihnen den passenden Autokredit anzubieten.</p>
              <button>SHOP NOW
                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" /></svg>
              </button>
            </div><div className={styles.slide}>
              <h1>Kapitalaufbau</h1>
              <p>Planen Sie Ihre finanzielle Zukunft mit unserem maßgeschneiderten Kapitalaufbau-Programm. Egal, ob Sie für den Ruhestand vorsorgen, ein finanzielles Polster schaffen oder langfristig investieren möchten - wir bieten Ihnen strategische Anlageoptionen, um Ihr Kapital aufzubauen. Verlassen Sie sich auf unsere Experten, um Ihnen dabei zu helfen, Ihre finanziellen Ziele zu erreichen.</p>
              <button>SHOP NOW
                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" /></svg>
              </button>
            </div><div className={styles.slide}>
              <h1>Immobilien</h1>
              <p>Investieren Sie in Ihre Zukunft mit unserer maßgeschneiderten Immobilienlösung. Egal, ob Sie kaufen, verkaufen oder investieren möchten - wir bieten Ihnen umfassende Beratung und Unterstützung, um Ihre Immobilienziele zu erreichen. Vertrauen Sie auf unsere Erfahrung, um Ihnen bei jedem Schritt des Immobilienprozesses zu helfen.</p>
              <button>SHOP NOW
                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" /></svg>
              </button>
            </div>
          </Carousel>


        </div>
      </div>
      <div className={styles.box_2}>
        <div className={styles.photo_1}></div>
        <div className={styles.about}>
          <h3>ÜBER UNSERE FIRMA</h3>
          <p>Willkommen bei Liberty Finance, Ihrem zuverlässigen Partner für Versicherungs- und Finanzierungslösungen. Wir bieten maßgeschneiderte Produkte für Hausbesitzer an, um ihr Eigentum zu schützen und ihre Wohnträume zu verwirklichen. Kontaktieren Sie uns für professionelle Beratung und persönlichen Service.





          </p>
        </div>
        <div className={styles.photo_2}></div>
      </div>
    </div>
  )
}

export default Home