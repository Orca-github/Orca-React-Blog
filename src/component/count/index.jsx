import React, { Component } from 'react'
import store from '../../redux/store'
export default class Count extends Component {
  increase = ()=>{
    const {value} = this.selectNumber
    store.dispatch({type:'increase',data:value*1})
  }
  decrease = ()=>{
    const {value} = this.selectNumber
    store.dispatch({type:'decrease',data:value*1})
  }
  oddIncrease = ()=>{
    const {value} = this.selectNumber
    const count = store.getState()
    if (count % 2 !== 0){
    store.dispatch({type:'increase',data:value*1})
    }
  }
  asyIncrease = ()=>{
    const {value} = this.selectNumber
    store.dispatch({type:'increment',data:value*1})
  }

  render() {
    return (
      <div>
        <h1>当前求和为:{store.getState()}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increase}>+</button>&nbsp;
        <button onClick={this.decrease}>-</button>&nbsp;
        <button onClick={this.oddIncrease}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.asyIncrease}>异步加</button>&nbsp;
      </div>
    )
  }
}
