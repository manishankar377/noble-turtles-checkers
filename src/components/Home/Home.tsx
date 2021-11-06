import React from "react";
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';
import Rules from "../Rules/Rules";
import ToPlay from "../ToPlay/ToPlay";

interface HomeProps {}

interface HomeState {
    
}

export default class Home extends React.Component {
        
    state = {
        displayRules : false,
        displayToplay: false
    };

    public toggleRules = () => {
        this.setState({ displayRules: !this.state.displayRules });
    }

    public toggleToPlay = () => {
        this.setState({ displayToplay: !this.state.displayToplay });
    }

    public navigateToGame = () => {
        alert('navigate to Game');
    }

    render() {
        return (
            <div className="box">
            <div className="block">
                <p className="title is-1 is-spaced ">Hey There Welcome to <strong>American Checkers!!</strong>.</p>
            </div>

            <div className="buttons">
                <Button className="button is-primary is-medium is-fullwidth" onClick={this.toggleToPlay}  id="homepage-start-button">To Start Playing..</Button>
                <Button className="button is-primary is-info is-fullwidth" onClick={this.toggleRules} id="homepage-start-button">Rules</Button>
            </div>
            {this.state.displayToplay}

            {this.state.displayRules ? ((<Rules toggleRules={this.toggleRules}></Rules>)) : ''}
            {this.state.displayToplay ? ((<ToPlay navigateToGame={this.navigateToGame} toggleToPlay={this.toggleToPlay}></ToPlay>)) : ''}
            </div>
        )
    }

    
}
