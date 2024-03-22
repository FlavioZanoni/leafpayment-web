import { MouseEventHandler } from "react"
import Icon from "../Icon"


type Props = {
    title: string
    icon: string
    onClick: (event: any) => void
}


function SidebarButton({title, icon, onClick}: Props){
    return  (
        <li><button className="w-full" onClick={onClick}><a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <Icon name={icon}/>    
               <span className="ms-3">{title}</span>
            </a></button></li>
    )
}


export default SidebarButton