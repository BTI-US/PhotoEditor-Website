import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

const emailToken = import.meta.env.VITE_EMAIL_TOKEN as string;
const emailServiceID = import.meta.env.VITE_EMAIL_SERVICE_ID as string || 'editor_email';
const emailTemplate = import.meta.env.VITE_EMAIL_TEMPLATE as string || 'editor_email_template';

interface FormData {
   email: string;
}

const schema = yup
   .object({
      email: yup.string().required().email().label("Email"),
   })
   .required();

function sendSubscriptionEmail(userEmail: string) {
   return fetch('/email/index.html')
      .then(response => response.text())
      .then(htmlBody => {
         const templateParams = {
            to_email: userEmail,
            reply_to: userEmail,
            message_html: htmlBody
         };

         return fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               service_id: emailServiceID,
               template_id: emailTemplate,
               user_id: emailToken,
               template_params: templateParams,
            })
         });
      })
   .then(response => {
      if (!response.ok) {
         throw new Error('Failed to send email');
      }
      return response;
   });
}

const NewsletterForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = (data: FormData) => {
      sendSubscriptionEmail(data.email)
      .then(() => {
         const notify = () => toast('Email sent successfully', { position: 'top-center' });
         notify();
         reset();
      })
      .catch((error) => {
         console.error('Failed to send email:', error);
         toast('Failed to send email', { position: 'top-center' });
      });
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <input type="email" {...register("email")} placeholder="contact@photoeditor.com" />
         <p className="form_error">{errors.email?.message}</p>
         <button type="submit"><i className="fas fa-paper-plane"></i></button>
      </form>
   )
}

export default NewsletterForm
