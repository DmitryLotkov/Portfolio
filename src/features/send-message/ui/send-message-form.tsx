import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import styles from './send-message-form.module.scss';
import { Button } from '@/shared/ui';
import { useAppDispatch, sendMessageTC } from '@/app/store';
import { SendMessageParams } from '../model/types';

export function SendMessageForm() {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        validate: (values: SendMessageParams) => {
            const errors: Partial<SendMessageParams> = {};
            if (!values.email) {
                errors.email = 'Email required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (values.name.length < 2) {
                errors.name = 'Name must be 2 characters or more';
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
        onSubmit: (values: SendMessageParams) => {
            dispatch(sendMessageTC(values));
            formik.resetForm();
        },
    });

    return (
        <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.inputContainer}>
                <div className={styles.inputMessageBlock}>
                    <input
                        placeholder="Your Name"
                        type="text"
                        className={
                            formik.errors.name && formik.touched.name
                                ? styles.inputError
                                : styles.input
                        }
                        {...formik.getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className={styles.errorMessage}>
                            {formik.errors.name}
                        </div>
                    )}
                </div>
                <div className={styles.inputMessageBlock}>
                    <input
                        placeholder="Your Email"
                        type="text"
                        className={
                            formik.errors.email && formik.touched.email
                                ? styles.inputError
                                : styles.input
                        }
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className={styles.errorMessage}>
                            {formik.errors.email}
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.inputMessageBlock}>
                <textarea
                    placeholder="Your Message"
                    className={
                        formik.errors.message && formik.touched.message
                            ? styles.inputError
                            : styles.textarea
                    }
                    {...formik.getFieldProps('message')}
                />
                {formik.touched.message && formik.errors.message && (
                    <div className={styles.errorMessage}>
                        {formik.errors.message}
                    </div>
                )}
            </div>
            <div className={styles.button}>
                <Button type="submit" disabled={!formik.isValid}>
                    <span style={{ marginRight: '10px' }}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </span>
                    Send Message
                </Button>
            </div>
        </form>
    );
}

export default SendMessageForm;
