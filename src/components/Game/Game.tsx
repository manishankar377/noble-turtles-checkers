import React, { Component, CSSProperties } from "react";
import 'bulma/css/bulma.min.css';

import GameBoard from './GameBoard/GameBoard';


interface GameProps {
  toggleToPlay?: any;
}

interface GameProps {
}



export default class Game extends Component<GameProps,GameProps> {

    constructor(props : GameProps){
        super(props);  
        console.log(this.props);
    }

    componentDidMount() {
    }  


    

    public render(): JSX.Element {

        const ntblk: CSSProperties = {
            color: 'rgba(255, 255, 255, 0.2)'
        };
        const ntwhite: CSSProperties = {
            color: '#D9D9D9'

        };

            
  let boardStyle = {
      maxWidth: '600px',
      maxHeight: '600px'
    }

        return (
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                        <GameBoard/>
                    </article>
                </div>
  
            </div>

        );
    }
}
