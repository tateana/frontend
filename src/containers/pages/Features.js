import React, {Component} from "react";
import CssModules from 'react-css-modules';
import styles from './Features.scss';
import {Row, Column} from "../../components/Grid"
import Card, {CardHeader, CardContent} from  "../../components/Card"
import Icon from  "../../components/Icon"

class Features extends Component {
    render() {
      return (
        <section role="features" styleName="main">
            <Row>
                <Column col="1" of="4">
                    <Card variant="move-toward">
                    <CardContent>
                        <Icon icon="basic-world" size="big" variant="primary" />
                        <CardHeader>Explore the world</CardHeader>
                        <p styleName="paragraph"> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                        </p>
                    </CardContent>
                    </Card>
                </Column>

                <Column col="1" of="4">
                    <Card variant="move-toward">
                    <CardContent>
                        <Icon icon="basic-compass" size="big" variant="primary" />
                        <CardHeader>Meet nature</CardHeader>
                            <p styleName="paragraph"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                    </CardContent>
                    </Card>
                </Column>

                <Column col="1" of="4">
                    <Card variant="move-toward">
                    <CardContent>
                        <Icon icon="basic-map" size="big" variant="primary" />
                        <CardHeader>Find your way</CardHeader>
                        <p styleName="paragraph"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                        </p>
                    </CardContent>
                    </Card>
                </Column>

                <Column col="1" of="4">
                    <Card variant="move-toward">
                    <CardContent>
                        <Icon icon="basic-heart" size="big" variant="primary" />
                        <CardHeader>Live a healthier life</CardHeader>
                        <p styleName="paragraph"> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem.
                        </p>
                    </CardContent>
                    </Card>
                </Column>
            </Row>
        </section>
      )
   }
}

export default CssModules(Features, styles);