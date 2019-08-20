import React, { Component } from 'react'

export default class CustomButton extends Component {
    state = {
        value: 0
    }
    componentDidMount(){
        this.setState({value: this.props.initialValue})
    }
    onClickCounter(){
        this.setState({value: this.state.value+1})
    }
    render() {
        return (
            <div>
                <button onClick={()=>{this.onClickCounter()}}>{this.state.value}</button>
            </div>
        )
    }
}
