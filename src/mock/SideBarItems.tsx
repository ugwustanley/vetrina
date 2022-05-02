import Home from '../assets/home.svg'
import Marketing from '../assets/marketing.svg'

type TsideBarItems = {
    icon?: string,
    title: string,
    path: string,
    children?: TsideBarItems[]
}


const sideBarItems: TsideBarItems[] = [

    {
        icon: Home,
        title: 'Home',
        path: "/"
    },
    {
        icon: Home,
        title: 'Catalogues',
        path: "/catalogues",
    },
    {
        icon: Home,
        title: 'Orders',
        path: "/orders"
    },
    {
        icon: Marketing,
        title: 'Marketing',
        path: "/",
        children: [
            {
               title: "Discount Codes",
               path:"/discount-codes"
            },
            {
                title: "Exit intent",
                path:"/exit-intent"
            },
            {
                title: "Checkout Features",
                path:"/checkout-features"
            },
             {
                title: "Post-purchase Conversation",
                path:"/post-purchase-conversation"
             },
             {
                title: "Cart Abandonment",
                path:"/cart-abandonment"
             },
             {
                title: "Timer Checkout",
                path:"/timer-checkout"
             },
             {
                title: "Sell on Social",
                path:"/sell-on-social"
             },
             {
                title: "Special Offer",
                path:"/special-offer"
             },
             {
                title: "Seasonal Offer",
                path:"/seasonal-offer"
             }
        ]
    }
]

export default sideBarItems;