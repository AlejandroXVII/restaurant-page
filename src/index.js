import _ from 'lodash';
import './style.css';

const principalPage = (function () {
    const announceWinner = (symbol) => {}
})();

//CREATE THE STRUCTURE
const logoRamenSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>noodles</title><path d="M22 3L10 4.41V6H22V7H10V12H22C22 13.81 21.43 15.46 20.32 16.95S17.77 19.53 16 20.25V22H8V20.25C6.24 19.53 4.79 18.43 3.68 16.95S2 13.81 2 12H5V4L22 2V3M6 4.88V6H7V4.78L6 4.88M6 7V12H7V7H6M9 12V7H8V12H9M9 6V4.55L8 4.64V6H9Z" /></svg>';
const logoGitHubSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>';
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');

const $content = document.querySelector('#content');

$content.appendChild(header);
$content.appendChild(main);
$content.appendChild(footer);

//CREATE ALL THE HEADER ELEMENTS 
const headerContainer = document.createElement('div');
header.appendChild(headerContainer);

headerContainer.innerHTML = logoRamenSVG;

const bohemuseLogoText = document.createElement('h1');
bohemuseLogoText.textContent = "Bohemuse";
headerContainer.appendChild(bohemuseLogoText);

const homeButton = document.createElement('button');
homeButton.textContent = 'Home';
homeButton.classList.add('navegateButton');
headerContainer.appendChild(homeButton);

const menuButton = document.createElement('button');
menuButton.textContent = 'Menu';
menuButton.classList.add('navegateButton');
headerContainer.appendChild(menuButton);

const ContactButton = document.createElement('button');
ContactButton.textContent = 'Contact';
ContactButton.classList.add('navegateButton');
headerContainer.appendChild(ContactButton);

const loginButton = document.createElement('button');
loginButton.textContent = 'login';
loginButton.classList.add('action-call-button');
headerContainer.appendChild(loginButton);

//CREATE MAIN SECTION
const mainContainer = document.createElement('div');
mainContainer.id = 'content-main-container';
main.appendChild(mainContainer);

//CREATE FOOTER SECTION 
const footContainer = document.createElement('div');
footContainer.id = 'content-main-container';
footer.appendChild(footContainer);

footContainer.innerHTML = logoGitHubSVG;
const copyrightText = document.createElement('h3');
copyrightText.textContent = "Copyright © 2023 AlejandroXVII";
footContainer.appendChild(copyrightText);