import { Link } from "react-router-dom";

interface DataType {
   id: number;
   title: JSX.Element;
   desc: JSX.Element;
   img: string;
}
const feature_data: DataType[] = [
   {
      id: 1,
      title: (<>Easy to Use</>),
      desc: (<>Our software is designed with a user-friendly interface, making photo editing a breeze.</>),
      img: "/assets/img/images/features_img01.png",
   },
   {
      id: 2,
      title: (<>Compatible with Crypto Exchanger Templates</>),
      desc: (<>Our software is compatible with a wide range of crypto exchanger templates, allowing for seamless integration.</>),
      img: "/assets/img/images/features_img02.png",
   },
   {
      id: 3,
      title: (<>Intelligent Character Transformation</>),
      desc: (<>Efficiently and precisely change characters in your photos, freeing you from laborious work.</>),
      img: "/assets/img/images/features_img03.png",
   },
   {
      id: 4,
      title: (<>API for Quick Revisions</>),
      desc: (<>We provide an API to deal with revisions more quickly, enhancing your productivity.</>),
      img: "/assets/img/images/features_img04.png",
   },
]
const FeatureOne = () => {
   return (
      <section id="feature" className="features-area pt-140 pb-110">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="section-title text-center mb-70">
                     <h2 className="title">Experience Seamless Photo Editing with Our Intelligent Editor</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-lg-6">
                     <div className="features-item">
                        <div className="features-content">
                           <h2 className="title"><Link to="#!">{item.title}</Link></h2>
                           <p>{item.desc}</p>
                        </div>
                        <div className="features-img">
                           <img src={item.img} alt="" />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default FeatureOne
