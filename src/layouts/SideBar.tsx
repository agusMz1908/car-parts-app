import React, { FC, useState } from "react"
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";

import engine from "../assets/images/engine.png"
import body from "../assets/images/body.png"
import brake from "../assets/images/brake.png"
import shockAbsorber from "../assets/images/shock-absorber.png"
import exhaust from "../assets/images/exhaust.png"
import vector from "../assets/images/vector.png"
import gearbox from "../assets/images/gearbox.png"

interface MenuItemOptions {
    title: string;
    path: string;
}

interface SideBarProps {
    title: string;
    icon: JSX.Element;
    arrowClose: JSX.Element;
    arrowOpen: JSX.Element;
    options: MenuItemOptions[];
}

const SideBar: FC<SideBarProps> = ({ title, icon, arrowClose, arrowOpen, options }) => {
    const menuItems = [
        {
            title: "Motor",
            icon: { engine },
            arrowClose: <BsFillCaretRightFill />,
            arrowOpen: <BsFillCaretDownFill />,
            options: [
                {
                    title: "Listado",
                    path: "engine/list"
                },
                {
                    title: "Agregar",
                    path: "engine/add"
                }
            ]
        },
        {
            title: "Carroceria",
            icon: { body },
            arrowClose: <BsFillCaretRightFill />,
            arrowOpen: <BsFillCaretDownFill />,
            options: [
                {
                    title: "Listado",
                    path: "body/list"
                },
                {
                    title: "Agregar",
                    path: "body/add"
                }
            ]
        },
        {
            title: "Amortiguadores",
            icon: { shockAbsorber },
            arrowClose: <BsFillCaretRightFill />,
            arrowOpen: <BsFillCaretDownFill />,
            options: [
                {
                    title: "Listado",
                    path: "shockabsorber/list"
                },
                {
                    title: "Agregar",
                    path: "shockabsorber/add"
                }
            ]
        },
        {
            title: "Transmision",
            icon: { gearbox },
            arrowClose: <BsFillCaretRightFill />,
            arrowOpen: <BsFillCaretDownFill />,
            options: [
                {
                    title: "Listado",
                    path: "gearbox/list"
                },
                {
                    title: "Agregar",
                    path: "gearbox/add"
                }
            ]
        },
        {
            title: "Sistema de Frenado",
            icon: { brake },
            arrowClose: <BsFillCaretRightFill />,
            arrowOpen: <BsFillCaretDownFill />,
            options: [
                {
                    title: "Listado",
                    path: "brake/list"
                },
                {
                    title: "Agregar",
                    path: "brake/add"
                }
            ]
        },
        {
            title: "Inyeccion",
            icon: { vector },
            arrowClose: <BsFillCaretRightFill />,
            arrowOpen: <BsFillCaretDownFill />,
            options: [
                {
                    title: "Listado",
                    path: "vector/list"
                },
                {
                    title: "Agregar",
                    path: "vector/add"
                }
            ]
        },
        {
            title: "Sistema de Escape",
            icon: { exhaust },
            arrowClose: <BsFillCaretRightFill />,
            arrowOpen: <BsFillCaretDownFill />,
            options: [
                {
                    title: "Listado",
                    path: "exhaust/list"
                },
                {
                    title: "Agregar",
                    path: "exhaust/add"
                }
            ]
        },

    ]
    return (
        <div className="fixed top-24 h-full w-64 bg-black shado-black shadow-2xl">
            <div>

            </div>
        </div>
    )
}

export default SideBar