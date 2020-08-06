import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import BlogsPage from "./blogs";
import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { ProvideAuth } from "./../util/auth.js";
import GlobalState from '../provider';
import ThemeContext from '../context';

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
                    logo="https://user-images.githubusercontent.com/13532530/86536376-9c395980-bf04-11ea-89e3-24be8dcb5b20.png"
                  ></NavbarCustom>
                  <Switch>
                    <Route exact path="/" component={IndexPage} />
                    <Route exact path="/blogs" component={BlogsPage} />
                    <Route component={NotFoundPage} />
                  </Switch>
                <Footer
                  bg={context.theme === "dark" ? "dark" : "white"}
                  textColor={context.theme === "dark" ? "light" : "dark"}
                  size="md"
                  bgImage=""
                  bgImageOpacity={1}
                  description="Harsh Makadia"
                  copyright="© 2020 Harsh Makdia"
                  logo="https://user-images.githubusercontent.com/13532530/86536376-9c395980-bf04-11ea-89e3-24be8dcb5b20.png"
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
