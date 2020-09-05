import React from "react";
import { slide as Menu } from "react-burger-menu";
import '../Css/Menu.css'

export default props => {
  return (
      <Menu {...props}>
        <a className="menu-item" href="/">
          <ul className="listMenu">
            <li>HOME</li>
          </ul>
        </a>

        <a className="menu-item" href="/acercaDeMi">
          <ul className="listMenu">
            <li>ACERCA DE MI</li>
          </ul>
        </a>

        <a className="menu-item" href="/proyectos">
          <ul className="listMenu">
            <li>PROYECTOS</li>
          </ul>
        </a>
        <a className="menu-item-proyects" href="/lofche">
          <ul className="listProjectsMenu">
            <li>Lofche</li>
          </ul>
        </a>
        <a className="menu-item-proyects" href="/guiamuggle">
          <ul className="listProjectsMenu">
            <li>Guia muggle</li>
          </ul>
        </a>
        <a className="menu-item-proyects" href="/mdlink">
          <ul className="listProjectsMenu">
            <li>MD-Links</li>
          </ul>
        </a>
        <a className="menu-item-proyects" href="/burgerqueen">
          <ul className="listProjectsMenu">
            <li>Burguer-queen</li>
          </ul>
        </a>
        <a className="menu-item-proyects" href="/hootiehoo">
          <ul className="listProjectsMenu">
            <li>Hootie-Hoo</li>
          </ul>
        </a>

        <a className="menu-item" href="/herramientas">
          <ul className="listMenu">
            <li>SOFTWARES</li>
          </ul>
        </a>
      </Menu>
  );
};