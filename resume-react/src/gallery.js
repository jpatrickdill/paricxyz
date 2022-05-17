import {Component, useState} from "react";

export function Image(props) {
    let [selected, setSelected] = useState(false);


    let fullDisplay = (
        <div style={{
            transition: "0.4s ease opacity",

            position: "fixed",
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
            background: "rgba(155, 108, 231, 1)",
            opacity: selected ? 1 : 0,
            zIndex: 1000,
            pointerEvents: !selected ? "none" : null
        }}>
            <img key={props.src} src={props.src} alt={props.alt} style={{
                transition: "0.2s ease all",
                objectFit: "contain",
                height: selected ? "95%" : "0",
                width: selected ? "90%" : "0",
                alignSelf: "center",

            }} onClick={(e) => {
                setSelected(false);
            }}/>

        </div>
    );

    return (
        <div style={{
            display: "inline-block",
        }}>
            <img src={props.src} alt={props.alt} height="128px"
                 onClick={(e) => {
                     setSelected(true);
                 }}/>
            {fullDisplay}
        </div>
    )
}