import React from "react";
import { Crumb, Divider } from "./Styled";

export const BreadCrumbs = ({ items } = []) => (
    <Crumb>
        {items.map((item, index) => (
            <span key={index} >
                {index !== 0 && <Divider></Divider>}
                {item}
            </span>
        ))}
    </Crumb>
);
