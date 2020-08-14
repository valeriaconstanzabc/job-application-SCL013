import React from 'react'
import '../Css/Tools.css'
import '../Css/AboutMe.css'

const Tools = () => {
    return (
        <div id="containerTools">
            <div className="containerTittle">
                <h5 className="tittle">HERRAMIENTAS</h5>
                <h3 className="pointTittleTools">.</h3>
            </div>
            <div id="containerColorTools">
                <div id="containerTotalTools">
                    <div className="imgToolsHTML5">
                        <div className="containerImgTools">
                            <h2 className="textImgTools">HTML5</h2>
                        </div>
                    </div>
                    <div className="imgToolsJS">
                        <div className="containerImgTools">
                            <h2 className="textImgTools">JavaScript</h2>
                        </div>
                    </div>
                    <div className="imgToolsCSS">
                        <div className="containerImgTools">
                            <h2 className="textImgTools">CSS</h2>
                        </div>
                    </div>
                    <div className="imgToolsNodeJS">
                        <div className="containerImgTools">
                            <h2 className="textImgTools">NodeJS</h2>
                        </div>
                    </div>
                    <div className="imgToolsReact">
                        <div className="containerImgTools">
                            <h2 className="textImgTools">React</h2>
                        </div>
                    </div>
                    <div className="imgToolsFirebase">
                        <div className="containerImgTools">
                            <h2 className="textImgTools">Firebase</h2>
                        </div>
                    </div>
                    <div className="imgToolsGithub">
                        <div className="containerImgTools">
                            <h2 className="textImgTools">Github</h2>
                        </div>
                    </div>
                    <div className="imgToolsFigma">
                        <div className="containerImgTools">
                            <h2 className="textImgTools">Figma</h2>
                        </div>
                    </div>
                    <div className="imgToolsInvision">
                        <div className="containerImgTools">
                            <h2 className="textImgTools">Invision</h2>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Tools
