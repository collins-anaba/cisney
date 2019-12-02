import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Genre extends Component {
    constructor(props){
        super(props);
        this.state = {
            featured: [],
            trending: [],
            list: [],
            MostRequested: [],
            loggedIn: true,
            user: [],
            isHidden: true,
            hiddenGenre: ''
        }
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}

export default Genre;