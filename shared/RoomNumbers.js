/**
 * Created by Robert on 4/3/2016.
 */
import React from 'react';
import Input from './Input';

export default class RoomNumbers extends React.Component{
    constructor(){
        super();
        this.state = {
            rooms: "Enter Time and Day",


        };
    }

    changeRoom(room) {
        this.setState({rooms:room});
    }

    render() {
        return(
            <div>

                <Input changeRoom={this.changeRoom.bind(this)}/>
                <rooms>{this.state.rooms}</rooms>
            </div>
        );

    }

}