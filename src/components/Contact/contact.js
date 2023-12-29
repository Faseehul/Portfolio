import React, {useRef} from "react";
import './contact.css';
import youTubeImg from '../../img/youtube.png';
import instaImg from '../../img/insta.png';
import gitHubImg from '../../img/github.png';
import linkedInImg from '../../img/linkedIn.png';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
//import { BrowserRouter, Link } from "react-router-dom";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_g5fe38e', 'template_3lhqhed', form.current, 'Ea3M8kq3KtsUjSoidAjKn')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <section id="contactPage">
            <div id="clients">
                

            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                    <input type="email" className="name" placeholder="Youe Email" name="your_email"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value='send' className="submitBtn">Submit</button>
                    <div className="plink">
                        <Link to='https://github.com/Faseehul'><img src={gitHubImg} alt="gitHub" className="link"/> </Link>
                        <Link to='https://www.linkedin.com/in/faseehul-kalam-934916219/'><img src={linkedInImg} alt="linkedIn" className="link"/> </Link>
                        <Link to='https://www.youtube.com/channel/UCG--GZ6_V4bFWrAnPkrsQ9Q'><img src={youTubeImg} alt="youTube" className="link"/> </Link>
                        <Link to=''><img src={instaImg} alt="instagram" className="link"/> </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Contact;