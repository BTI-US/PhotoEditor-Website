import Slider from "react-slick";

interface DataTyfe {
   id: number;
   roadmap_title: string;
   title: string;
   desc: JSX.Element;
}

const roadmap_data: DataTyfe[] = [
   {
      id: 1,
      roadmap_title: "End of Q4 2023",
      title: "Concept Development",
      desc: (<>The initial concept for the AI-based Photo Editor is developed and approved. This includes defining the core features and the AI capabilities of the editor.</>),
   },
   {
      id: 2,
      roadmap_title: "App Beta Test",
      title: "Prototype Development",
      desc: (<>Development of a working prototype of the AI-based Photo Editor. This involves implementing the core features and AI capabilities defined in the concept development stage.</>),
   },
   {
      id: 3,
      roadmap_title: "End of Q4 2023",
      title: "Alpha Test",
      desc: (<>First round of testing with a limited group of users. This allows us to gather feedback and make necessary improvements before the beta test.</>),
   },
   {
      id: 4,
      roadmap_title: "End of Q4 2023",
      title: "Beta Test",
      desc: (<>Second round of testing with a larger group of users. This allows us to gather more feedback and make further improvements before the official launch.</>),
   },
   {
      id: 5,
      roadmap_title: "End of Q4 2023",
      title: "Official Launch",
      desc: (<>Official launch of the AI-based Photo Editor to the public. At this point, the editor is fully functional and ready for use.</>),
   },
]

const settings = {
   dots: false,
   infinite: true,
   speed: 1000,
   centerMode: true,
   centerPadding: '260px',
   autoplay: true,
   arrows: false,
   slidesToShow: 3,
   slidesToScroll: 1,
   responsive: [
      {
         breakpoint: 1400,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            centerPadding: '100px',
         }
      },
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            centerPadding: '40px',
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            enterPadding: '0',
            centerMode: false,
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            enterPadding: '0',
            centerMode: false,
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            enterPadding: '0',
            centerMode: false,
         }
      },
   ]
}

const RoadMapArea = () => {
   return (
      <section id="roadMap" className="roadmap-area pt-140">
         <div className="container-fluid p-0">
            <div className="row g-0">
               <div className="col-lg-12">
                  <div className="section-title text-center mb-70">
                     <h2 className="title">Our Roadmap</h2>
                  </div>
               </div>
            </div>
            <Slider {...settings} className="row roadMap-active">
               {roadmap_data.map((item) => (
                  <div key={item.id} className="col-lg-4">
                     <div className="roadmap-item">
                        <span className="roadmap-title">{item.roadmap_title}</span>
                        <div className="roadmap-content">
                           <h4 className="title"><span className="dot"></span>{item.title}</h4>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </section>
   )
}

export default RoadMapArea
