import '../styling/devTools.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faTools } from "@fortawesome/free-solid-svg-icons";

function DevTools() {
  return (
    <div className="BG2">
        <div className="wrapper">
            <h1 className='devH'>Development Tools and Skills</h1>

            <div className="detail-section pg-skill">
                <div className="detail-title">
                <div className="title-icon">
                    <FontAwesomeIcon icon={faLaptopCode} style={{ color: '#4682bf' }} size="2.5rem" />
                    <span>Programming skills</span>
                </div>
                
                </div>

                <div className="detail-content">
                <ul className="pg-list">
                    {[
                    { name: "HTML5", length: "70%" },
                    { name: "CSS5", length: "65%" },
                    { name: "Javascript", length: "70%" },
                    { name: "NodeJS", length: "65%" },
                    { name: "ReactJS", length: "55%" },
                    { name: "Java", length: "80%" },
                    { name: "C#", length: "60%" },
                    { name: "Python", length: "40%" },
                    ].map((skill, index) => (
                    <li key={index}>
                        <span>{skill.name}</span>
                        <div className="sb-skeleton">
                        <div className="skillbar" style={{ "--pgbar-length": skill.length }}></div>
                        </div>
                    </li>
                    ))}
                </ul>
                </div>
            </div>

            <div className="detail-section tool-skill">
                <div className="detail-title">
                <div className="title-icon">
                    <FontAwesomeIcon icon={faTools} style={{ color: '#4682bf' }} size="2.5rem" />
                    <span>Development Tools</span>
                </div>
                
                </div>

                <div className="detail-content">
                <ul className="tool-list">
                    {[
                    { name: "IntelliJ Idea", percent: 0.8 },
                    { name: "ApacheNetBeans", percent: 0.7 },
                    { name: "Git", percent: 0.78 },
                    { name: "NPM", percent: 0.69 },
                    ].map((tool, index) => (
                    <li key={index}>
                        <svg viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle
                            className="cbar"
                            cx="50"
                            cy="50"
                            r="45"
                            style={{ "--percent": tool.percent }}
                        ></circle>
                        </svg>
                        <span className="tl-name">{tool.name}</span>
                        <span className="tl-exp">{`${Math.round(tool.percent * 100)}%`}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default DevTools;
