import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const SERVICE_KEY = import.meta.env.VITE_EMAILJS_SERVICE_KEY as string;
const TMPL_KEY = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export const CONTACT_MESSAGE_CACHE_KEY = 'contact-message';

export type SendMessageDto = {
    email: string;
    name: string;
    message: string;
};

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        sendMessage: builder.mutation<void, SendMessageDto>({
            queryFn: async (mailData) => {
                try {
                    const res = await emailjs.send(SERVICE_KEY, TMPL_KEY, mailData, PUBLIC_KEY);
                    if (res.status === 200) {
                        void Swal.fire('Good job!', 'Your message successfully sent!', 'success');
                        return { data: undefined };
                    }
                    return { error: 'Failed to send message' };
                } catch (e: unknown) {
                    const errorMessage = e instanceof Error ? e.message : 'Something went wrong while sending message!';
                    void Swal.fire('Oops...', 'Something went wrong while sending message!', 'error');
                    return { error: errorMessage };
                }
            },
        }),
    }),
});

export const { useSendMessageMutation } = contactApi;
