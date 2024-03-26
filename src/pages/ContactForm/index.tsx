import React from 'react';
import styles from './ContactForm.module.scss';
// import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const ContactForm: React.FC = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        reset } = useForm({
            mode: "onBlur"
        });

    const paymentMethod = watch('payment');

    const submitHandler = () => {
        reset();
    }






    return (
        <div className={styles.checkout_wrapper}>
            {/* <div className={styles.back}>
                <Link to='/items'>
                    <span>Go Back</span>
                </Link>
            </div> */}

            <div className={styles.content_wrapper}>

                <div className={styles.checkout_box}>
                    <h1>Kontakt Formular</h1>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <h3>Geschlecht</h3>
                        <div className={styles.topics}>
                            <label>Herr
                                <input  {...register('sex')} type="radio" value="herr" />
                            </label>

                            <label>Frau
                                <input  {...register('sex')} type="radio" value="frau" />
                            </label>
                        </div>

                        <h3>BILLING DETAILS</h3>
                        <div className={styles.input_box}>
                            <label >Vorname:
                                {errors?.firstName && <p>{errors?.firstName?.message?.toString() || 'Wrong format!'}</p>}
                                <input className={errors?.firstName && styles.input_error} {...register('firstName', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Name must contain at least three letters'
                                    }
                                })} />
                            </label>

                            <label >Nachname:
                                {errors?.lastName && <p>{errors?.lastName?.message?.toString() || 'Wrong format!'}</p>}
                                <input className={errors?.lastName && styles.input_error} {...register('lastName', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Name must contain at least three letters'
                                    }
                                })} />
                            </label>

                            <label>Email:
                                {errors?.emailAddress && <p>{errors?.emailAddress?.message?.toString() || 'Wrong format!'}</p>}
                                <input className={errors?.emailAddress && styles.input_error} {...register('emailAddress', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                                        message: 'Wrong E-mail format!'
                                    }
                                })} type="email" />
                            </label>
                            <label>Mobil:
                                {errors?.phoneNumber && <p>{errors?.phoneNumber?.message?.toString() || 'Wrong format!'}</p>}
                                <input className={errors?.phoneNumber && styles.input_error} {...register('phoneNumber', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /^(\+?\d{1,3}[-\.\s]?)?\(?\d{3}\)?[-\.\s]?\d{3}[-\.\s]?\d{2}[-\.\s]?\d{2}$/,
                                        message: 'Wrong Number format!'
                                    }
                                })} type="tel" />
                            </label>

                        </div>

                        <h3>SHIPPING INFO</h3>
                        <div className={styles.input_box}>
                            <label className={styles.adress_input} >Straße, Hasnummer:
                                {errors?.adress && <p>{errors?.adress?.message?.toString() || 'Wrong format!'}</p>}
                                <input className={errors?.adress && styles.input_error} {...register('adress', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /^[a-zA-Z0-9\s,'-]*$/,
                                        message: 'Wrong Adress format!'
                                    }
                                })} />
                            </label>

                            <label >PLZ:
                                {errors?.zipCode && <p>{errors?.zipCode?.message?.toString() || 'Wrong format!'}</p>}
                                <input className={errors?.zipCode && styles.input_error} {...register('zipCode', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /^\d+$/,
                                        message: 'Wrong ZIP code format!'
                                    }
                                })} />
                            </label>

                            <label>Ort:
                                {errors?.city && <p>{errors?.city?.message?.toString() || 'Wrong format!'}</p>}
                                <input className={errors?.city && styles.input_error} {...register('city', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /^\D*$/,
                                        message: 'Wrong City format!'
                                    }
                                })} />
                            </label>
                            <label>Land:
                                {errors?.country && <p>{errors?.country?.message?.toString() || 'Wrong format!'}</p>}
                                <input className={errors?.country && styles.input_error} {...register('country', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /^\D*$/,
                                        message: 'Wrong Country format!'
                                    }
                                })} />
                            </label>

                        </div>

                        <h3>Ich wünche eine unverbindliche Beratung zu volgenden Thema</h3>
                        <div className={styles.topics}>
                            <label>Baufinanzirung
                                <input  {...register('baufinanzirung')} type="radio" value="baufinanzirung" />
                            </label>

                            <label>Privatkredit
                                <input  {...register('privatkredit')} type="radio" value="privatkredit" />
                            </label>
                            <label>Versicherung
                                <input  {...register('versicherung')} type="radio" value="versicherung" />
                            </label>
                            <label>Kapitalaufbau
                                <input  {...register('kapitalaufbau')} type="radio" value="kapitalaufbau" />
                            </label>
                            <label>Immobilien
                                <input  {...register('immobilien')} type="radio" value="immobilien" />
                            </label>
                        </div>
                        <div className={styles.input_box}>
                            <label className={styles.description} >Bemerkung:
                                {errors?.adress && <p>{errors?.adress?.message?.toString() || 'Wrong format!'}</p>}
                                <textarea className={errors?.adress && styles.input_error} {...register('adress', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /^[a-zA-Z0-9\s,'-]*$/,
                                        message: 'Wrong Adress format!'
                                    }
                                })} />
                            </label>
                        </div>

                        {/* <input type="submit" /> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;