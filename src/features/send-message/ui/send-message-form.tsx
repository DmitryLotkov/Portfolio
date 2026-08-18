import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import styles from './send-message-form.module.scss';
import { Button } from '@/shared/ui';
import {
    useSendMessageMutation,
    SendMessageDto,
    CONTACT_MESSAGE_CACHE_KEY,
} from '@/shared/api';

export function SendMessageForm() {
    const [sendMessage, { isLoading }] = useSendMessageMutation({
        fixedCacheKey: CONTACT_MESSAGE_CACHE_KEY,
    });

    const formik = useFormik({
        validate: (values: SendMessageDto) => {
            const errors: Partial<SendMessageDto> = {};
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
        onSubmit: async (values: SendMessageDto) => {
            try {
                await sendMessage(values).unwrap();
                formik.resetForm();
            } catch {
                // Ошибка обрабатывается через Swal в queryFn
            }
        },
    });

    return (
        <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.inputContainer}>
                <div className={styles.inputMessageBlock}>
                    <input
                        placeholder="Your Name"
                        type="text"
                        disabled={isLoading}
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
                        disabled={isLoading}
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
                    disabled={isLoading}
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
                <Button type="submit" disabled={!formik.isValid || isLoading}>
                    <span style={{ marginRight: '10px' }}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </span>
                    {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
            </div>
        </form>
    );
}
