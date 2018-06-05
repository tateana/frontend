import React, {Component} from "react";
import CssModules from 'react-css-modules';
import styles from './Grid.scss'
import Row from './Row'
import Column from './Column'

class Grid extends Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        console.log(styles["col-X-of-Y"]);
        const {cols, ...other} = this.props;
        return (
        <section className="grid">
            <Row>
                <Column>col</Column>
            </Row>
            
            <Row>
                <Column col="1" of="2">col-1-of-2</Column>
                <Column col="1" of="2">col-1-of-2</Column>
            </Row>
            
            <Row>
                <Column col="1" of="3">col-1-of-3</Column>
                <Column col="2" of="3">col-2-of-3</Column>
            </Row>

            <Row>
                <Column col="1" of="4">col-1-of-4</Column>
                <Column col="2" of="4">col-2-of-4</Column>
                <Column col="1" of="4">col-1-of-4</Column>
            </Row>

            <Row>
                <Column col="3" of="4">col-3-of-4</Column>
                <Column col="1" of="4">col-1-of-4</Column>
            </Row>

        </section>
        )
   }
}

Grid.defaultProps = {
    cols: 2,
};

export default CssModules(Grid, styles);