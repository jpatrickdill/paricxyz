import {Component} from "react";

export class Image extends Component {
    state = {
        selected: false
    }

    constructor(props) {
        super(props);
    }

    render() {
        if (this.state.selected) {
            return (
                <div key={"div" + this.props.src} style={{
                    transition: "0.2s ease background",

                    position: "fixed",
                    display: "flex",
                    justifyContent: "center",
                    width: "100vw",
                    height: "100vh",
                    top: 0,
                    left: 0,
                    background: "rgba(155, 108, 231, 1)",
                    zIndex: 1000
                }}>
                    <img key={this.props.src} src={this.props.src} alt={this.props.alt} style={{
                        transition: "0.2s ease-in height",
                        //objectFit: "contain",
                        height: "100%",
                        alignSelf: "center",

                    }} onClick={(e) => {
                        this.setState({selected: false});
                    }}/>
                </div>
            )
        } else {
            return (
                <div key={"div" + this.props.src} style={{
                    transition: "0.2s ease background",
                    display: "inline-block",
                    background: "rgba(155, 108, 231, 0)",
                }}>
                    <img key={this.props.src} src={this.props.src} alt={this.props.alt} height="128px" style={{
                        //transition: "0.2s ease-in height"
                    }}
                         onClick={(e) => {
                             this.setState({selected: true});
                         }}/>

                </div>
            )
        }
    }

}

export class Gallery extends Component {
    render() {
        return (
            <div style={{
                display: "flex"
            }}>

            </div>
        )
    }
}