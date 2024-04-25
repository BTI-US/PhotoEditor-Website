import { useState } from "react";
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
// import { Link } from "react-router-dom";
import CloseEye from "../../svg/CloseEye";
import OpenEye from "../../svg/OpenEye";

interface FormData {
   name: string;
   email: string;
   password: string;
}

const RegisterForm = () => {

   const schema = yup
      .object({
         name: yup.string().required().label("Name"),
         email: yup.string().required().email().label("Email"),
         password: yup.string().required().label("Password"),
      })
      .required();

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = () => {
      const notify = () => toast('Registration successfully', { position: 'top-center' });
      notify();
      reset();
   };

   const [isPasswordVisible, setPasswordVisibility] = useState(false);

   const togglePasswordVisibility = () => {
      setPasswordVisibility(!isPasswordVisible);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="eg-login__input-wrapper" style={{ marginBottom: '50px' }}>
            <div className="eg-login__input-box">
               <div className="eg-login__input">
                  <label htmlFor="name">Your address will be shown after login</label>
                  <input id="name" {...register("name")} type="text" placeholder="Address will be shown here" />
                  <p className="form_error">{errors.name?.message}</p>
               </div>
            </div>
            <div className="eg-login__input-box">
               <div className="eg-login__input">
                  <label htmlFor="email">Your activation code will be shown after login</label>
                  <input id="email" {...register("email")} type="email" placeholder="Activation code will be shown here" />
                  <p className="form_error">{errors.email?.message}</p>
               </div>
            </div>
            <div className="eg-login__input-box">
               <div className="eg-login__input">
                  <label htmlFor="eg-password__input">Your promotion code will be shown after login</label>
                  <div className="eg-password-show">
                     <input id="eg-password__input" {...register("password")} type={isPasswordVisible ? "text" : "password"} placeholder="Min. 6 characters" />
                     <div className="eg-login__input-eye" id="eg-password__show-toggle" onClick={togglePasswordVisibility} >
                        {isPasswordVisible ? (
                           <span id="eg-password__show" className="eye-open"><CloseEye /></span>
                        ) : (
                           <span id="eg-password__hide" className="open-close"><OpenEye /> </span>
                        )}
                     </div>
                  </div>
                  <p className="form_error">{errors.password?.message}</p>
               </div>
            </div>
         </div>
         {/* <div className="eg-login__suggetions d-flex align-items-center justify-content-between mb-20">
            <div className="eg-login__remeber">
               <input id="remeber" type="checkbox" />
               <label htmlFor="remeber">Remember me</label>
            </div>
            <div className="eg-login__forgot">
               <Link to="/forgot">Forgot Password?</Link>
            </div>
         </div> */}
         <div className="eg-login__bottom">
           <button type="submit" className="btn w-100">Check Your Eligibility</button>
         </div>
      </form>
   )
}

export default RegisterForm;
