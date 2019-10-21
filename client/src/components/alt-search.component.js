import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import FilterSet from "./filterSet.component";
import Calendar from "./calendar.component";
import Title from "./title.component";

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
                dataField: 'method',
                text: 'SE method',
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
            searchResult: []
        }
    }

    onSearch = () => {
        // Get search criteria
        
        // -- Title
        var title = "";
        var tileMode = "";

        let queryTextData = localStorage.getItem("serler_queryText");
        if (queryTextData != null) {
            title = JSON.parse(queryTextData);
        }
        console.log('title = ' + title);

        let conditionData = localStorage.getItem("serler_condition");
        if (conditionData != null) {
            tileMode = JSON.parse(conditionData);
        }
        console.log('tileMode = ' + tileMode);

        // -- Calendar
        //var beginYear = "";
        //var endYear = "";
        //var yearMode = "";

        // -- Filters
        var filters = [];
        var filterCount = 0;
        for (var i = 0; i < filterCount; i++) {
            var filter = {
                fieled: "",
                operator: "",
                value: "",
            }
            filters.push(filter);
        }

        // Prepare query

        // Run query
        axios.get('/api/v1/evidences')
            .then(response => {
                this.setState({ searchResult: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Title callback={this.onSearch} />
                <Calendar />
                <FilterSet />
                <div className="py-3">
                    <BootstrapTable keyField='_id'
                        data={this.state.searchResult}
                        columns={this.state.columns} />
                </div>
            </div>
        );
    }
}
