import React, { Component } from 'react';
import PageLoader from '../components/PageLoader';

import {Helmet} from "react-helmet";

class NewsLetters extends Component {
    componentDidMount(){
      setTimeout(() => {
          window.open("https://tinyletter.com/HarshMakadia", "_self");
      }, 750);
    };
    
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>I'm Harsh | NewsLetter</title>
                </Helmet>
                <center>Redirecting to newsletter....</center>
                <PageLoader />
            </div>
        );
    }
}

export default NewsLetters;