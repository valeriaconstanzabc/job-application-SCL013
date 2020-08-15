import React from 'react'
import '../Css/AboutMe.css'

const AboutMe = () => {
    return (
        <div id="containerAboutMe">
            <div className="containerTittle">
                <h5 className="tittle">ACERCA DE MI</h5>
                <h3 className="pointTittle">.</h3>
            </div>
            <div id="containerColorAboutMe">
                <p id="descriptionAboutMe">
                    Mi nombre es Valeria Brito, mujer creativa, apasionada por las artes 
                    manuales, la fotografía, la tecnología y el diseño.
                    <br/>
                    <br/>
                    Este último ha estado presente a lo largo de toda mi vida, y a pesar 
                    de cursar la carrera de Diseño de ambientes con distinción máxima, lo 
                    que de verdad llamaba mi atención eran las nuevas tecnologías que aprendí 
                    durante esos 4 años de estudio.
                    <br/>
                    <br/>
                    Mis capacidades eran mucho mayores y quise arriesgar todo lo que tenía, 
                    para aceptar el desafío de Laboratoria. Un lugar donde podría complementar 
                    ambas pasiones y desarrollar grandes talentos como las competencias 
                    digitales, el autoaprendizaje, la adaptación, y reforzar aún más la 
                    colaboración en equipo. 
                </p>
            </div>
            
        </div>
    )
}

export default AboutMe
