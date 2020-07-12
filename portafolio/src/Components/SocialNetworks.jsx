import React from 'react'
import '../Css/SocialNetworks.css'

const SocialNetworks = () => {
    return (
        <div id="containerSocialNetworks">
            <div className="containerBTNSocial">
                <button className="btnSocial">
                    <img src="http://imgfz.com/i/WJ68FUz.png" className="imgSocial" alt="linkedin"/>
                </button>
            </div>
            <div className="containerBTNSocial">
                <button className="btnSocial">
                    <img src="http://imgfz.com/i/iQHKf6A.png" className="imgSocial" alt="github"/>
                </button>
            </div>
            <div className="containerBTNSocial">
                <button className="btnSocial">
                    <img src="http://imgfz.com/i/1AvgpSc.png" className="imgSocial" alt="email"/>
                </button>
            </div>
            <div className="containerBTNSocial">
                <button className="btnSocial">
                    <img src="http://imgfz.com/i/EulG6P1.png" className="imgSocial" alt="cv"/>
                </button>
            </div>
        </div>
    )
}

export default SocialNetworks
