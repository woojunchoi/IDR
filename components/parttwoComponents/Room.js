import React, { Component } from 'react';
import styles from './Room.css';

class Room extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let inputArr = []
        // check if props.number isn't 0 to put checkboxes on the rooms other than room1 (room1 doesnt have checkbox)
        if (this.props.number !== 0) {
            inputArr.push(<input className='room-checkbox'
            key={this.props.number} type='checkbox' value={this.props.number}
            onChange={(e) => this.props.checkBox(e.target.value)}
            checked={this.props.selected} />)
        }
        return (
            <div className='room-element'>
                <div className={this.props.selected ? 'room-number' : 'room-number disabled'}>
                    {inputArr}
                    {/* add one since array index starts from 0 */}
                    Room {this.props.number + 1}
                </div>
                {/* conditional styling */}
                <div className={this.props.selected ? 'room-main' : 'room-main disabled'}>
                    <div className='room-selection'>
                        <p>Adults</p>
                        <p>(18+)</p>
                        <div className='room-peoplenum-wrapper'>
                            {/* dropdown menu for adult number */}
                            {/* disabled is activated or deactivated based on props from parents */}
                            <select className='room-peoplenum'
                                onChange={(e) => this.props.changeAdult(this.props.number, e)}
                                disabled={!this.props.selected} value={this.props.adults}
                                >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                            </select>
                        </div>
                    </div>
                    <div className='room-selection'>
                        <p>Children</p>
                        <p>(0-17)</p>
                        <div className='room-peoplenum-wrapper'>
                            {/* dropdown menu for children number*/}
                            {/* disabled is activated / deactivated based on props from parents */}
                            <select className='room-peoplenum'
                            onChange={(e) => this.props.changeChildren(this.props.number, e)}
                            disabled={!this.props.selected} value={this.props.children}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Room;