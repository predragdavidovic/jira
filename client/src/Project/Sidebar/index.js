import React from "react";
import { SideBar, SideBarItem } from "./Styles";
import Logo from "../../shared/components/Logo.jsx";

const sideBarContent = [
    {
        icon: "\\e986",
        modalType: "search",
    },
    {
        icon: "\\ea0a",
        modalType: "create",
    },
];

const Sidebar = ({ modal, setModal }) => {
    return (
        <SideBar>
            <Logo />
            {sideBarContent.map((item, index) => (
                <SideBarItem
                    onClick={() => {
                        setModal({ visibility: true, type: item.modalType });
                    }}
                    icon={item.icon}
                    key={index}
                />
            ))}
        </SideBar>
    );
};

export default Sidebar;
