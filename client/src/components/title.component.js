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
            searchCriteria: {
                title: ""
            }
        }        
    }

    componentDidMount = () => {
        let data = localStorage.getItem("serler_search_criteria");
        if (data != null) {
            let criteria = JSON.parse(data);
            this.setState({ queryText: criteria.title });
            //this.searchByCriteria(criteria);
        }
    }

    onSearch = (event) => {
       // this.searchByTitle(event);
        this.saveCriteriaToLS();
    }

    saveCriteriaToLS = () => {
        localStorage.setItem("serler_search_criteria", JSON.stringify(this.state.searchCriteria));
    }

    updateQueryTextValue = (event) => {
        this.setState({ queryText: event.target.value });
        this.setState({ searchCriteria: { title: event.target.value } });
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
                    onClick={this.onSearch}
                >
                    Search
                </Button>
            </div>
        );
    }
}
