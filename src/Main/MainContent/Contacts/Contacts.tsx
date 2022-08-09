import commonStyle from "../../../Common/Styles/h.module.scss";
import React, {useEffect} from "react";
import styles from "./Contacts.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import Button from "../../../Common/components/Button";
import {titles} from "../../../Common/components/CommonData";
import {Fade} from "react-awesome-reveal";
import {sendMessage} from "../../../api/emailjs";
import {useFormik} from "formik";

type FormikErrorType = {
    email: string
    name: string
    message: string
}
export type LoginParamsType = FormikErrorType

export function Contacts() {

    const formik = useFormik({
        validate: (values) => {
            const errors: Partial<FormikErrorType> = {};
            if (!values.email) {
                errors.email = 'Email Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (values.name.length < 5) {
                errors.message = "Invalid password message"
            }
            if (!values.name) {
                errors.name = "Name required"
            }
            return errors;
        },
        initialValues: {
            name: "",
            email: "",
            message: "",
        },

        onSubmit: (loginParams: LoginParamsType) => {
            sendMessage(loginParams)
            formik.resetForm()
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
                <div className={styles.inputWrapper}>
                    <input className={styles.input} type="text" placeholder="Name" {...formik.getFieldProps("name")}/>
                    {formik.touched.name && formik.errors.name ?
                        <div className={styles.emailError}>{formik.errors.name}</div> : null}
                    <input className={styles.input} type="text" placeholder="Email" {...formik.getFieldProps("email")}/>
                    {formik.touched.email && formik.errors.email ?
                        <div className={styles.emailError}>{formik.errors.email}</div> : null}

                </div>
                <textarea className={styles.textArea} placeholder="Your Message" {...formik.getFieldProps("message")}/>
                {formik.touched.message && formik.errors.message ?
                    <div className={styles.emailError}>{formik.errors.message}</div> : null}
                <div>
                    <Button type={"submit"}>
                        <FontAwesomeIcon
                            icon={faPaperPlane}/>
                        <span style={{marginLeft: "10px"}}>Submit</span>
                    </Button>
                </div>
            </section>
            </Fade>
        </form>
    );
}