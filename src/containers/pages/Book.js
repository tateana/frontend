import React, {Component} from "react";
import { connect } from "react-redux";
import CssModules from 'react-css-modules';
import styles from './Book.scss'
import {Row} from "../../components/Grid"
import Card, {CardContent} from "../../components/Card";
import Form, {TextField, RadioGroup, RadioField} from "../../components/Form";
import {email, multiple, required} from "../../components/Form/Validators";
import {Button} from "../../components/Button"
import {showMessage} from '../../actions'

class Book extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values, e, formApi) {
        console.log(values)
        this.props.showMessage("Form is submitted");
    }

    render() {
        return (
        <section role="Book" styleName="main">
            <Row>
                <Card className={styles.card}>
                    <CardContent>
                        <h2 styleName="heading">Start Booking now</h2>
                        <Form styleName="form_box" onSubmit={this.handleSubmit}>
                            <TextField field="full_name" label="Full name*" validate= {required}  />
                            <TextField field="email" label="Email address*" validate= {multiple([required, email])}  />
                            <RadioGroup field="tour_s" value="small">
                                <RadioField id="tour_size_small" label="Small tour group" value="small" />
                                <RadioField id="tour_size_large" label="Large tour group" value="large" />
                            </RadioGroup>
                            <Button variant="primary" type="submit">Next step &rarr;</Button>
                        </Form>
                    </CardContent>
                </Card>
            </Row>
        </section>
        )
    }
}

export default connect(null, {showMessage})(CssModules(Book, styles));