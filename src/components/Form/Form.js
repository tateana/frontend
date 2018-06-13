import React, {Component} from "react";
import { Form, Text } from 'react-form';
import _isEmpty from "lodash/isEmpty"
import _map from "lodash/map" 
import CssModules from 'react-css-modules';
import styles from './Form.scss'


class StyledForm extends Component {
    render() {
        const {children, onSubmit, ...other} = this.props;
        return (
            <Form validateOnMount={false} onSubmit={onSubmit}>
                { formApi => (
                    <div>
                    <form onSubmit={formApi.submitForm}  {...other}>
                        {children}
                    </form>
                    <div>
                        {!_isEmpty(formApi.values)? (
                            <span>
                                {_map(formApi.values, (val, ind) => {return ind + ' ' + val})}
                            </span>
                        ) : "no values"}

                    </div>

                     <div>
                        {!_isEmpty(formApi.errors)? (
                            <span>
                                {_map(formApi.errors, (val, ind) => {return ind + ' ' + val})}
                            </span>
                        ) : "no errors"}

                    </div>

                    </div>
                )}
            </Form>
        )
   }
}

export default CssModules(StyledForm, styles);