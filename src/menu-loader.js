import ramen1SRC from './ramen1.jpg';
import ramen2SRC from './ramen2.jpg';
import ramen3SRC from './ramen3.jpg';
import ramen4SRC from './ramen4.jpg';
import ramen5SRC from './ramen5.jpg';

const menuLoader= () =>{
    let myRamens = [];

    class menuItem {
        constructor(picture, tittle, description, price) {
            this.picture = picture;
            this.tittle = tittle;
            this.description = description;
            this.price = price;
        }
    }

    function addNewRamen (picture,tittle,description,price){
        let oneRamen = new menuItem(picture, tittle, description, price); 
        myRamens.push(oneRamen);
    }
    const description = 'Lorem ipsum dolor sit amet.';
    addNewRamen(ramen1SRC,"HAKATA RAMEN",description,'$20');
    addNewRamen(ramen2SRC,"KIOTO RAMEN",description,'$15');
    addNewRamen(ramen3SRC,"MURORAN RAMEN",description,'$17');
    addNewRamen(ramen4SRC,"SAPPORO RAMEN",description,'$22');
    addNewRamen(ramen5SRC,"SHIO RAMEN",description,'$12');

    function showRamensOnScreen(ramens){
        const ramenCase = document.querySelector('#content-main-container');
        let ramenIndex = 0
        const menuContainer = document.createElement('div');
        menuContainer.className = "menu-container";
        ramenCase.appendChild(menuContainer);
        ramens.forEach(element => {
            const newRamenBox = document.createElement('div');
            newRamenBox.className = "menu-item-box";
            newRamenBox.id = "Ramen"+ramenIndex;
            menuContainer.appendChild(newRamenBox);

            const ramenJPG = new Image();
            ramenJPG.src = element.picture;
            newRamenBox.appendChild(ramenJPG);

            const tittle = document.createElement('h4');
            tittle.textContent = element.tittle;
            newRamenBox.appendChild(tittle);

            const description = document.createElement('p');
            description.textContent = element.description;
            description.className = "menu-description";
            newRamenBox.appendChild(description);

            const price = document.createElement('p');
            price.textContent = element.price;
            price.className = "menu-price";
            newRamenBox.appendChild(price);

            ramenIndex++;
        });
        
    }
    showRamensOnScreen(myRamens);
}
export { menuLoader };