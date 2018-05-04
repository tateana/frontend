import React, {Component} from "react";
import styles from './Header.css'
import hero from '../../media/hero.jpg'
import CssModules from 'react-css-modules';

class Header extends Component {
    render() {
      return (
        <header styleName='header'>Header with css

        </header>
      )
   }
}

export default CssModules(Header, styles);