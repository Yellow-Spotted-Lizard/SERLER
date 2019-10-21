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
        var tileMode = "contains";

        let queryTextData = localStorage.getItem("serler_queryText");
        if (queryTextData != null) {
            title = JSON.parse(queryTextData);
        }

        let conditionData = localStorage.getItem("serler_condition");
        if (conditionData != null) {
            tileMode = JSON.parse(conditionData);
        }

        // DEBUG!!!
        console.log('title = ' + title);
        console.log('tileMode = ' + tileMode);

        // -- Calendar
        var beginYear = "";
        var endYear = "";
        var yearMode = "all";

        let fromValueData = localStorage.getItem("serler_from_year");
        if (fromValueData != null) {
            beginYear = JSON.parse(fromValueData);
        }

        let toValueData = localStorage.getItem("serler_to_year");
        if (toValueData != null) {
            endYear = JSON.parse(toValueData);
        }

        let rangeModeData = localStorage.getItem("serler_range_mode");
        if (rangeModeData != null) {
            yearMode = JSON.parse(rangeModeData);
        }

        // DEBUG!!!
        console.log('beginYear = ' + beginYear);
        console.log('endYear = ' + endYear);
        console.log('yearMode = ' + yearMode);

        // -- Filters
        var filterCount = 0;
        let filterCountData = localStorage.getItem("serler_filter_count");        
        if (filterCountData != null) {
            filterCount = JSON.parse(filterCountData);
        }

        var filters = [];
        for (var i = 0; i < filterCount; i++) {
            var field= "method";
            var operator = "contains";
            var value = "tdd";

            let filedData = localStorage.getItem("serler_filter_id_" + i + "_field");
            if (filedData != null) {
                field = JSON.parse(filedData);

            }

            let operatorData = localStorage.getItem("serler_filter_id_" + i +  "_operator");
            if (operatorData != null) {
                operator = JSON.parse(operatorData);
            }

            let valueData = localStorage.getItem("serler_filter_id_" + i + "_value");
            if (valueData != null) {
                value = JSON.parse(valueData);
            }

            var filter = {
                fieled: field,
                operator: operator,
                value: value,
            }
            filters.push(filter);
        }

        // DEBUG!!!
        console.log('filterCount = ' + filterCount);
        for (i = 0; i < filterCount; i++)
        {
            console.log('ffilters[' + i + '].fieled = ' + filters[i].fieled);
            console.log('ffilters[' + i + '].operator = ' + filters[i].operator);
            console.log('ffilters[' + i + '].value = ' + filters[i].value);
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
