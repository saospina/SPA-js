import notFound from '../views/notFound.html';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = notFound;
    return divElement;
}