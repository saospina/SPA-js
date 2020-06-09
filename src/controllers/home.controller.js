import homeView from '../views/home.html';


export default () => {

    const divElement = document.createElement('div');
    divElement.classList = 'text-white';
    divElement.innerHTML = homeView;

    const btnClick = divElement.querySelector('#btnClick');
    btnClick.addEventListener('click', () => {
        alert('blablabla')
    })

    return divElement;

}