import React, { Component } from 'react';
import PageLoader from '../components/PageLoader';

class NewsLetters extends Component {
    componentDidMount(){
      setTimeout(() => {
          window.open("https://tinyletter.com/HarshMakadia", "_self");
      }, 2000);
    };
    
    render() {
        return (
            <div>
                <center>Redirecting to newsletter....</center>
                <PageLoader />
            </div>
        );
    }
}

export default NewsLetters;