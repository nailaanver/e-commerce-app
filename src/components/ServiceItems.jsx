import React,{ useState} from "react";
import { SidebarData, sidebarItems } from "../data/SidebarData";
import Sidebar from "./Sidebar";


const ServiceItems = () => {
  const [activePage, setActivePage] = useState("DESIGN PLANING")

  const currentPage = sidebarItems.find((item) => item.id === activePage)
  return(
    <div className="layout">
      <Sidebar items={sidebarItems} onSelect = {setActivePage}/>
      <div className="content">
        {
          sidebarItems.map((item) => <Sidebar title = {item.title}/>)
        }
      </div>
    </div>
  )

}


export default ServiceItems