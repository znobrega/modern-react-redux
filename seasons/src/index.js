import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // js function
    // constructor(props) {
    //     super(props);

    //     // Another way is:
    //     // this.state. lat = null, but its not a good way
    //     this.state = { lat: null, errorMessage: '' };       
    // }

    // Babels does the equivalent of constructor
    state = { lat: null, errorMessage: '' };
        
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        ) 
    }

    componentDidUpdate () {
        console.log("component updated");
    }

    renderContent() {
        if(!this.state.lat && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }
    
        if(this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />
        }
    
        return <Spinner message="Please accept location request" />
    }

    // Always define render
    render() {
        return(
            <div className="border red"> 
                {this.renderContent()}
            </div>
        )
    }

}

ReactDOM.render(<App />, document.querySelector("#root")) 


// Exercices
// 1: 
class UserForm extends React.component {
    render() {
        return (
            <form>
                <label>Enter a username:</label>
            </form>
        )
    }
} 


// 2:
class Clock extends React.component {
    constructor(props) {
        super(props);

        this.state = { time: '' }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString })
        }, 1000)
    }

    render() {
        return (
            <div className="time">
                The time is: { this.state.time }
             </div>
        )
    }
}