import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        // approach--3
        // this.ClickHandler = this.ClickHandler.bind(this)
    }

    // ClickHandler() {
    //     this.setState({
    //         message: 'Goood Bye'
    //     })
    // }

    ClickHandler = () => {
        this.setState({
            message: 'Goood Bye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* approach--1
                <button onClick={this.ClickHandler.bind(this)}>ClickEventBind</button> */}
                {/* approach --2
                <button onClick={() => this.ClickHandler()}>ClickEventBind</button> */}
                {/* approach --3
                <button onClick={this.ClickHandler}>ClickEventBind</button> */}
                {/* approch-4 */}
                <button onClick={this.ClickHandler}>ClickEventBind</button>
            </div>
        )
    }
}

export default EventBind
