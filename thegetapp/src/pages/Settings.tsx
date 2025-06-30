import Header from "../components/Header";
import Footer from "../components/Footer";
import SettingsSidebar from "../components/SettingsSideBar";
import { Outlet } from "react-router-dom";

export default function Settings(){
    return (<>
    <Header/>
    <div className="mx-[160px]">
        <div className="flex mt-[40px]">
            <SettingsSidebar />
            <div className="flex-1 ml-[150px]">
                <Outlet />
            </div>
        </div>
    </div>
     
    <Footer/>
    </>)
}