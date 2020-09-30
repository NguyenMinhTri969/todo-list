import React, {Component} from 'react';
import './Trafficlight.css';
import classNames from 'classnames'

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class Trafficlight extends Component {
    constructor() {
        super();
        this.state = {
            currentColor: RED
        }

        setInterval(() => {
            
            this.setState({
                currentColor: this.getNextColor(this.state.currentColor)
            });
        }, 1000)
    }

    getNextColor(color) {
        switch(color) {
            case RED:
                return ORANGE;
            case ORANGE:
                return GREEN;
            default:
                return RED;
        }
    }

    render() {
        const { currentColor } = this.state
        return <div className='Trafficlight'>
            <div className={classNames('bulb', 'red', {
                active: currentColor === RED
            })}></div>
            <div className={classNames('bulb', 'orange', {
                active: currentColor === ORANGE
            })}></div>
            <div className={classNames('bulb', 'green', {
                active: currentColor === GREEN
            })}></div>
        </div>
    } 
}

export default Trafficlight;