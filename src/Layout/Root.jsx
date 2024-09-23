import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedComponents/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="pb-12">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;