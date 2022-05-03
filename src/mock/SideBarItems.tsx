import Home from '../assets/home-2.svg'
import Marketing from '../assets/marketing-2.svg'
import Customers from '../assets/customers.svg'
import Delivery from '../assets/delivery.svg'
import Payment from '../assets/payment.svg'
import Design from '../assets/design.svg'
import Subscription from '../assets/subscription.svg'
import Integration from '../assets/integrations.png'
import Settings from '../assets/settings.svg'
import Extension from '../assets/extension.svg'
import Logout from '../assets/logout.svg'



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
                title: "Post-purchase Conversion",
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
        title: 'Delivery Options',
        path: "#"
    },
    {
        icon: Payment,
        title: 'Payment Options',
        path: "#"
    },
    {
        icon: Design,
        title: 'Store Design',
        path: "#"
    },
    {
        icon: Subscription,
        title: 'Subscription',
        path: "#"
    },
    {
        icon: Integration,
        title: 'Integrations',
        path: "#"
    },
    {
        icon: Extension,
        title: 'Extensions',
        path: "#"
    },
    {
        icon: Settings,
        title: 'Settings',
        path: "#"
    },
    {
        icon: Logout,
        title: 'Logout',
        path: "#"
    },
]

export default sideBarItems;