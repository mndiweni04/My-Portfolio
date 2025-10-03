import { useEffect, useState } from 'react';
import '..//styling/aboutme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faRunning, faMusic, faBookReader, faTshirt, faHeart, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import img1 from '../../assets/prtImg1.jpg';
import img2 from '../../assets/prtImg2.jpg';
import img3 from '../../assets/prtImg3.jpg';
import img4 from '../../assets/prtImg4.jpg';

const Images = [img1, img2, img3, img4];

function AboutMe(){
    const [index, setIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setIndex(prev => (prev + 1) % Images.length); 
    }, 3500); 

    return () => clearInterval(interval); 
    }, []);

    return(
        <div className="BG">
            <div className="wrapper">
                <div className="about-me">

                    <div className="para">
                        <h1>About Me</h1>
                        <p>From endless debugging to thorough testing, I believe in maintaining a positive and enjoyable approach 
                            to every task, whether working solo or with colleagues, while always striving to complete my 
                            work with efficiency and speed. As a student at Belgium Campus, I plan to master the art of programming 
                            and proudly wear the title “Software Developer”.</p>
                        <p>While programming is a passion of mine, I am also an athletic, outgoing, and well-spoken individual
                            with a love for the outdoors, travel, fashion, music, athletics, and cars.</p>
                        <p>But when it is all said and done, I am honestly itching to make a dent in the world of programming, 
                            so let us work together and take part in endless fruitful endeavours while we make a change in 
                            the world.</p>
                    </div>

                    <div className="detail-section edu">
                        <div className="detail-title">
                            <div className="title-icon2">
                                <FontAwesomeIcon icon={faUserGraduate} style={{ color: '#4682bf' }} size="2.5rem" />
                                <span>Education</span>
                            </div>
                        </div>
                        
                        <div className="detail-content">
                            <div className="timeline-block">
                                <h1>High School</h1>
                                <p>Edenvale High School, Johannesburg, South Africa</p>
                                <time>2018 - 2022</time>
                            </div>
                                
                            <div className="timeline-block">
                                <h1>Institute of Computer Science</h1>
                                <p>Belgium Campus ITVersity, South Africa</p>
                                <time>2023 - present</time>
                            </div>
                        </div>
                    </div>

                    <div className="ImgContain">
                        <img src={Images[index]} alt={`Slide ${index + 1}`} className="abt-img-large" />
                    </div>
                </div>

                <div className="detail-section interests">
                    <div className="detail-title">
                        <div className="title-icon">
                            <FontAwesomeIcon icon={faHeart} style={{ color: '#4682bf' }} size="2.5rem" />
                            <span>Interests</span>
                        </div>
                    </div>
                    
                    <div className="detail-content">
                        <div className="outer-frame">
                            <ul className="favor-list">
                            <li>
                                <FontAwesomeIcon icon={faCar} style={{ color: '#4682bf' }}/>
                                <span>Travelling</span>
                            </li>
                                
                            <li>
                                <FontAwesomeIcon icon={faRunning} style={{ color: '#4682bf' }}/>
                                <span>Athletics</span>
                            </li>
                                
                            <li>
                                <FontAwesomeIcon icon={faMusic} style={{ color: '#4682bf' }}/>
                                <span>Music</span>
                            </li>
                                
                            <li>
                                <FontAwesomeIcon icon={faBookReader} style={{ color: '#4682bf' }}/>
                                <span>Self-learning</span>
                            </li>
                                
                            <li>
                                <FontAwesomeIcon icon={faTshirt} style={{ color: '#4682bf' }}/>
                                <span>Fashion</span>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AboutMe;