const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

//Listagem de modelos
modeloJson.map((item, index) =>{
    let modeloItem = c ('.models .modelo-item').cloneNode(true);
    
    modeloItem.setAttribute('data-key', index);

    modeloItem.querySelector('.modelo-item-img img').src = item.img;
    modeloItem.querySelector('.modelo-item-name').innerHTML = item.name;
    modeloItem.querySelector('.modelo-item-desc').innerHTML = item.description;
    modeloItem.querySelector('.modelo-item-price').innerHTML =`R$ ${item.price.toFixed(2)}`;

    modeloItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();

        let key = e.target.closest('.modelo-item').getAttribute('data-key');
        c('.modeloBig img').src = modeloJson[key].img;
        c('.modeloInfo h1').innerHTML = modeloJson[key].name;
        c('.modeloInfo-desc').innerHTML = modeloJson[key].description;
        c('.modeloInfo-actualPrice').innerHTML =`R$ ${modeloJson[key].price.toFixed(2)}`;
        
        cs('.modeloInfo-size').forEach((size, sizeIndex)=> {
            size.querySelector('span').innerHTML = modeloJson[key].sizes[sizeIndex];
        });

        c('.modeloWindowArea').style.opacity = 0;
        c('.modeloWindowArea').style.display = 'Flex';

        setTimeout(() => {
            c('.modeloWindowArea').style.opacity = 1;
        }, 200);
    })

    c ('.modelo-area').append(modeloItem);
});