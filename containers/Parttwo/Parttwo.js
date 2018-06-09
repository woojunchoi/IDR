import React, { Component } from 'react';
import Room from '../../components/Parttwo/Room'
import styles from './Parttwo.css';
import pic from '../../test2-dynamic-form.png'

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
        let newRooms;
        //parseint argument since string number is passed to the method
        number = parseInt(number)
        //loop starts from index 1 because room1 is always selected
        for (let i = 1; i <= number; i++) {
            //copy array not to mutate original state
            newRooms = this.state.rooms.slice();
            //check if room with the passed index is selected.
            //if yes, 'selected' state of the rooms with less index than passed index (including passed index) 
            //will be changed to false
            //else, will be changed to true
            if (newRooms[number].selected) {
                newRooms[i].selected = false
            }
            else {
                newRooms[i].selected = true
            }
        }
        this.setState({
            rooms: newRooms
        })
    }
    // method for updating 'adults' state of each room
    changeAdult = (index, e) => {
        let newRoom = this.state.rooms.slice();
        newRoom[index].adults = parseInt(e.target.value);
        this.setState({
            rooms: newRoom
        })
    }
    // method for updating 'children' state of each room
    changeChildren = (index, e) => {
        let newRoom = this.state.rooms.slice();
        newRoom[index].children = parseInt(e.target.value);
        this.setState({
            rooms: newRoom
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