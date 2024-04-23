import { Link } from "react-router-dom"

const Contribution = () => {
   return (
      <section id="contribution" className="contribution-area pt-130 pb-130">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="contribution-title">
                     <h2 className="title"><span>156,432</span> Users Participating</h2>
                  </div>
                  <div className="progress-wrap">
                     <ul className="list-wrap">
                        <li>Public Test</li>
                        <li>Release Product</li>
                        <li>Future Development</li>
                     </ul>
                     <div className="progress" role="progressbar">
                        <div className="progress-bar" style={{ width: "20%" }}></div>
                     </div>
                     <h6 className="progress-title"> 20% of target reached <span>1,000 new users daily</span></h6>
                  </div>
                  <div className="contribution-btn">
                     <Link to="/contact" className="btn">Join Our Group</Link>
                     <Link to="/contact" className="btn btn-two">Read White Paper</Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="contribution-shape-wrap">
            <img src="/assets/img/images/contribution_shape01.png" alt="" className="alltuchtopdown" />
            <img src="/assets/img/images/contribution_shape02.png" alt="" className="leftToRight" />
         </div>
      </section>
   )
}

export default Contribution
