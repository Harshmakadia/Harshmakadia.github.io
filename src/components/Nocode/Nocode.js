import React from "react";
import ThemeContext from '../../context';
import { Tweet } from 'react-twitter-widgets'

import CtaSection from "../About/CtaSection";
import './Nocode.css';

function Nocode(props) {
    const populateTweets = (context) => {
        const tweetIDs = ["1389222898141827073", 
        "1387399749490208778", 
        "1385965022271135749"];
        const tweetMappper = [];
        for(let i=0; i < tweetIDs.length; i++){
            tweetMappper.push(<div className="carsd" style={{width: '80%'}} key={i}>
                    <Tweet tweetId={tweetIDs[i]} options={{ theme: context.theme === "dark" ? "dark" : "light", width: '100%'}} />
                </div>)
        }
        return tweetMappper;
    }

  return (
    <ThemeContext.Consumer>
      {context => (
        <>
          <CtaSection
            bg={context.theme === "dark" ? "dark" : "white"}
            textColor={context.theme === "dark" ? "light" : "dark"}
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="Nocode Projects"
            subtitle="Speed Less 💰, Ship Faster 🚀 by using nocode tools!"
            buttonText="Know more on Twitter"
            buttonColor="primary"
            buttonOnClick={() => {
            window.open("https://twitter.com/MakadiaHarsh", "_blank");
            }}
        ></CtaSection>
        <div style={{backgroundColor: (context.theme === "dark" ? "#0E182A" : "#ffffff") }}>
            <div className="cards" style={{display: 'grid', width: '80%', margin: '0 auto'}}>
                {populateTweets(context)}
            </div>
        </div>
    </>
        )}
      </ThemeContext.Consumer>
  );
}

export default Nocode;
