import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import {LoginParamsType} from "../Main/MainContent/Contacts/Contacts";
const SERVICE_KEY = 'service_ckfx63k';
const TMPL_KEY = 'template_psujnfi';
const PUBLIC_KEY = 'Bby4swUY2SI7wKbVX'



export const sendMessage = async (mailData:LoginParamsType) => {

    try {
        const res = await emailjs.send(SERVICE_KEY, TMPL_KEY,mailData,PUBLIC_KEY);
        if (res.status === 200){

            Swal.fire(
                'Good job!',
                'Your message successfully send!',
                'success'
            )
        }
    } catch (e) {
        console.log(e)
    }
}