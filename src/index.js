import _ from 'lodash';
import './style.css';
import { principalPageLoader  } from './page-first-load';
import { homeLoader  } from './home-loader';
import { contactLoader } from './contact-loader';

let buttonSelected = [false,false,false]

principalPageLoader();

const $homeButton = document.querySelector('#home-button');
const $contactButton = document.querySelector('#contact-button');

$homeButton.addEventListener('click', function(event) { 
    if (!buttonSelected[0]) {
        if(buttonSelected[2]){
            document.querySelector('.contact-container').remove();
            $contactButton.style.boxShadow = '0px 3px 0px -1px white';
            $contactButton.style.color = 'white';
            buttonSelected[2]=false;
        }
        $homeButton.style.boxShadow = '0px 3px 0px -1px #ffc73e';
        $homeButton.style.color= '#ffc73e';
        homeLoader();
        buttonSelected[0]=true;
    }
});
$contactButton.addEventListener('click', function(event) { 
    if (!buttonSelected[2]) {
        if(buttonSelected[0]){
            document.querySelector('.home-container').remove();
            $homeButton.style.boxShadow = '0px 3px 0px -1px white';
            $homeButton.style.color = 'white';
            buttonSelected[0]=false;
        }
        $contactButton.style.boxShadow = '0px 3px 0px -1px #ffc73e';
        $contactButton.style.color= '#ffc73e';
        contactLoader();
        buttonSelected[2]=true;
    }
});


