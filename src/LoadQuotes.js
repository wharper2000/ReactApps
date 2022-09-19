import React from 'react';
import quotes from './quotes.json'
import { FaHeart, FaTwitter } from "react-icons/fa";

const RandomNumber = ()=>{
    
}

class LoadQuotes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            quote:'',
            author:'',
            x:Math.round(1*Math.random()*quotes.length)
        };
    }
    changeQuote() {
        this.setState({
            x:Math.round(1*Math.random()*quotes.length)
        });
      }
    
    render(){
        return(
        <div>
            <h2>Quote Machine</h2>
            <div id='quote-box'>
            <p id='text'>"{quotes[this.state.x].quote}"</p>
            <p id='author'>{quotes[this.state.x].author}</p>
            <button id='new-quote' className="button color-transition" onClick={this.changeQuote.bind(this)}>Another Quote</button>
            <a id='tweet-quote' href="https://twitter.com/intent/tweet" target="_blank" className='color-transition' ><FaTwitter className='icon'/></a>
            </div>
        </div>
      );
    }
}

      export default LoadQuotes;