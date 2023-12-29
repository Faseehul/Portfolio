import React from 'react';
import './skills.css';
import AdminImg from '../../img/AdminImg.png';
import DevImg from '../../img/DevImg.png';
import LWCImg from '../../img/LWCImg.png';
const Skills = () => {
    return(
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDes'>I am skilled and passionate Salesforce Developer with knoledge of 
            Admin, Development and LWC.</span>
            <div className='skillBars'>
            <div className='skillBar'>
                <img src={AdminImg} alt='AdminImg' className='skillBarImg' />
                <div className='skillBarText' >
                    <h2>Salesforce Admin</h2>
                    <p>Admins can create custom Salesforce objects, workflows, validation rules, reports, and more. 
                        Admins can manage user profile information and delete Chatter feed updates, including posts and comments. 
                        Admins are planners, problem-solvers, and heroes. 
                        All Salesforce organizations have at least one administrator.</p>
                </div>

            </div>
            <div className='skillBar'>
                <img src={DevImg} alt='DevImg' className='skillBarImg' />
                <div className='skillBarText' >
                    <h2>Salesforce Development</h2>
                    <p>The coding language used in Salesforce is called Apex. 
                        It is a proprietary language that was created specifically for the Salesforce platform. 
                        Apex is similar to Java in terms of syntax, but it also has some unique features that make it ideal 
                        for building applications within Salesforce. In development we use Apex Trigger, wrapper Class, Async etc.</p>
                </div>

            </div>
            <div className='skillBar'>
                <img src={LWCImg} alt='LWCImg' className='skillBarImg' />
                <div className='skillBarText' >
                    <h2>Lightning web components</h2>
                    <p>Lightning Web Components (LWC) are a user interface (UI) framework that Salesforce Developers 
                        use to create customized pages and functions on the Salesforce platform. 
                        LWCs use a standardized JavaScript framework, HTML, and CSS, without a third-party framework</p>
                </div>

            </div>


            </div>
        </section>
    );
}
export default Skills; 