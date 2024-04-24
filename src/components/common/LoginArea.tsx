// import { Link } from "react-router-dom";
import RegisterForm from "../forms/RegisterForm";
import LoginForm from "../forms/LoginForm";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LogingArea = ({ style }: any) => {

   return (
      <section className="eg-login__area pt-140 pb-140 p-relative z-index-1 fix">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="eg-login__wrapper">
                     {style ? (
                        <div className="eg-login__top text-center mb-30">
                           <h3 className="eg-login__title">Your Account</h3>
                           <p>Press the button below to proceed checking</p>
                        </div>) : (
                        <div className="eg-login__top text-center mb-30">
                           <h3 className="eg-login__title">Connect Your Wallet</h3>
                           <p>Connect your wallet to claim your activation code</p>
                        </div>)}
                     <div className="eg-login__option">
                        {style ? <RegisterForm /> : <LoginForm />}
                        {/* <div className="eg-login__mail text-center mt-20 mb-20">
                           <p>or</p>
                        </div>
                        <div className="eg-login__social mb-10 ">
                           <div className="eg-login__option-item">
                              <Link to="#"><img src="/assets/img/icons/google.svg" alt="" /> Sign in with google </Link>
                           </div>
                           <div className="eg-login__option-item">
                              <Link to="#">  <img src="/assets/img/icons/facebook.svg" alt="" /> Sign in with facebook </Link>
                           </div>
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default LogingArea;
