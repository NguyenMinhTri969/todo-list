import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import tickImg from '../img/tick.svg';
import tickedImg from '../img/ticked.svg';

class TodoItem extends Component{
    
    render() {
        const { item, onClick } = this.props;
        let url = tickImg;
        if (item.isComplete) {
            url = tickedImg;
        }
        
        return (
            <div  className={classNames('TodoItem', {
                'TodoItem-done': item.isComplete
            })}>
                <img onClick={onClick} src={url} width={32} /* height={32} */ alt='ticket'/>
                <p>{item.title}</p>
            </div>

        )
    }
}

export default TodoItem;