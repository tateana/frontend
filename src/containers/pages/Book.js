import React, {Component} from "react";
import CssModules from 'react-css-modules';
import styles from './Book.scss'
import utility from '../../components/share/utilities.scss'
import {Row} from "../../components/Grid"
import Card, {CardContent} from "../../components/Card";
import Form, {TextField} from "../../components/Form";
import {email} from "../../components/Form/Validators";

class Book extends Component {
    render() {
        return (
        <section role="Book" styleName="main">
            <Row>
                <Card className={styles.card}>
                    <CardContent>
                        <h2 styleName="heading">Start Booking now</h2>
                        <Form styleName="form_box">
                            <TextField name="first_name" label="First Name" validate= {email} />
                            <div styleName="form_group">
                                <input type="text" name="first_name" id="first_name" placeholder="First Name" required styleName="form_input" />
                                <label htmlFor="first_name" styleName="form_label">First Name</label>
                            </div>

                            <div styleName="form_group">
                                <input type="email" name="email_address" id="email_address" placeholder="Email Address" required styleName="form_input" />
                                <label htmlFor="email_address" styleName="form_label">Email Address</label>
                            </div>

                            <div styleName="form_group">
                                <div styleName="form_radio_group">
                                    <input type="radio" name="tour_size" id="tour_size_small"  styleName="form_radio_input" />
                                    <label htmlFor="tour_size_small" styleName="form_radio_label">
                                        <span styleName="form_radio_imitator"></span>
                                        Small tour group
                                    </label>
                                </div>

                                <div styleName="form_radio_group">
                                    <input type="radio" name="tour_size" id="tour_size_large"  styleName="form_radio_input" />
                                    <label htmlFor="tour_size_large" styleName="form_radio_label">
                                    <span styleName="form_radio_imitator"></span>
                                        Large tour group
                                    </label>
                                </div>
                            </div>
                        </Form>

                    </CardContent>
                </Card>
            </Row>
        </section>
        )
    }
}

export default CssModules(Book, styles);