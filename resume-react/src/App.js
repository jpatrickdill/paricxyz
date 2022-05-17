import "./App.scss";
import {Component, useState} from "react";
import {Image} from "./gallery.js";

import {BrowserView} from "react-device-detect";

import rdsinv1 from "./img/rdsinv1.png";
import rdsinv2 from "./img/rdsinv2.png";
import rbx1 from "./img/rbx1.png";
import rbx2 from "./img/rbx2.png";
import nchs1 from "./img/nchs1.png";
import nchs2 from "./img/nchs2.png";
import nchs3 from "./img/nchs3.png";
import ncicon from "./img/ncband.png";

function SidebarItem(props) {
    return (
        <div className="item">
            <a href={props.to} onClick={props.cb}>{props.title}</a>
            {props.children ?
                <div className="nest">
                    {props.children}
                </div>
                : null}
        </div>
    )
}


function Card(props) {
    return (
        <div className="card" id={props.id}>
            {props.children}
        </div>
    )
}

function ItemTitle(props) {
    if (props.icon) {
        return <div id={props.id} style={{
            display: "flex",
            marginTop: "16px"
        }}>
            <img src={props.icon} alt={props.alt} height="42px" style={{
                filter: props.darkicon ? "brightness(0)" : "none"
            }}/>
            <h4 style={{marginLeft: "8px", marginBottom: 0}}>
                {props.children}
            </h4>
        </div>
    } else {
        return <h4 style={{marginBottom: 0}}>
            {props.children}
        </h4>
    }
}


function Links(pairs) {
    let els = [];

    for (let item of pairs) {
        els.push(
            <a target="_blank" href={item[1]}>{item[0]}</a>
        )
        els.push(
            <span> | </span>
        )
    }

    delete els[els.length - 1]
    return <div className="links">
        {els}
    </div>
}

function Contacts(items) {
    let els = [];
    console.log(items);

    for (let item of items) {
        if (typeof (item) === "object") {
            els.push(
                <a href={item[1]}>{item[0]}</a>
            );
        } else {
            els.push(
                <span className="c-item">{item}</span>
            );
        }

        els.push(
            <span className="dot">&middot;</span>
        );
    }

    delete els[els.length - 1];

    return <>{els}</>
}


// skills

const skill_icons = {
    react: "https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png",
    javascript: "https://iconape.com/wp-content/files/ez/353342/svg/javascript-seeklogo.com.svg",
    python: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png",
    heroku: "https://cdn-icons-png.flaticon.com/512/873/873120.png",
    html: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
    css: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
    sass: "https://cdn.iconscout.com/icon/free/png-512/sass-2752078-2284895.png",
    postgresql: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1080px-Postgresql_elephant.svg.png",
    redis: "https://cdn.iconscout.com/icon/free/png-256/redis-83994.png",
    lua: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/1200px-Lua-Logo.svg.png",
    jekyll: "https://miro.medium.com/max/600/1*ThcllHZuDgpCMUCjYLqQag.png",
    jquery: "https://cdn.i conscout.com/icon/free/png-256/jquery-10-1175155.png",
    wordpress: "https://cdn-icons-png.flaticon.com/512/174/174881.png"
}

function Skills(...items) {
    let icon_els = [];

    for (let item of items) {
        let icon_uri = skill_icons[item.toLowerCase()];

        if (icon_uri) {
            icon_els.push(
                <img src={icon_uri} alt={item} title={item} key={item}/>
            );
        }
    }

    return (
        <div className="skills">{icon_els}</div>
    )
}


// app render

function App() {
    return (
        <>
            <div className="app">
                <header id="contact">
                    <h1>Patrick Dill</h1>
                    <div className="contacts">
                        {Contacts([
                            ["jamespatrickdill@gmail.com", "mailto:jamespatrickdill@gmail.com"],
                            "(470) 262-4365",
                            ["GitHub", "https://github.com/jpatrickdill"]
                        ])}
                    </div>
                </header>

                <div className="content">
                    <BrowserView>
                        <div className="left">
                            <div className="card sidebar">
                                <SidebarItem to="#contact" title="About me"/>
                                <SidebarItem to="#portfolio" title="Portfolio">
                                    {/*<SidebarItem to="#professional" title="Professional"/>*/}
                                    {/*<SidebarItem to="#personal" title="Personal"/>*/}
                                </SidebarItem>
                            </div>
                        </div>
                    </BrowserView>

                    <div className="resume">
                        <Card id="about">
                            <h3>Hi! I'm Patrick.</h3>
                            <p>
                                I'm a software developer from Atlanta, Georgia who loves to learn and create.
                            </p>
                            <p>
                                I have 5+ years of experience coding in Python. I also
                                have experience with NodeJS, PostgreSQL, Redis, Git, and web development tools
                                including React and HTML+CSS/SCSS.
                            </p>
                            <p>
                                I also create plugins and tools for the Roblox platform that I grew up on.
                                My plugins have amassed 50,000+ installs and are used in games totaling over 4,000,000
                                monthly active users.
                            </p>
                        </Card>

                        <h2 id="portfolio">Portfolio</h2>
                        <Card id="marchathon">
                            <ItemTitle icon={ncicon} darkicon>NCHS Marchathon</ItemTitle>
                            {Links([
                                ["Website", "https://marchathon.nchsband.com/"]
                            ])}

                            {Skills("React", "Python", "HTML", "SASS", "PostgreSQL")}

                            <p>
                                I created a donations website for my local high school's marching band.
                            </p>
                            <p>
                                Marchathon features a Python FastAPI backend, which confirms payments and stores
                                donation receipts in a PostgreSQL database. The frontend was created with React.
                            </p>

                            <div className="images">
                                <Image src={nchs1}/>
                                <Image src={nchs2}/>
                                <Image src={nchs3}/>
                            </div>

                        </Card>
                        <Card id="rdsinv">
                            <ItemTitle>RDS-Inv</ItemTitle>
                            {/*{Links([*/}
                            {/*    ["Contact", "mailto:jamespatrickdill@gmail.com"],*/}
                            {/*])}*/}

                            {Skills("HTML", "CSS", "JavaScript", "SASS", "React", "Python", "PostgreSQL", "Heroku")}

                            <p>
                                While employed at RDS, I created an inventory management system (IMS)
                                that integrates into the existing RDS workflow and tracks the intake, usage, and
                                delivery all product.
                            </p>
                            <p>
                                RDS-Inv uses Python for the backend API, which stores inventory items in a PostgreSQL
                                database. The frontend is built with React, and uses Socket.IO to pair the user's
                                phone with the desktop site for inventory scanning.
                            </p>

                            <div className="images">
                                <Image src={rdsinv1}/>
                                <Image src={rdsinv2}/>
                            </div>
                        </Card>
                        <Card id="rbxlist">
                            <ItemTitle icon="https://paric.xyz/icons/rbxserverlist.png">RbxList</ItemTitle>
                            {/*{Links([*/}
                            {/*    ["Docs", "https://requests.paric.xyz/"]*/}
                            {/*])}*/}

                            {Skills("HTML", "CSS", "JavaScript", "SASS", "Python", "PostgreSQL", "Redis", "Heroku")}

                            <p>
                                RbxList is a service I created for Roblox communities on Discord. RbxList allows members
                                of your Discord to "donate" their private server to a maintained list.
                            </p>
                            <p>
                                I used Chrome devtools to discover the Roblox server list APIs used in this app.
                                RbxList's Python backend checks each server's player count every 30 seconds using
                                the Roblox API.
                            </p>
                            <p>
                                The frontend is server-side rendered using Flask, and includes a Discord bot built with
                                Discord.py.
                            </p>

                            <div className="images">
                                <Image src={rbx1}/>
                                <Image src={rbx2}/>
                            </div>

                        </Card>
                        <Card id="requests">

                            <ItemTitle icon="https://paric.xyz/icons/requests-64.png">Roblox Requests</ItemTitle>
                            {Links([
                                ["Docs", "https://requests.paric.xyz/"],
                                ["DevForum", "https://devforum.roblox.com/t/roblox-requests-simple-powerful-http-in-roblox/355294"],
                                ["GitHub", "https://github.com/jpatrickdill/roblox-requests"]
                            ])}

                            {Skills("Lua", "HTML", "CSS", "SASS", "Jekyll")}

                            <p>
                                Roblox Requests is an HTTP library I created for Roblox Lua. It's a wrapper
                                to Roblox's native HttpService.
                            </p>
                            <p>
                                I created Requests because Roblox's HttpService is difficult to use, not readable, and
                                leaves a lot of work to be done for the developer. I wanted to create a library
                                that was simple, effective, and easy to understand, so I modeled it after the Python
                                Requests library that I use often.
                            </p>
                            <p>
                                This project gave me valuable experience with the static site generator Jekyll, as
                                I created the documentation website from scratch.
                            </p>
                            <p>
                                Roblox Requests features:
                                <ul>
                                    <li>Sessions with cookie persistence base headers/URL/auth</li>
                                    <li>Query string builder</li>
                                    <li>JSON body encoding/response decoding</li>
                                    <li>Multipart file encoding and upload</li>
                                    <li>HTML/XML parser with DOM and CSS selectors</li>
                                    <li>Configurable sliding window rate limits</li>
                                </ul>
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
