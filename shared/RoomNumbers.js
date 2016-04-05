/**
 * Created by Robert on 4/3/2016.
 */
import React from 'react';
import Input from './Input';

export default class RoomNumbers extends React.Component{
    constructor(){
        super();
        this.state = {
            rooms: <img src ="http://pineappleprograms.com/images/pplogo.png" alt="PineapplePrograms" width="30"></img>,


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