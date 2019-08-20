import React, { Component } from 'react'
import CustomButton from './CustomButton';

export default class HomePage extends Component {
    render() {
        let n = 0;
        return (
            <div>
                <CustomButton initialValue={n}/>
            </div>
        )
    }
}
