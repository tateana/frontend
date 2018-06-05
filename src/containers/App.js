import React, {Component} from "react";
import {Footer} from './layouts';
import { connect } from "react-redux";
import './App.scss';
import Dialog from "../components/Dialog";
import { hideMessage } from "../actions";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import InternalPage from "./pages/InternalPage"


class App extends Component {

    handleCloseMessageDialog() {
        console.log('App handleCloseMessageDialog');
        this.props.hideMessage();
    }

    render() {
        const messageDialog = (this.props.message)? <Dialog key="message" onClose={this.handleCloseMessageDialog.bind(this)}>{this.props.message}</Dialog>: null; 
        return (
            <BrowserRouter key="main">
            <div>
                {messageDialog}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/" component={InternalPage} />
                </Switch>
            </div>
            </BrowserRouter>
        )
   }
}

function mapStateToProps(state) {
    return { message: state.message };
}

export default connect(mapStateToProps, {hideMessage})(App);