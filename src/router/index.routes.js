import { pages } from '../controllers/index';

let homeContent = document.getElementById('root');


export const router = (route) => {
    console.log(route + 'this is the location');
    homeContent.innerHTML = '';
    switch (route) {
        case '#/': {
            return homeContent.appendChild(pages.home())
        }

        case '#/products':
            return homeContent.appendChild(pages.posts())
        case '#/posts':
            return homeContent.appendChild(pages.posts())
        default:
            console.log('error 404');
            break;
    }


}