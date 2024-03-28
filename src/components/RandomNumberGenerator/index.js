import React from 'react'
import { Component } from 'react'
import './index.css'

class RandomNumberGenerator extends Component{
    state = {number :0}

    getRandomNumber = () => Math.ceil(Math.random()*100)

    generateValue = () => {
        const randomNumber = this.getRandomNumber();

        this.setState(prevState => ({number: randomNumber}))
    }
    render(){
        const {number} = this.state
        return(
            <div className="bg-container">
                <div className="inner-container">
                    <h1 className="heading">Random Number</h1>
                    <p className="para">Generate a random number in the range of 0 to 100</p>
                    <button type="button" className="generate-button" onClick= {this.generateValue}>Generate</button>
                    <p className="number-text">{number}</p>
                </div>
            </div>
        )
    }
}
export default RandomNumberGenerator;