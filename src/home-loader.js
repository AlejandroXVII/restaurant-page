import ramenSRC from './ramen.png';

const homeLoader= () =>{
    const $content = document.querySelector('#content-main-container');

    const contentContainer = document.createElement('div');
    const welcomeTittle = document.createElement('h2');
    const welcomeSubTittle = document.createElement('h3');
    const welcomeTex= document.createElement('p');
    const orderNowButton = document.createElement('button');
    const ramenPNG = new Image();

    welcomeTittle.textContent = "Welcome to Bohemuse!";
    welcomeSubTittle.textContent = "your 24 hours ramen shop";
    welcomeTex.textContent = "We invite you to place an order and experience the delicious flavors of our authentic ramen dishes.";
    orderNowButton.textContent = "Order Now";
    ramenPNG.src = ramenSRC;

    contentContainer.classList.add('home-container');
    orderNowButton.classList.add('action-call-button');

    $content.appendChild(contentContainer);
    contentContainer.appendChild(welcomeTittle);
    contentContainer.appendChild(welcomeSubTittle);
    contentContainer.appendChild(ramenPNG);
    contentContainer.appendChild(welcomeTex);
    contentContainer.appendChild(orderNowButton);
}

export { homeLoader };




