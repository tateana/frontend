import React, {Component} from "react";
import CssModules from 'react-css-modules';
import styles from './Tours.scss'
import utility from '../../components/share/utilities.scss'
import {Row, Column} from "../../components/Grid"
import Button from "../../components/Button"
import Card, {CardContent, CardExpandButton, CardExpandContent} from "../../components/Card";

class Tours extends Component {
    render() {

        const dataList = [{
            title: 'The Sea Explorer',
            price: 297,
            details: [
                '3 day tours',
                'Up to 30 people',
                '2 tour guides',
                'Sleep in cozy hotels',
                'Difficulty: easy'
            ]},
            {
                title: 'The Forest Hiker',
                price: 497,
                details: [
                    '7 day tours',
                    'Up to 40 people',
                    '6 tour guides',
                    'Sleep in provided tents',
                    'Difficulty: medium'
            ]},
            {
                title: 'The Snow Adventurer',
                price: 897,
                details: [
                    '5 day tours',
                    'Up to 15 people',
                    '3 tour guides',
                    'Sleep in provided tents',
                    'Difficulty: hard',
            ]},
        ]

        return (
        <section role="Tours" styleName="main">
            <div className={utility["center-text"]} >
                <h2 styleName="heading">Most popular tours</h2>
            </div>
            <Row>
                {dataList.map((data, index) => {
                    const i = index + 1;
                    return <Column col="1" of="3" key={i}>
                            <Card>
                                <div styleName={`card-picture-${i}`}>
                                    &nbsp;
                                </div>
                                <CardContent isExpanded={false}>
                                    <h4 styleName="card-picture-heading">
                                        <span styleName={`span${i}`}>{data.title}</span>
                                    </h4>
                                    <div className={utility["center-text"]} >
                                        <div styleName="card-price">Only ${data.price}</div>
                                        <Button variant="primary">Book now</Button>
                                    </div>
                                    <CardExpandButton />
                                
                                    <CardExpandContent>
                                    <ul styleName="card-details">
                                        {data.details.map((note, j) => <li key={j}>{note}</li>)}
                                    </ul>
                                    </CardExpandContent>
                                </CardContent>
                            </Card>
                        </Column>
                })}
            </Row>
            </section>
        )
    }
}

export default CssModules(Tours, styles);