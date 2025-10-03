/* eslint-disable jsx-a11y/img-redundant-alt */
import CvImage from '../../assets/CvImage.jpeg';
import '../styling/cover-page.css';

function CoverPg(){
    return(
        <div className="profile">

            <div className='photo'>
                <img src={CvImage} alt='Mandla Ndiweni CV Image' className='grid-image'/>
            </div>

            <div className='bio'>
                <h1 className='name'>Mandla Ndiweni</h1>
                <p className='prof'>Software Engineer/Web Developer</p>
                <p className="paragraph">
                    A hardworking and goal driven young man looking for an Internship to help ease into the world of IT as I complete my studies. 
                    My journey into the world of IT began back in my 10th grade year (2020), I have been fond of the journey and all the experiences ever since. 
                    Although I have no experience in the IT workplace I believe I can be a great addition to a team of young employees.
                </p>
                <button onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/Mandla Ndiweni.pdf';
                        link.download = 'Mandla Ndiweni.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}
                    className="btnDownload" >
                Download CV
                </button>
            </div>
        </div>
    );
}

export default CoverPg;