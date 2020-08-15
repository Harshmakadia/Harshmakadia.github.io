import React, { Component } from 'react';
import CtaSection from "./../components/About/CtaSection";
import {Helmet} from "react-helmet";
import ThemeContext from '../context';
import NewsSection from '../components/Newsletter/newsWrap';

class NewsLetters extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {context => (
                    <>
                        <div>
                            <Helmet>
                                <meta charSet="utf-8" />
                                <title>I'm Harsh | NewsLetter</title>
                            </Helmet>
                            <CtaSection
                                bg={context.theme === "dark" ? "dark" : "white"}
                                textColor={context.theme === "dark" ? "light" : "dark"}
                                size="md"
                                bgImage=""
                                bgImageOpacity={1}
                                title="Join the newsletter"
                                subtitle="Subscribe to my weekly emails on Low-code/No code, ReactJS, Javascript, UX/UI, tools that makes your life easier"
                                buttonText="Subscribe Now"
                                buttonColor="primary"
                                buttonOnClick={() => {
                                window.open("https://tinyletter.com/HarshMakadia", "_blank");
                                }}
                            ></CtaSection>
                            <NewsSection
                                bg={context.theme === "dark" ? "dark" : "white"}
                                textColor={context.theme === "dark" ? "light" : "dark"}
                                size="md"
                                bgImage=""
                                bgImageOpacity={1}
                                title="NewsLetters - Tech that Matters"
                                subtitle=""
                            />
                        </div>
                        </>
                    )}
                </ThemeContext.Consumer>
        );
    }
}

export default NewsLetters;