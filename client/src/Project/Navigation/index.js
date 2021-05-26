import React from "react";
import { NavLink } from "react-router-dom";

import {
    Navigation,
    NavAvatar,
    NavItem,
    NavIcon,
    NavContainer,
    NotImplemented,
    HrBorder,
    ProjectName,
    ProjectDeveloper,
    Logo,
} from "./Styles";

import computerLogo from "../../assets/Images/computer.svg";
import "./style.css";

const implementedMenus = [
    {
        title: "Kanban Board",
        icon: "\\ea70",
        implemented: true,
        url: "/",
    },
    {
        title: "Project settings",
        icon: "\\e994",
        implemented: true,
        url: "/settings",
    },
];

const notImplementedMenus = [
    {
        title: "Releases",
        icon: "\\e9b0",
        implemented: false,
    },
    {
        title: "Issues",
        icon: "\\e92e",
        implemented: false,
    },
    {
        title: "Pages",
        icon: "\\e926",
        implemented: false,
    },
    {
        title: "Reports",
        icon: "\\e99d",
        implemented: false,
    },
    {
        title: "Components",
        icon: "\\e940",
        implemented: false,
    },
];

const impementedMenuCreator = ({ title, icon, url, index }) => (
    <NavContainer>
        <NavItem>
            <NavLink exact={true} to={url} activeClassName="active">
                <NavIcon icon={icon} />
                {title}
            </NavLink>
        </NavItem>
    </NavContainer>
);

const notImpementedMenuCreator = ({ title, icon, url, index }) => (
    <NavContainer>
        <NotImplemented>
            <NavIcon icon={icon} />
            <span>{title}</span>
        </NotImplemented>
    </NavContainer>
);

const NavigationAvatar = (
    <NavAvatar>
        <Logo src={computerLogo} />
        <div>
            <ProjectName>Jira Clone</ProjectName>
            <ProjectDeveloper>Software Project</ProjectDeveloper>
        </div>
    </NavAvatar>
);

const navBar = () => (
    <Navigation>
        {NavigationAvatar}
        {implementedMenus.map((item, index) => impementedMenuCreator(item, index))}
        <HrBorder />
        {notImplementedMenus.map((item, index) => notImpementedMenuCreator(item, index))}
    </Navigation>
);

export default navBar;
