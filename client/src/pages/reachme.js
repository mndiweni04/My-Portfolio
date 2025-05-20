import React from "react";
import './reachme.css';
import emailjs from 'emailjs-com';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope, faMapLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ReachMe(){

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_47dlsko',
            'template_dt44ahs',
            e.target,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ).then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
            e.target.reset();
        }, (error) => {
            console.error(error.text);
            alert('An error occurred, please try again.');
        });
    };

    return(
        <div className="ReachMe">
            <div className='intro-section'>
                <div className='follow'>
                    <h1 className="title">Follow</h1>
                    <div className="info-section link">
                        <FontAwesomeIcon icon={faGithub}/>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mndiweni04">
                            <span> mndiweni04@github</span>
                        </a>
                    </div>
                    
                    <div className="info-section link">
                        <FontAwesomeIcon icon={faLinkedin}/>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mandla-ndiweni-74a35a2a1/">
                            <span> Mandla Ndiweni LinkedIn</span>
                        </a>
                    </div>
                </div>

                <div className='contact'>
                    <h1 className="title">Contact</h1>
                    <div className="info-section">
                        <FontAwesomeIcon icon={faPhone}/>
                        <span> (+27) 81-796-6625</span>
                    </div>
                    
                    <div className="info-section">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <span> mndiweni04@gmail.com</span>
                    </div>

                    <div className="info-section">
                        <FontAwesomeIcon icon={faMapLocationDot}/>
                        <span> Johannesburg Gauteng South Africa</span>
                    </div>
                </div>
            </div>

           <form className="contact-form"  onSubmit={sendEmail}>
                <div className="name-surname">
                    <input type="text" placeholder="First Name" name="from_firstname" required />
                    <input type="text" placeholder="Last Name" name="from_lastname" required />
                </div>

                <div className="form-group">
                    <input type="email" placeholder="Email" name="from_email" required />
                </div>

                <div className="form-group">
                    <textarea placeholder="Your Message" name="from_message" rows="5" required></textarea>
                </div>

                <button type="submit" className="btnSubmit">Send</button>
                <button type="reset" className="btnClear">Clear</button>
            </form>
        </div>
        
    )
}

export default ReachMe;
