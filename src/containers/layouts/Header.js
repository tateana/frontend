import React, {Component} from "react";
import { connect } from "react-redux";
import styles from './Header.scss'
import logo from '../../media/logo-white.png'
import Button from '../../components/Button'
import {showMessage} from '../../actions'

import CssModules from 'react-css-modules';

class Header extends Component {
  render() {
    return (
      <header styleName='header'>
        <div styleName='logo-box'>
          <img src={logo} alt="Logo" styleName='logo' />
        </div>
      </header>
    )
  }
}

export default connect(null, {showMessage})(CssModules(Header, styles));