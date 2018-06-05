import React, {Component} from "react";
import CssModules from 'react-css-modules';
import styles from './About.scss'
import utility from '../../components/share/utilities.scss'
import typography from '../../components/share/typography.scss'
import {Row, Column} from "../../components/Grid"
import Button from "../../components/Button"
import Composition from "../../components/Composition"
import img1 from "../../media/nat-1-large.jpg";
import img2 from "../../media/nat-2-large.jpg";
import img3 from "../../media/nat-3-large.jpg";

class About extends Component {
    render() {
        
        const images = [
            {src: img1, alt: "Photo 1"},
            {src: img2, alt: "Photo 2"},
            {src: img3, alt: "Photo 3"},
        ];
        return (
        <section role="about" styleName="main">
            <div className={utility["center-text"]} >
                <h2 styleName="heading">Exciting tours for adventurous people</h2>
            </div>
            <Row>
                <Column col="1" of="2">
                <h3 styleName="heading-paragraph" >You are going to fall in love with nature</h3>
                <p className={typography.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                </p>

                <h3 styleName="heading-paragraph" >Live adventures like you never have before</h3>
                <p className={typography.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                </p>

                <Button variant="primary">Learn more &rarr;</Button>
                </Column>
                <Column col="1" of="2">
                    <Composition images={images} />
                </Column>
            </Row>
        </section>
        )
    }
}

export default CssModules(About, styles);