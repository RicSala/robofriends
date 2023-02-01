import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css'
import Scroll from "../components/Scroll";
import ErrorBoundary from "../ErrorBoundary";


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }

        // console.log("contructor")
        
    }

    componentDidMount() {

        // I am using a setTimeout just to simulate the wait until the api responds
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    return response.json();
                }).then(users => {
                    this.setState({ robots: users })
                });
        }
            , 0);
        
        // console.log("DidMount")
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        // TODO: Why do we move this to render? is render always "listening" the state?
        // const filteredRobots = this.state.robots.filter(robot => {
        //     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })
    }
    
    render() {
        // console.log("render")

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>

        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            
            )   
        }
    }
}

export default App;

// TODO ERROR BOUNDARIES https://academy.zerotomastery.io/courses/697434/lectures/12647845