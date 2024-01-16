import React from "react";

interface PanelProps{
    title?: String
    text?: String
    children?: React.ReactNode
}
export default function Panel(props: PanelProps){
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{props.title}</h1>
            <p className="text-gray-600">
                {props.text}
            </p>
            {props.children}
        </div>
    )
}