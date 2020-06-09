import { pages } from '../controllers/index';

let homeContent = document.getElementById('root');


export const router = async (route) => {
    console.log(route + 'this is the location');
    homeContent.innerHTML = '';
    switch (route) {
        case '#/': {
            return homeContent.appendChild(pages.home())
        }
        case '#/products':
            return console.log('This is products pages');   
        case '#/posts':
            return homeContent.appendChild(await pages.posts())
        default:
            return homeContent.appendChild( pages.notFound())
    }


}