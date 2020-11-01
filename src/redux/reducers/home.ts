import { CategoryType } from "types";
import { AppState } from "../store";

interface HomeState {
    categories: Array<CategoryType>
}

const initialState: HomeState = {
    "categories": [
        {
            id: 1,
            title: `Womens`,
            imageUrl: 'https://i.ibb.co/CtJyxg9/308051s06-3.jpg',
            routeUrl: '/shop/womens'
        },
        {
            id: 2,
            title: `Mens`,
            imageUrl: 'https://i.ibb.co/wJJy6Tb/milan.jpg',
            routeUrl: '/shop/mens'
        },
        {
            id: 3,
            title: 'Bags',
            imageUrl: 'https://i.ibb.co/Pcsvryy/bg-sp19-04112019-footer-3-in-1.jpg',
            routeUrl: '/shop/bags'
        },
        {
            id: 4,
            title: 'Jackets',
            imageUrl: 'https://i.ibb.co/pWfhTsb/GW01-RD-Model-2.jpg',
            routeUrl: '/shop/jackets'
        },
        {
            id: 5,
            title: 'Shoes',
            imageUrl: 'https://i.ibb.co/r0Ngy50/Genuine-Leather-Men-Casual-Shoes-Brand-2019-Mens-Loafers-Moccasins-Breathable-Slip-on-Black-Driving-Shoes-grande-grande-69867c9e-d067-40a8-9bd0-4098e3bc0c3d-grande.jpg',
            routeUrl: '/shop/shoes'
        },
        {
            id: 6,
            title: 'Watches',
            imageUrl: 'https://i.ibb.co/pXR7SDc/2018-Rose-Gold-Lvpai-Brand-Leather-Watch-Luxury-Classic-Wrist-Watch-Fashion-Casual-Simple-Quartz-Wristwatch.jpg',
            routeUrl: '/shop/watches'
        },
        {
            id: 7,
            title: 'Caps',
            imageUrl: 'https://i.ibb.co/Kxbczpv/00a4e71ea0df2daac3c4a1148ff20535-california-girl-style-california-outfits.jpg',
            routeUrl: '/shop/caps'
        },
        {
            id: 8,
            title: 'Mobiles',
            imageUrl: 'https://i.ibb.co/vXf2npx/Samsung-Phones-Mobile.jpg',
            routeUrl: '/shop/mobiles'
        }
    ]
}

export default function home(state: HomeState = initialState, actions = { type: "" }): HomeState {
    switch (actions.type) {
        default:
            return state;
    }
}

export const selectCategories = ({ home }: AppState): Array<CategoryType> => {
    return home.categories
}