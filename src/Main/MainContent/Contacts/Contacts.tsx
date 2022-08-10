import commonStyle from "../../../Common/Styles/h.module.scss";
import React, {useEffect} from "react";
import styles from "./Contacts.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import Button from "../../../Common/components/Button";
import {titles} from "../../../Common/components/CommonData";
import {Fade} from "react-awesome-reveal";
import {useFormik} from "formik";
import {sendMessageTC} from "../../../state/app-reducer";
import {useAppDispatch} from "../../../state/store";

type FormikErrorType = {
    email: string
    name: string
    message: string
}
export type LoginParamsType = FormikErrorType

export function Contacts() {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        validate: (values) => {
            const errors: Partial<FormikErrorType> = {};
            if (!values.email) {
                errors.email = 'Email required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (values.name.length < 5) {
                errors.message = "Invalid password message"
            }
            if (!values.name) {
                errors.name = "Name required"
            }
            if (!values.message) {
                errors.message = "Message required"
            }
            return errors;
        },
        initialValues: {
            name: "",
            email: "",
            message: "",
        },

        onSubmit: (loginParams: LoginParamsType) => {
            dispatch(sendMessageTC(loginParams));
            formik.resetForm();
        }
    })
    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                formik.handleSubmit()
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [formik]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <Fade cascade={true}>
                <h2 className={commonStyle.h2}>{titles.title4}</h2>
                <section className={styles.allForms}>
                    <div className={styles.inputContent}>
                        <div className={styles.inputContent__inputItem}>
                            <input className={formik.touched.name && formik.errors.name ? styles.inputError : styles.input} type="text"
                                   placeholder="Name" {...formik.getFieldProps("name")}/>
                            {formik.touched.name && formik.errors.name ?
                                <div className={styles.formikError}>{formik.errors.name}</div> : null}
                        </div>
                        <div className={styles.inputContent__inputItem}>
                            <input className={formik.touched.email && formik.errors.email ? styles.inputError : styles.input} type="text"
                                   placeholder="Email" {...formik.getFieldProps("email")}/>
                            {formik.touched.email && formik.errors.email ?
                                <div className={styles.formikError}>{formik.errors.email}</div> : null}
                        </div>
                    </div>
                    <div className={styles.inputContent__textArea}>
                              <textarea className={formik.touched.message && formik.errors.message ? styles.textAreaError : styles.textArea}
                              placeholder="Your Message" {...formik.getFieldProps("message")}/>
                        {formik.touched.message && formik.errors.message ?
                            <div className={styles.formikError}>{formik.errors.message}</div> : null}
                    </div>

                        <Button type={"submit"}>
                            <FontAwesomeIcon
                                icon={faPaperPlane}/>
                            <span style={{marginLeft: "10px"}}>Submit</span>
                        </Button>

                </section>
            </Fade>
        </form>
    );
}