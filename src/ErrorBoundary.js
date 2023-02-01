import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }

    }


    // new lifecycle method to catch errors
    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Oooops! There was an error!</h1>
                    <p className="f4 white">Please, report the error at report@robofriends.com</p>
                </div>
            )
        }

        return this.props.children;

    }

}    

export default ErrorBoundary;