import React, {Component} from "react";
import {Header, Footer} from '../layouts';



import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './Home';
import About from "./About"
import Features from "./Features"
import Tours from "./Tours"
import Stories from "./Stories"
import Book from "./Book"

class InternalPage extends Component {

    render() {
         return (
            <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/features" component={Features} />
                    <Route path="/tours" component={Tours} />
                    <Route path="/stories" component={Stories} />
                    <Route path="/book" component={Book} />
                    <Route path="/" component={Home} />
                </Switch>
                <Footer />
            </div>
            </BrowserRouter>
        )
   }
}

function mapStateToProps(state) {
    return { message: state.message };
}

export default InternalPage;