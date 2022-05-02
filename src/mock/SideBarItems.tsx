import Home from '../assets/home-2.svg'
import Marketing from '../assets/marketing-2.svg'
import Customers from '../assets/customers.svg'
import Delivery from '../assets/delivery.svg'


type TsideBarItems = {
    icon?: string,
    title: string,
    path: string,
    children?: TsideBarItems[]
}


const sideBarItems: TsideBarItems[] = [

  
    {
        icon: Customers,
        title: 'Customers',
        path: "#"
    },
    {
        icon: Marketing,
        title: 'Marketing',
        path: "#",
        children: [
            {
               title: "Discount Codes",
               path:"#"
            },
            {
                title: "Exit intent",
                path:"#"
            },
            {
                title: "Checkout Features",
                path:"#"
            },
             {
                title: "Post-purchase Conversation",
                path:"#"
             },
             {
                title: "Cart Abandonment",
                path:"#"
             },
             {
                title: "Timer Checkout",
                path:"#"
             },
             {
                title: "Sell on Social",
                path:"#"
             },
             {
                title: "Special Offer",
                path:"#"
             },
             {
                title: "Seasonal Offer",
                path:"#"
             }
        ]
    },
    {
        icon: Delivery,
        title: 'Delivery',
        path: "#"
    },
]

export default sideBarItems;