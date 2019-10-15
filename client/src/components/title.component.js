import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Conditions from "./conditions";

export default class Title extends Component {

    constructor(props) {
        super(props);
        this.state = {
            queryText: "",
            condition: "Contains"
        }        
    }

    componentDidMount = () => {
        let queryTextData = localStorage.getItem("serler_queryText");
        if (queryTextData != null) {
            let queryText = JSON.parse(queryTextData);
            this.setState({ queryText: queryText });
        }

        let conditionData = localStorage.getItem("serler_condition");
        if (conditionData != null) {
            let condition = JSON.parse(conditionData);
            this.setState({ condition: condition });
        }
    }

    onSearch = (event) => {
       // TODO!!!
    }

    updateQueryTextValue = (event) => {
        this.setState({ queryText: event.target.value });
        localStorage.setItem("serler_queryText", JSON.stringify(event.target.value));
    }    

    onConditionChange = (event) => {
        this.setState({ condition: event.target.value });
        localStorage.setItem("serler_condition", JSON.stringify(event.target.value));
    }

    render() {
        return (
            <div>
                <Form.Row>
                    <Col>
                        <TextField
                            id="title-field"
                            label="Title"
                            value={this.state.queryText}
                            onChange={this.updateQueryTextValue}
                            onSubmit={this.onSearch}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                    </Col>
                    <Col xs lg="3">
                        <TextField
                            id="outlined-select-condition"
                            select
                            label="Condition"
                            SelectProps={{
                                native: true,
                                MenuProps: {
                                },
                            }}
                            helperText="Please specify the condition"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            value={ this.state.condition }
                            onChange={ this.onConditionChange }                    
                        >
                            {Conditions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Col>
                </Form.Row>
                <Button variant="contained" color="primary"
                    onClick={ this.onSearch }
                >
                    Search
                </Button>
            </div>
        );
    }
}
