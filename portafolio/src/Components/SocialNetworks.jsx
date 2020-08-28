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
                <a target="blank" rel="Laboratoria" href="https://app.talento.laboratoria.la/profile/8K0fyeaWPuQJVmpDzGyREWu9U8J3">
                    <button className="btnSocial">
                        <img src="https://i.ibb.co/yfnK3cT/Group-31.png" className="imgSocial" alt="laboratoria"/>
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
