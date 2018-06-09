import React, { Component } from 'react';
import Room from '../../components/parttwoComponents/Room'
import styles from './Parttwo.css';

class Parttwo extends Component {
    constructor(props) {
        super(props)
        //initial state for part 2
        //first room's selected state is always true
        this.state = {
            rooms: [
                {
                    selected: true,
                    adults: 1,
                    children: 0
                },
                {
                    selected: false,
                    adults: 1,
                    children: 0
                },
                {
                    selected: false,
                    adults: 1,
                    children: 0
                },
                {
                    selected: false,
                    adults: 1,
                    children: 0
                }
            ]
        }
    }
    //method that changes 'selected' state of each room
    checkBox = (number) => {
        let newRooms = this.state.rooms.slice()
        number = parseInt(number)
        //If a user unchecks a room,
        // that room plus any room after that room should return to its unselected state (requirement 5)
        if(newRooms[number].selected) {
            for(let i=number; i<newRooms.length; i++) {
                newRooms[i].selected = false
                newRooms[i].adults = 1
                newRooms[i].children = 0
            }
        }
        else if(!newRooms[number].selected){
            for(let i=1; i<=number; i++) {
                newRooms[i].selected = true
            }
        }
        this.setState({
            rooms: newRooms
        })
    }
    // method for updating 'adults' state of each room
    changeAdult = (index, e) => {
        let newRooms = this.state.rooms.slice();
        newRooms[index].adults = parseInt(e.target.value);
        this.setState({
            rooms: newRooms
        })
    }
    // method for updating 'children' state of each room
    changeChildren = (index, e) => {
        let newRooms= this.state.rooms.slice();
        newRooms[index].children = parseInt(e.target.value);
        this.setState({
            rooms: newRooms
        })
    }

    render() {
        // return Room component as many as state.rooms' length
        let roomArr = []
        for (let i = 0; i < this.state.rooms.length; i++) {
            roomArr.push(
                <Room
                    key={i} number={i} selected={this.state.rooms[i].selected}
                    checkBox={this.checkBox}
                    changeAdult={this.changeAdult}
                    changeChildren={this.changeChildren}
                    adults = {this.state.rooms[i].adults}
                    children = {this.state.rooms[i].children}
                />)
        }
        return (
            <div className='room-container'>
                <title>Hilton Dynamic Form</title>
                {roomArr}
                {/* this button does nothing but can be used for a feature */}
                <button className='submit-button'>Submit</button>
            </div>
        );
    }
}

export default Parttwo;