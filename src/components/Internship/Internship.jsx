import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import int1 from "../../images/int1.png";
import int2 from "../../images/int2.png";
import int3 from "../../images/int3.png";
import int4 from "../../images/int4.png";
import int5 from "../../images/int5.png";
import int6 from "../../images/int6.png";
import int7 from "../../images/int7.png";
import int8 from "../../images/int8.png";
import int9 from "../../images/int9.png";
import "./Internship.css";





const Internship = () => {
  return (
    <div className="int_main">
        <Carousel autoPlay infiniteLoop stopOnHover={false}>
                <div>
                    <img src={int1} />
                </div>
                <div>
                    <img src={int2} />
                </div>
                <div>
                    <img src={int3} />
                </div>
                <div>
                    <img src={int4} />
                </div>
                <div>
                    <img src={int5} />
                </div>
                <div>
                    <img src={int6} />
                </div>
                <div>
                    <img src={int7} />
                </div>
                <div>
                    <img src={int9} />
                </div>
                <div>
                    <img src={int8} />
                </div>
            </Carousel>
    </div>
  )
}

export default Internship
