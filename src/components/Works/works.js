import React from "react";
import './works.css';
import workImg1 from '../../img/work1.jpg';
import workImg2 from '../../img/work2.jpg';
import workImg3 from '../../img/work3.png';
import workImg4 from '../../img/process.png';
import workImg5 from '../../img/work4.png';
import workImg6 from '../../img/lwc.png';
const Works= () => {
    return(
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I take pride in attention to the smallest details and 
            making sure that my works is pixel perfect. I am excited my skills and experience to help buisness achieve their
            goals and create astrong online presence.</span>
            <div className="worksImgs">
                <img src={workImg1} alt="workImg1" className="worksImg"/>
                <img src={workImg2} alt="workImg2" className="worksImg"/>
                <img src={workImg3} alt="workImg3" className="worksImg"/>
                <img src={workImg4} alt="workImg4" className="worksImg"/>
                <img src={workImg5} alt="workImg5" className="worksImg"/>
                <img src={workImg6} alt="workImg6" className="worksImg"/>
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
}
export default Works;