import React, { FC, useState } from "react"
import { Link } from "react-router-dom";
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";

import engine from "../assets/images/engine.png"
import body from "../assets/images/body.png"
import brake from "../assets/images/brake.png"
import suspension from "../assets/images/suspension.png"
import exhaust from "../assets/images/exhaust.png"
import vector from "../assets/images/vector.png"
import gearbox from "../assets/images/gearbox.png"

interface MenuItemOptions {
    title: string;
    path: string;
}

interface SideBarProps {
    title?: string;
    icon?: string;
    arrowClose?: JSX.Element;
    arrowOpen?: JSX.Element;
    options?: MenuItemOptions[];
}

const SideBar: FC<SideBarProps> = ({ title, icon, arrowClose, arrowOpen, options }) => {
    const sideMenu = [
        {
            title: "MOTOR",
            icon: engine,
            path: "/engine"
        },
        {
            title: "CARROCERIA",
            icon: body,
            path: "/body"
        },
        {
            title: "SUSPENSION",
            icon: suspension,
            path: "/suspension"
        },
        {
            title: "TRANSMISION",
            icon: gearbox,
            path: "/engine"
        },
        {
            title: "SISTEMA DE FRENADO",
            icon: brake,
            path: "/brake"
        },
        {
            title: "INYECCION",
            icon: vector,
            path: "/inyection"
        },
        {
            title: "SISTEMA DE ESCAPE",
            icon: exhaust,
            path: "/exhaust"

        },

    ]
    return (
        <div className="fixed top-24 h-full w-64 bg-black shadow-black shadow-2xl">
            <div className="flex flex-col">
                {sideMenu.map((item) => (
                    <Link to={item.path} className="flex items-center space-x-4 py-3 hover:bg-neutral-500 text-white font-bold">
                        <img src={item.icon} className="w-10 ml-3" />
                        <span className="">
                            {item.title}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideBar