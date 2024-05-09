import image from '../assets/Group 15.png'
import loca from '../assets/location.png'
import cont from '../assets/contact.png'
import email from '../assets/email.png'
function Info(){
    return (
        <div>
            <img className='info-img' src={image} alt='' />
            <div>
                <div className='info-div'>
                    <img src={loca} alt='' />
                    <p className="info-p">838 Cantt Siakot,pakistan</p>
                </div>
                <div className='info-div'>
                    <img src={cont} alt='' />
                    <p className="info-p">979-988-89787</p>
                </div>
                <div className='info-div'>
                    
                    <p className="info-p">abcd123@gmail.com</p>
                </div>
            </div>
        </div>

    )
}

export default Info