import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import BlogsPage from "./blogs";
import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import AboutPage from './about';
import NewsLetters from './newsletters';
import SubLetters from './subscribe';
import Footer from "./../components/Footer";
import Book from "./../components/Book/Book";
import "./../util/analytics.js";
import { ProvideAuth } from "./../util/auth.js";
import GlobalState from '../provider';
import ThemeContext from '../context';

import HarshWhite from '../images/harshWhite.png';
import HarshBlack from '../images/harshBlack.png';

function App(props) {
  return (
    <GlobalState>
      <ProvideAuth>
        <Router>
          <>
            <ThemeContext.Consumer>
            {context => (
                <>
                  <NavbarCustom
                    toggleTheme={context.toggleTheme.bind(this)}
                    bg={context.theme}
                    variant={context.theme}
                    expand="lg"
                    logo={context.theme === "dark" ? HarshWhite : HarshBlack}
                  ></NavbarCustom>
                  <Switch>
                    <Route exact path="/" component={IndexPage} />
                    <Route exact path="/blogs" component={BlogsPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/newsletter" component={NewsLetters} />
                    <Route exact path="/subscribe" component={SubLetters} />
                    <Route exact path="/book-a-slot" component={Book} />
                    <Route component={NotFoundPage} />
                  </Switch>
                <Footer
                  bg={context.theme === "dark" ? "dark" : "white"}
                  textColor={context.theme === "dark" ? "light" : "dark"}
                  size="md"
                  bgImage=""
                  bgImageOpacity={1}
                  description="Harsh Makadia"
                  copyright="© 2021 Harsh Makadia"
                  logo={context.theme === "dark" ? HarshWhite : HarshBlack}
                ></Footer>
                </>
            )}
            </ThemeContext.Consumer>
          </>
        </Router>
      </ProvideAuth>
    </GlobalState >
  );
}

export default App;
