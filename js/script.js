const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelector(el);

//Listagem de modelos
modeloJson.map((item, index) =>{
    let modeloItem = c ('.models .modelo-item').cloneNode(true);
    
    modeloItem.querySelector('.modelo-item-name').innerHTML = item.name;


    c ('.modelo-area').append(modeloItem);
});