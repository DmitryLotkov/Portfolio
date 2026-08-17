import commonStyle from '../../../Common/Styles/h.module.scss';
import React from 'react';
import styles from './Contacts.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import Button from '../../../Common/components/Button';
import {titles} from '../../../Common/components/CommonData';
import {Fade} from 'react-awesome-reveal';
import {useFormik} from 'formik';
import {sendMessageTC} from '../../../state/app-reducer';
import {useAppDispatch} from '../../../state/store';

type FormikErrorType = {
    email: string;
    name: string;
    message: string;
};
export type LoginParamsType = FormikErrorType;

export function Contacts() {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        validate: (values: FormikErrorType) => {
            const errors: Partial<FormikErrorType> = {};
            if (!values.email) {
                errors.email = 'Email required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (values.name.length < 5) {
                errors.name = 'Name must be 5 characters or more';
            }
            if (values.message.length < 15) {
                errors.message = 'Message must be 15 characters or more';
            }
            return errors;
        },
        initialValues: {
            email: '',
            name: '',
            message: '',
        },
        onSubmit: (values: FormikErrorType) => {
            dispatch(sendMessageTC(values));
            formik.resetForm();
        },
    });

    return (
        <section className={styles.contacts} id={'contacts'}>
            <div className={styles.contactsContainer}>
                <div className={styles.title}>
                    <Fade direction={'down'} duration={1200} triggerOnce={true}>
                        <h2 className={commonStyle.h2}>{titles.title4}</h2>
                    </Fade>
                </div>
                <div className={styles.formContainer}>
                    <Fade direction={'up'} duration={1200} triggerOnce={true}>
                        <form className={styles.form} onSubmit={formik.handleSubmit}>
                            <div className={styles.inputContainer}>
                                <div className={styles.inputMessageBlock}>
                                    <input
                                        placeholder={'Your Name'}
                                        type='text'
                                        className={formik.errors.name && formik.touched.name ? styles.inputError : styles.input}
                                        {...formik.getFieldProps('name')}
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <div className={styles.errorMessage}>{formik.errors.name}</div>
                                    )}
                                </div>
                                <div className={styles.inputMessageBlock}>
                                    <input
                                        placeholder={'Your Email'}
                                        type='text'
                                        className={formik.errors.email && formik.touched.email ? styles.inputError : styles.input}
                                        {...formik.getFieldProps('email')}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <div className={styles.errorMessage}>{formik.errors.email}</div>
                                    )}
                                </div>
                            </div>
                            <div className={styles.inputMessageBlock}>
                                <textarea
                                    placeholder={'Your Message'}
                                    className={formik.errors.message && formik.touched.message ? styles.inputError : styles.textarea}
                                    {...formik.getFieldProps('message')}
                                />
                                {formik.touched.message && formik.errors.message && (
                                    <div className={styles.errorMessage}>{formik.errors.message}</div>
                                )}
                            </div>
                            <div className={styles.button}>
                                <Button type={'submit'} disabled={!formik.isValid}>
                                    <span style={{marginRight: '10px'}}>
                                        <FontAwesomeIcon icon={faPaperPlane}/>
                                    </span>
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </Fade>
                </div>
            </div>
        </section>
    );
}
