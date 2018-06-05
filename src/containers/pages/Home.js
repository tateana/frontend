import React, {Component} from "react";
import { connect } from "react-redux";
import styles from './Home.scss'
import logo from '../../media/logo-white.png'
import Button from '../../components/Button'
import {showMessage} from '../../actions'

import CssModules from 'react-css-modules';

class Home extends Component {

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  
  handleButtonClick(event) {
    this.props.showMessage("Discover our tours is clicked");
  }

  render() {
    return (
      <main styleName='main'>
        <div styleName='logo-box'>
          <img src={logo} alt="Logo" styleName='logo' />
        </div>
        <div styleName="heading-box">
          <h1 styleName="heading-animated">outdoors</h1>
          <h2 styleName="heading-sub-animated">is where life happens</h2>
          <Button variant="white" onClick={this.handleButtonClick}>Discover our tours</Button>
        </div>
      </main>
    )
  }
}

export default connect(null, {showMessage})(CssModules(Home, styles));