import React, { Component } from 'react';
import Fields from "./fields";
import Methods from "./methods";
import Methodologies from "./methodologies"
import Operators from "./operators";
import TextField from '@material-ui/core/TextField';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'

export default class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterValues: Methods            
        }
    }

    componentDidMount = () => {
    
    }

    onFieldChange = (event) => {
        if (event.target.value === 'method') {
            this.setState({ filterValues: Methods });
        } else if (event.target.value === 'methodology') {
            this.setState({ filterValues: Methodologies });
        }
    }

    render() {
        return (
            <Form.Row>
                <Col>
                    <TextField
                        id="outlined-select-field"
                        select
                        label="Field"
                        onChange={this.onFieldChange}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                            },
                        }}
                        helperText={"Please select the field " + "(Debug: filter_id = '" + this.props.filter_id + "')"}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    >
                        {Fields.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Col>
                <Col>
                    <TextField
                        id="outlined-select-operator"
                        select
                        label="Operator"
                        SelectProps={{
                            native: true,
                            MenuProps: {
                            },
                        }}
                        helperText="Please specify the operator"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    >
                        {Operators.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Col>
                <Col>
                    <TextField
                        id="outlined-select-value"
                        select
                        label="Value"
                        SelectProps={{
                            native: true,
                            MenuProps: {
                            },
                        }}
                        helperText="Please select the value"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    >
                        {this.state.filterValues.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Col>
            </Form.Row>
        );
    }
}
