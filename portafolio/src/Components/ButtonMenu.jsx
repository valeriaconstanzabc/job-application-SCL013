import React from 'react'
import '../Css/Menu.css'
import Menu from './Menu'

const ButtonMenu = () => {

    const [menu,setMenu] = React.useState(null);
    
    const clickMenu = () => {
        return (
            () => setMenu(menu === null ? <Menu /> : null)
        )
    }
    return (
        <div id="containerIconMenu">
            <button id="btnIconMenu" onClick={ clickMenu()} >
            {menu}
                <img src="http://imgfz.com/i/0hTGpaF.png" id="imgIconMenu" alt="menu"/>
            </button>
            
        </div>

    )
}

export default ButtonMenu
