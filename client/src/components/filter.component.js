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
            field: 'method',
            operator: 'contains',
            value: 'tdd',
            filterValues: Methods         
        }
    }
    itemName = () =>
        "serler_filter_id_" + this.props.filter_id;

    componentDidMount = () => {
        var field = 'method';
        let filedData = localStorage.getItem(this.itemName() + "_field");
        if (filedData != null) {
            field = JSON.parse(filedData);
            this.setState({ field: field });
        }

        if (field === 'method') {
            this.setState({ filterValues: Methods });
        } else if (field === 'methodology') {
            this.setState({ filterValues: Methodologies });
        }

        let operatorData = localStorage.getItem(this.itemName() + "_operator");
        if (operatorData != null) {
            let operator = JSON.parse(operatorData);
            this.setState({ operator: operator });
        }

        let valueData = localStorage.getItem(this.itemName() + "_value");
        if (valueData != null) {
            let value = JSON.parse(valueData);
            this.setState({ value: value });
        }
    }

    onFieldChange = (event) => {
        var field = event.target.value;
        this.setState({ field: field });
        localStorage.setItem(this.itemName() + "_field", JSON.stringify(field));

        if (field === 'method') {
            this.setState({ filterValues: Methods });
        } else if (field === 'methodology') {
            this.setState({ filterValues: Methodologies });
        }
    }

    onOperatorChange = (event) => {
        var operator = event.target.value;
        this.setState({ operator: operator });
        localStorage.setItem(this.itemName() + "_operator", JSON.stringify(operator));
    }

    onValueChange = (event) => {
        var value = event.target.value
        this.setState({ value: value });
        localStorage.setItem(this.itemName() + "_value", JSON.stringify(value));
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
                        value={this.state.field}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                            },
                        }}
                        helperText="Please select the field "
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
                        onChange={this.onOperatorChange}
                        value={this.state.operator}
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
                        onChange={this.onValueChange}
                        value={this.state.value}
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
                        {
                            this.state.filterValues == null ? "" : 
                                this.state.filterValues.map(option => (
                                    <option key={option.label} value={option.value}>
                                        {option.label}
                                    </option>
                                    ))                            
                        }
                    </TextField>
                </Col>
            </Form.Row>
        );
    }
}
