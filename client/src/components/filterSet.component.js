import React, { Component } from 'react';
import Filter from "./filter.component";
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default class FilterSet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterCount: 0,
            filterList: []
        }
    }

    componentDidMount = () => {
        var filterCount = 2;
        let filterCountData = localStorage.getItem("serler_filter_count");        
        if (filterCountData != null) {
            filterCount = JSON.parse(filterCountData);
            this.setState({ filterCount: filterCount });
        }

        // Limit the filter count for debug purpose only!!!
        if (filterCount > 10) {
            filterCount = 10;

        }

        var filterList = [];
        for (var i = 0; i < filterCount; i++) {
            filterList.push(<Filter filter_id={i} />);
        }

        this.setState({ filterCount: filterCount, filterList: filterList })
    }

    addFilter = (event) => {
        var filterCount = this.state.filterCount + 1;
        this.setState({ filterList: this.state.filterList.concat(<Filter filter_id={filterCount - 1}/>) });
        this.setState({ filterCount: filterCount });
        localStorage.setItem("serler_filter_count", JSON.stringify(filterCount));
    }

    removeFilter = (event) => {
        var filterCount = this.state.filterCount - 1;
        this.setState({ filterList: this.state.filterList.slice(0, -1) });
        this.setState({ filterCount: filterCount });
        localStorage.setItem("serler_filter_count", JSON.stringify(filterCount));
    }

    render() {
        return (
            <div className="py-3">
                <Divider variant="inset" />
                <h3>Filters</h3>
                {this.state.filterList}
                <Form.Row className="py-3">
                    <Col xs lg="2">
                        <Button variant="contained"
                            color="primary"
                            onClick={this.addFilter}>
                            Add filter
                    </Button>
                    </Col>
                    <Col>
                        <Button variant="contained"
                            color="secondary"
                            onClick={this.removeFilter}>
                            Remove filter
                    </Button>
                    </Col>
                </Form.Row>
            </div>
        );
    }
}
