import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BootstrapTable from 'react-bootstrap-table-next';
import Divider from '@material-ui/core/Divider';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

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
            },
            currencies: [
                {
                    value: 'USD',
                    label: '$',
                },
                {
                    value: 'EUR',
                    label: '€',
                },
                {
                    value: 'BTC',
                    label: '฿',
                },
                {
                    value: 'JPY',
                    label: '¥',
                },
            ]
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
                    <Button variant="contained" color="primary"
                        onClick={this.onSearch}
                    >
                        Search
                    </Button>
                </div>
                <div className="py-3">
                    <Divider variant="inset" />
                    <h3>Filters</h3>
                    <Form.Row>
                        <Col>
                            <TextField
                                id="outlined-select-currency-native"
                                select
                                label="Native select"
                                //className={classes.textField}
                                //value={values.currency}
                                //onChange={handleChange('currency')}
                                SelectProps={{
                                    native: true,
                                    MenuProps: {
                                        //className: classes.menu,
                                    },
                                }}
                                helperText="Please select your currency"
                                margin="normal"
                                variant="outlined"
                            >
                                {this.state.currencies.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </Col>
                        <Col>
                        <TextField
                                id="outlined-select-currency-native"
                                select
                                label="Native select"
                                //className={classes.textField}
                                //value={values.currency}
                                //onChange={handleChange('currency')}
                                SelectProps={{
                                    native: true,
                                    MenuProps: {
                                        //className: classes.menu,
                                    },
                                }}
                                helperText="Please select your currency"
                                margin="normal"
                                variant="outlined"
                            >
                                {this.state.currencies.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </Col>
                        <Col>
                        <TextField
                                id="outlined-select-currency-native"
                                select
                                label="Native select"
                                //className={classes.textField}
                                //value={values.currency}
                                //onChange={handleChange('currency')}
                                SelectProps={{
                                    native: true,
                                    MenuProps: {
                                        //className: classes.menu,
                                    },
                                }}
                                helperText="Please select your currency"
                                margin="normal"
                                variant="outlined"
                            >
                                {this.state.currencies.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </Col>
                    </Form.Row>
                </div>
                <div className="py-3">
                    <BootstrapTable keyField='_id'
                        data={this.state.searchResult}
                        columns={this.state.columns} />
                </div>
            </form>
        );
    }
}
