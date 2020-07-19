import React from "react";
import { slide as Menu } from "react-burger-menu";
import '../Css/Menu.css'

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        HOME
      </a>

      <a className="menu-item" href="/acercaDeMi">
        ACERCA DE MI
      </a>

      <a className="menu-item" href="/proyectos">
        PROYECTOS
      </a>
      <a className="menu-item-proyects" href="/proyectos">
        - Lofche
      </a>
      <a className="menu-item-proyects" href="/proyectos">
        - Guia muggle
      </a>
      <a className="menu-item-proyects" href="/proyectos">
        - La gatera hotelera
      </a>
      <a className="menu-item-proyects" href="/proyectos">
        - Burguer-queen
      </a>

      <a className="menu-item" href="/herramientas">
        HERRAMIENTAS
      </a>
    </Menu>
  );
};