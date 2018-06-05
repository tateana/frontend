import React, {Component} from "react";
import { Form, Text } from 'react-form';

import CssModules from 'react-css-modules';
import styles from './Form.scss'


class StyledForm extends Component {
    render() {
        const {children, ...other} = this.props;
        return (
            <Form>
                { formApi => (
                    <div>
                    <form onSubmit={formApi.submitForm} {...other}>
                        {children}
                    </form>
                    
                    <div>{formApi.values[0]}</div>
                    </div>
                )}
            </Form>
        )
   }
}

export default CssModules(StyledForm, styles);