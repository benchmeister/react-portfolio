import React, { Component } from "react";
import {Link, useLocation} from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import "../styles/Nav.css"



export default function Nav() {

    const location = useLocation(); // to specify the location of the page (i.e., contact? index?)

    const getNavPositionClass = () => { // to get path name value, need to use .pathname from "location" object
        switch (location.pathname) {
            case "/": 
                return "nav-about"
            case "/skills": 
                return "nav-skills"
            case "/projects": 
                return "nav-projects"
            case "/contact": 
                return "nav-contact"
            default: 
                return "";
        }
    };

    const getPageTitle = () => {
        switch (location.pathname) {
            case "/": 
                return "ABOUT"
            case "/skills": 
                return "SKILLS"
            case "/projects": 
                return "PROJECTS"
            case "/contact": 
                return "CONTACT"
            default: 
                return "";
        }
    };

    const navPositionClass = getNavPositionClass();
    const PageTitle = getPageTitle();

    const isCurrentPage = (navClass) => {
        return navClass === navPositionClass;
      }; //check what page we are on, returning true or false

    const renderNavLink = (to, imgSrc, altText, navClass) => {
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent ? "nav-link current" : "nav-link";

        return (
            <Link to={to} className={linkClass}>
                <img src={imgSrc} alt={altText} />
                {isCurrent && <h1 className="page-title">{PageTitle}</h1>}
            </Link>
        );
    }; // the arguments are parsed in the function below


    return (
        <nav className={`nav ${navPositionClass}`}>
            {renderNavLink(
                "/", // 'to'
                astronautHelmet, // 'imgSrc' 
                "astronaut helmet icon", //' 'altText'
                "nav-about" // 'navClass'
            )}
            {renderNavLink(
                "/skills", // 'to'
                deadEye, // 'imgSrc' 
                "deadeye icon", //' 'altText'
                "nav-skills" // 'navClass'
            )}
            {renderNavLink(
                "/projects", // 'to'
                stack, // 'imgSrc' 
                "stack icon", //' 'altText'
                "nav-projects" // 'navClass'
            )}
            {renderNavLink(
                "/contact", // 'to'
                envelope, // 'imgSrc' 
                "envelope icon", //' 'altText'
                "nav-contact" // 'navClass'
            )}
          
        </nav>
    ) // arguments to renderNavLink




    
}

