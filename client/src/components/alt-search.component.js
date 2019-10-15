import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BootstrapTable from 'react-bootstrap-table-next';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Conditions from "./conditions";
import FilterSet from "./filterSet.component";
import Calendar from "./calendar.component";

export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            queryText: "",
            evidence: [],
            columns: [{
                dataField: 'title',
                text: 'Title',
                sort: true
            }, {
                dataField: 'authors',
                text: 'Authors',
                formatter: a => a.map(ai => ai.lastName + ', ' + ai.firstName).join('; '),
                sort: true
            }, {
                dataField: 'keywords',
                text: 'Keywords',
                formatter: k => k.join(', '),
                sort: true
            },
            {
                dataField: 'date',
                text: 'Publish Date',
                formatter: a => {
                    try {
                        return new Intl.DateTimeFormat('en-NZ', {
                            year: 'numeric',
                            month: 'short'
                        }).format(new Date(a));
                    }
                    catch {
                        return 'N/A';
                    }
                },
                sort: true
            },
            {
                dataField: 'researchQuestion',
                text: 'Research Question',
                sort: true
            },
            {
                dataField: 'result',
                text: 'Result',
                sort: true
            },
            ],
            searchResult: [],
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
            this.searchByCriteria(criteria);
        }
    }

    updateQueryTextValue = (event) => {
        this.setState({ queryText: event.target.value });
        this.setState({ searchCriteria: { title: event.target.value } });
    }

    onSearch = (event) => {
        this.searchByTitle(event);
        this.saveCriteriaToLS();
    }

    onSubmit = (event) => {
        this.saveCriteriaToLS();
    }

    saveCriteriaToLS = () => {
        localStorage.setItem("serler_search_criteria", JSON.stringify(this.state.searchCriteria));
    }

    searchByTitle = (event) => {
        axios.get('/api/v1/evidences/search?title_contains=' + this.state.queryText)
            .then(response => {
                this.setState({ searchResult: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    searchByCriteria = (criteria) => {
        if (criteria != null && criteria.title != null) {
            axios.get('/api/v1/evidences/search?title_contains=' + criteria.title)
                .then(response => {
                    this.setState({ searchResult: response.data });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
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
                <Calendar />
                <FilterSet />
                <div className="py-3">
                    <BootstrapTable keyField='_id'
                        data={this.state.searchResult}
                        columns={this.state.columns} />
                </div>
            </form>
        );
    }
}
