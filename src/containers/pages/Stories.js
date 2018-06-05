import React, {Component} from "react";
import CssModules from 'react-css-modules';
import styles from './Stories.scss'
import utility from '../../components/share/utilities.scss'
import {Row} from "../../components/Grid"
import Card, {CardContent, CardHeader} from "../../components/Card";
import img1 from "../../media/nat-8.jpg";
import img2 from "../../media/nat-9.jpg";
import videoMp4 from "../../media/video.mp4";
import videoWebm from "../../media/video.webm";

class Stories extends Component {
    render() {

        const dataList = [{
            title: 'I had the best week ever with my family',
            img: img1,
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui."
        },
        {
            title: 'WOW! My life is completely different now',
            img: img2,
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero  repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui."
        }]

        return (
        <section role="Stories" styleName="main">
            <div styleName="bg-video">
                <video autoPlay muted loop>
                    <source src={videoMp4} type="video/mp4" />
                    <source src={videoWebm} type="video/webm" />
                    Your browser isn't supported
                </video>
            </div>
            <div className={utility["center-text"]} >
                <h2 styleName="heading">We make people genuinely happy</h2>
            </div>
            
            {dataList.map((data, index) => {
                const i = index + 1;
                return <Row key={i}>
                    <Card variant="wide">
                        <CardContent>
                            <figure styleName="shape">
                                <img src={data.img} alt="Story picture" />
                            </figure>
                            <CardHeader>{data.title}</CardHeader>
                            <p>{data.details}</p>
                        </CardContent>
                    </Card>
                </Row>
            })}
        </section>
        )
    }
}

export default CssModules(Stories, styles);