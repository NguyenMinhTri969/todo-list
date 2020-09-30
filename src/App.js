import React, {Component} from 'react';

import './App.css';
import TodoItem from './components/TodoItem';
import checkImg from './img/correct.svg';


class App extends Component {
  constructor(){
    super();
    this.state = {
      currentStatus: 'All',
      todoItems: [
      {title: "Go to school", isComplete: true},
      {title: "Workout", isComplete: false},
      {title: 'Make money', isComplete: false}
    ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onCompletedClick = this.onCompletedClick.bind(this);
    this.onAllClick = this.onAllClick.bind(this);
    this.onActClick = this.onActClick.bind(this);
    this.onClearClick = this.onClearClick.bind(this);
  }
  onItemClick(item){
      
      return(event)=> {
        const isComplete = item.isComplete;
        const { todoItems } = this.state;
        const index = todoItems.indexOf(item)
        this.setState({
          
          todoItems: [
            ...todoItems.slice(0, index),
            {
              ...item,
              isComplete: !isComplete,
              status: 'Completed'
            },
            ...todoItems.slice(index +1)
          ]
        })
      };
  }
  onKeyUp(event){
    //console.log(event.keyCode); //moi phim tat co 1 ma code
    console.log(event.target.value); //gia tri cua target, target o day la input
    if(event.keyCode === 13){ //Enter Code  
      let text = event.target.value;
      if(!text || text ===''){
        return
      }
      // o tren cho case input empty o duoi cho case user nhap space space space.....
      text = text.trim()  //delelte space form dau to end
      if(!text){ return;}

      this.setState({
        todoItems: [
          {title: text, isComplete: false, status: 'active' },
          ...this.state.todoItems
        ]
      })
      event.target.value = '';
    }
    
  }
  
  onCompletedClick(item){
    console.log('completed')
    this.setState({
      currentStatus: 'Completed'
      
    })
  }

  onAllClick(){

    console.log('all')
    this.setState({
      currentStatus: 'All'
      
    })
  }

  onActClick(){
    console.log('active')
    //const { todoItems } = this.state;
    
    this.setState({
      currentStatus: 'Active',
    })
  }

  onClearClick(){
    this.setState({
      todoItems: [
        ...this.state.todoItems.filter((item)=> item.isComplete === false)
      ]
    })
  }

  render() {
    const { todoItems, currentStatus } = this.state;
    
    
    const resultItem = todoItems.filter(function(item){
      switch (currentStatus) {
        case 'Active':
          return (item.isComplete === false)
        case 'Completed':
          return (item.isComplete === true)        
        default:
          return todoItems;
        
      }
    })

    
      return (
        <div>
          <div className='Header'>
                <img src={checkImg} width={32} alt='checkall'/>
                <input type='text' placeholder='Add what you need to do and press enter' onKeyUp={this.onKeyUp}/>
                
          </div>

          <div className="App">
              
              {
                 resultItem.map((item, index) =>                 
                 <TodoItem 
                  key={index} 
                  item={item} 
                  onClick={this.onItemClick(item)}/>
                 )
              }
          </div>
          
          <div className='Footer'>
            <p id='Pp'>{todoItems.length} items left </p>
              <div className='Btn'> 
                <button onClick={this.onAllClick} id='btnAll'>All</button>
                <button onClick={this.onActClick} id='btnAll'>Active</button>
                <button onClick={this.onCompletedClick} id='btnAll'>Completed</button>
              </div>
            <button onClick={this.onClearClick} id='btnClear'>Clear Completed</button>
          </div>
       
        </div>
      );
     
  };
}

export default App;
