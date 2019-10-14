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
            filterList: [
                <Filter/>,
                <Filter/>
            ] 
        }
    }

    addFilter = (event) => {
        this.setState({ filterList: this.state.filterList.concat(<Filter/>) });
    }

    removeFilter = (event) => {
        this.setState({ filterList: this.state.filterList.slice(0, -1) });
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
