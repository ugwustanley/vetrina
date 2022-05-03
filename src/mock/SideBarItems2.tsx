
import Settings from '../assets/settings.svg'
import Extension from '../assets/extension.svg'
import Logout from '../assets/logout.svg'

import View from '../assets/view.svg'
import Support from '../assets/support.svg'
import Share from '../assets/share.svg'



type TsideBarItems = {
    icon?: string,
    title: string,
    path: string,
    children?: TsideBarItems[]
}


const sideBarItems: TsideBarItems[] = [
    {
        icon: Support,
        title: 'Customer Support',
        path: "#"
    },
    {
        icon: Share,
        title: 'Share your shop',
        path: "#"
    },
    {
        icon: View,
        title: 'View your shop',
        path: "#"
    },
]

export default sideBarItems;