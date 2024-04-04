import React, { useEffect } from 'react';
import styles from './ContactForm.module.scss';
import { FieldValues, useForm } from "react-hook-form";
import { API_URL } from '../../http';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import qs from 'qs';

const ContactForm: React.FC = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        setValue,
        formState: { isSubmitSuccessful, isSubmitted },
        reset } = useForm({
            defaultValues: {
                salutation: 'herr',
                titel: 'doctor',
                firstName: 'Ivan',
                lastName: 'Petrov',
                emailAdress: '0953188061ovik@gmail.com',
                phoneNumber: '0957744848',
                adress: 'Bussardweg, 2a',
                zipCode: '59399',
                city: 'Lingen',
                country: 'Germany',
                topic: ['baufinanzierung'],
                description: 'Hello',
                check: true,
                manager: ''
            },
            mode: "onBlur"
        });



    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1)) as unknown as { m: string };
            setValue('manager', params.m)
        }
    }, [])




    const submitHandler = (values: FieldValues) => {


        axios.post(`${API_URL}/contact`, values)
            .then(response => {
                document.body.style.overflow = 'hidden';
            })
            .catch(error => {
                // Обработка ошибки
                console.error('Error submitting form:', error);
            });
        reset(); // Опционально сбросить значения формы после отправки
    }






    return (
        <div className={styles.checkout_wrapper}>
            {/* <div className={styles.back}>
                <Link to='/items'>
                    <span>Go Back</span>
                </Link>
            </div> */}



            <div className={styles.checkout_box}>
                <div className={styles.header}>
                    <img className={styles.logo} src="./assets/logo.png" alt="" />
                    <img className={styles.company_name} src="./assets/name.png" alt="" />
                </div>
                <h1>Kontaktformular </h1>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <h3>ANREDE</h3>
                    <div className={styles.input_box}>
                        <label className={styles.radio_label}>Herr
                            <input className={styles.radio}  {...register('salutation', {
                                required: 'Required field'
                            })} type="radio" value="herr" />
                        </label>

                        <label className={styles.radio_label}>Frau
                            <input className={styles.radio} {...register('salutation')} type="radio" value="frau" />
                        </label>
                        <label >Titel:
                            {errors?.titel && <p>{errors?.titel?.message?.toString() || 'Wrong format!'}</p>}
                            <input className={`${errors?.titel && styles.input_error} ${styles.input}`} {...register('titel', {
                                required: false,
                                pattern: {
                                    value: /[A-Za-z]{2}/,
                                    message: 'Titel must contain at least two letters'
                                }
                            })} />
                        </label>
                    </div>



                    <h3>KONTAKTINFORMATIONEN</h3>
                    <div className={styles.input_box}>
                        <label >Vorname:
                            {errors?.firstName && <p>{errors?.firstName?.message?.toString() || 'Wrong format!'}</p>}
                            <input className={`${errors?.firstName && styles.input_error} ${styles.input}`} {...register('firstName', {
                                required: 'Required field',
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'Name must contain at least three letters'
                                }
                            })} />
                        </label>

                        <label >Nachname:
                            {errors?.lastName && <p>{errors?.lastName?.message?.toString() || 'Wrong format!'}</p>}
                            <input className={`${errors?.lastName && styles.input_error} ${styles.input}`} {...register('lastName', {
                                required: 'Required field',
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'Name must contain at least three letters'
                                }
                            })} />
                        </label>

                        <label>Email:
                            {errors?.emailAdress && <p>{errors?.emailAdress?.message?.toString() || 'Wrong format!'}</p>}
                            <input className={`${errors?.emailAdress && styles.input_error} ${styles.input}`} {...register('emailAdress', {
                                required: 'Required field',
                                pattern: {
                                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                                    message: 'Wrong E-mail format!'
                                }
                            })} type="email" />
                        </label>
                        <label>Mobil:
                            {errors?.phoneNumber && <p>{errors?.phoneNumber?.message?.toString() || 'Wrong format!'}</p>}
                            <input className={`${errors?.phoneNumber && styles.input_error} ${styles.input}`} {...register('phoneNumber', {
                                required: 'Required field',
                                pattern: {
                                    value: /^(\+?\d{1,3}[-\.\s]?)?\(?\d{3}\)?[-\.\s]?\d{3}[-\.\s]?\d{2}[-\.\s]?\d{2}$/,
                                    message: 'Wrong Number format!'
                                }
                            })} type="tel" />
                        </label>

                    </div>

                    <h3>ADRESSE</h3>
                    <div className={styles.input_box}>
                        <label className={styles.adress_input} >Straße:
                            {errors?.adress && <p>{errors?.adress?.message?.toString() || 'Wrong format!'}</p>}
                            <input className={`${errors?.adress && styles.input_error} ${styles.input}`} {...register('adress', {
                                required: 'Required field',
                                pattern: {
                                    value: /^[a-zA-Z0-9\s,'-]*$/,
                                    message: 'Wrong Adress format!'
                                }
                            })} />
                        </label>

                        <label >PLZ:
                            {errors?.zipCode && <p>{errors?.zipCode?.message?.toString() || 'Wrong format!'}</p>}
                            <input className={`${errors?.zipCode && styles.input_error} ${styles.input}`} {...register('zipCode', {
                                required: 'Required field',
                                pattern: {
                                    value: /^\d+$/,
                                    message: 'Wrong ZIP code format!'
                                }
                            })} />
                        </label>

                        <label>Ort:
                            {errors?.city && <p>{errors?.city?.message?.toString() || 'Wrong format!'}</p>}
                            <input className={`${errors?.city && styles.input_error} ${styles.input}`} {...register('city', {
                                required: 'Required field',
                                pattern: {
                                    value: /^\D*$/,
                                    message: 'Wrong City format!'
                                }
                            })} />
                        </label>
                        <label>Land:
                            {errors?.country && <p>{errors?.country?.message?.toString() || 'Wrong format!'}</p>}
                            <input className={`${errors?.country && styles.input_error} ${styles.input}`} {...register('country', {
                                required: 'Required field',
                                pattern: {
                                    value: /^\D*$/,
                                    message: 'Wrong Country format!'
                                }
                            })} />
                        </label>

                    </div>

                    <h3>Ich wünche eine unverbindliche Beratung zu folgendem Thema</h3>
                    <div className={styles.input_box}>
                        <label className={styles.radio_label}>Baufinanzierung
                            <input className={styles.radio} {...register('topic', { required: true })} type="checkbox" value="baufinanzierung" />
                        </label>
                        <label className={styles.radio_label}>Privatkredit
                            <input className={styles.radio} {...register('topic')} type="checkbox" value="privatkredit" />
                        </label>
                        <label className={styles.radio_label}>Autokredit
                            <input className={styles.radio} {...register('topic')} type="checkbox" value="autokredit" />
                        </label>
                        <label className={styles.radio_label}>Versicherung
                            <input className={styles.radio} {...register('topic')} type="checkbox" value="versicherung" />
                        </label>
                        <label className={styles.radio_label}>Kapitalaufbau
                            <input className={styles.radio} {...register('topic')} type="checkbox" value="kapitalaufbau" />
                        </label>
                        <label className={styles.radio_label}>Immobilien
                            <input className={styles.radio} {...register('topic')} type="checkbox" value="immobilien" />
                        </label>

                    </div>
                    <div className={styles.input_box}>
                        <label className={styles.description} >Bemerkung:
                            <textarea {...register('description')} />
                        </label>
                    </div>
                    <div className={styles.check_box}>
                        <input {...register('check', {
                            required: true
                        })} className={styles.check} type="checkbox" />
                        <p>Hiermit bestätige ich, dass ich mit der Speicherung und Verarbeitung meiner Daten einverstanden bin  </p>
                    </div>

                    <button disabled={!isValid} className={styles.submit_button} type='submit'>Abschicken</button>
                </form>
            </div>
            <div className={`${styles.overlay} ${isSubmitSuccessful ? styles.overlayVisible : ''}`}>
                <div className={styles.board} >
                    <img src="./assets/submited.png" alt="" />
                    <h1>Vielen Dank für ihr Vertrauen. <br />Wir kümmern uns schnellstmöglich um ihr Anliegen</h1>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;