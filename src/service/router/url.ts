import {
    faHome,
    faPhoneSquare,
    faShoppingBasket
} from "@fortawesome/free-solid-svg-icons";
import {faShopify} from "@fortawesome/free-brands-svg-icons";

export const URL_HOME = '/';
export const URL_CATALOG = '/catalog';
export const URL_CONTACT = '/contact';
export const URL_BASKET = '/basket';

export const HomeIcon = faHome;
export const CatalogIcon = faShopify;
export const ContactIcon = faPhoneSquare;
export const BasketIcon = faShoppingBasket;


export const NAVI = [
    {
        url: URL_HOME,
        title: 'Главная',
        image: HomeIcon
    },
    {
        url: URL_CATALOG,
        title: 'Каталог',
        image: CatalogIcon

    },
    {
        url: URL_CONTACT,
        title: 'Контакты',
        image: ContactIcon
    },
    {
        url: URL_BASKET,
        title: 'Корзина',
        image: BasketIcon
    },
]