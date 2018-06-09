import React, { Component } from 'react';
import Room from '../../components/Parttwo/Room'
import styles from './Parttwo.css';
import pic from '../../test2-dynamic-form.png'

class Parttwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms : [
                {
                    selected:true,
                    adults:1,
                    children:0
                },
                {
                    selected:false,
                    adults:1,
                    children:0
                },
                {
                    selected:false,
                    adults:1,
                    children:0
                },
                {
                    selected:false,
                    adults:1,
                    children:0
                }
            ]
        }
    }
    checkBox = (number) => {
        let newRooms;
        number = parseInt(number)
        for(let i=1; i<=number; i++) {
            newRooms = this.state.rooms.slice();
            if(newRooms[number].selected) {
                newRooms[i].selected = false
            }
            else {
                newRooms[i].selected = true
            }
        }
        this.setState({
            rooms:newRooms
        })
        console.log(this.state.rooms)
    }
    changeAdult = (index,e) => {
        let newRoom = this.state.rooms.slice();
        newRoom[index].adults = parseInt(e.target.value);
        this.setState({
            rooms:newRoom
        })
    }
    changeChildren = (index,e) => {
        let newRoom = this.state.rooms.slice();
        newRoom[index].children = parseInt(e.target.value);
        this.setState({
            rooms:newRoom
        })
        console.log(this.state.rooms)
    }

    render() {
        let roomArr =[]
        for(let i=0; i<this.state.rooms.length; i++) {
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
            <img src={pic} />
                <title>Hilton Dynamic Form</title>
                {roomArr}
            </div>
        );
    }
}

export default Parttwo;