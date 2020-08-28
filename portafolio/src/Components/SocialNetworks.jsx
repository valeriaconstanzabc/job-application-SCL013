import React from 'react'
import '../Css/SocialNetworks.css'
import cv from '../CV/Valeria.Brito-CV.pdf';

const SocialNetworks = () => {
    return (
        <div id="containerSocialNetworks">
            <div id="containerTotalSocialNetworks">
            <div className="containerBTNSocial">
                <a target="blank" href="https://www.linkedin.com/in/valeriabritocastillo/">
                    <button className="btnSocial">
                        <img src="http://imgfz.com/i/WJ68FUz.png" className="imgSocial" alt="linkedin"/>
                    </button>
                </a>
            </div>
            <div className="containerBTNSocial">
                <a target="blank" rel="GitHub" href="https://github.com/valeriaconstanzabc">
                    <button className="btnSocial">
                        <img src="http://imgfz.com/i/iQHKf6A.png" className="imgSocial" alt="github"/>
                    </button>
                </a>
            </div>
            <div className="containerBTNSocial">
                <a target="blank" href="mailto:valeria.brito.c@gmail.com">
                    <button className="btnSocial">
                        <img src="http://imgfz.com/i/1AvgpSc.png" className="imgSocial" alt="email"/>
                    </button>
                </a>
            </div>
            <div className="containerBTNSocial">
                <a target="blank" href={cv} download="Valeria.Brito-CV.pdf">
                    <button className="btnSocial">
                        <img src="http://imgfz.com/i/EulG6P1.png" className="imgSocial" alt="cv"/>
                    </button>
                </a>
            </div>
            </div>
            
        </div>
    )
}

export default SocialNetworks
