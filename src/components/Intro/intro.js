import React from 'react';
import './intro.css';
import bg from '../../img/bg.png';
import btnImg from '../../img/hire.png'
import {Link} from 'react-scroll'; 
//import {Link} from 'react-router-dom';
const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Faseehul</span> 
                <br/>Salesforce Developer</span>
                <p className="introPara">I am skilled Developer with knoledge of Configuration, 
                <br/> Customization and Lightning web components.</p>
                <Link to="/"><button className ="btn"><img src={btnImg} alt="Hire" className="btnImg"/>Hire Me</button></Link>

            </div>
            <img src={bg} alt="" className="bg"/>
        </section>
    )
}
export default Intro;
