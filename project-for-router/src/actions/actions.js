export const getData = (setState)=>{
    fetch('http://localhost:3000/products')
    .then(response=>response.json())
    .then(products=>setState(products));
}