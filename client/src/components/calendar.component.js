import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Divider from '@material-ui/core/Divider';
import RangeModes from "./rangeModes";
import TextField from '@material-ui/core/TextField';

export default class Calendar extends Component {

    constructor(props) {
        super(props);

        // Creating the list of years
        var years = [];
        years.push({ value: "not set", label: "Not set" })
        for (var i = 1970; i < 2020; i++) {
            years.push({ value: i, label: i });
        }

        this.state = {
            // Range drop-down list
            rangeMode: 'all',

            // From year drop-down list
            fromYears: years,
            fromValue: 'not set',
            fromDisabled: true,

            // To year drop-down list
            toYears: years,
            toValue: 'not set',
            toDisabled: true,
        }
    }

    componentDidMount = () => {
        let rangeModeData = localStorage.getItem("serler_range_mode");
        if (rangeModeData != null) {
            let rangeMode = JSON.parse(rangeModeData);
            this.setState({ rangeMode: rangeMode });
        }

        let fromValueData = localStorage.getItem("serler_from_year");
        if (fromValueData != null) {
            let fromValue = JSON.parse(fromValueData);
            this.setState({ fromValue: fromValue });
        }

        let fromDisabledData = localStorage.getItem("serler_from_disabled");
        if (fromDisabledData != null) {
            let fromDisabled = JSON.parse(fromDisabledData);
            this.setState({ fromDisabled: fromDisabled });
        }

        let toValueData = localStorage.getItem("serler_to_year");
        if (toValueData != null) {
            let toValue = JSON.parse(toValueData);
            this.setState({ toValue: toValue });
        }

        let toDisabledData = localStorage.getItem("serler_to_disabled");
        if (toDisabledData != null) {
            let toDisabled = JSON.parse(toDisabledData);
            this.setState({ toDisabled: toDisabled });
        }
    }

    onRangeModeChange = (event) => {
        var rangeMode = event.target.value;
        var fromDisabled = false;
        var fromValue = 'not set';
        var toDisabled = false;
        var toValue = 'not set';

        switch (event.target.value) {
            case 'all':                
                fromDisabled = true; 
                fromValue = 'not set'; 
                toDisabled = true; 
                toValue = 'not set';
                break;
            case 'today-5':
                fromDisabled = true;
                fromValue = '2014';
                toDisabled = true;
                toValue = '2019';
                break;
            case 'today-10':
                fromDisabled = true;
                fromValue = '2009';
                toDisabled = true;
                toValue = '2019';
                break;
            case 'after':
                fromDisabled = false;
                fromValue = '2019';
                toDisabled = true;
                toValue = 'not set';
                break;
            case 'before':
                fromDisabled = true;
                fromValue = 'not set'; 
                toDisabled = false;
                toValue = '2019';
                break;
            case 'range':
                fromDisabled = false;
                fromValue = '2019';
                toDisabled = false;
                toValue = '2019';
                break;
            default:
                break;
        }

        // Change state
        this.setState({ rangeMode: rangeMode, fromDisabled: fromDisabled, fromValue: fromValue, toDisabled: toDisabled, toValue: toValue });

        // Save the state
        localStorage.setItem("serler_range_mode", JSON.stringify(rangeMode));
        localStorage.setItem("serler_from_year", JSON.stringify(fromValue));
        localStorage.setItem("serler_from_disabled", JSON.stringify(fromDisabled));
        localStorage.setItem("serler_to_year", JSON.stringify(toValue));
        localStorage.setItem("serler_to_disabled", JSON.stringify(toDisabled));
    }

    onFromYearChange = (event) => {
        this.setState({ fromValue: event.target.value });
        localStorage.setItem("serler_from_year", JSON.stringify(event.target.value));
    }

    onToYearChange = (event) => {
        this.setState({ toValue: event.target.value });
        localStorage.setItem("serler_to_year", JSON.stringify(event.target.value));
    }

    render() {
        return (
            <div className="py-3">
                <Divider variant="inset" />
                <h3>Year range</h3>

                <Form.Row>
                    <Col>
                        <TextField
                            id="outlined-select-range-mode"
                            select
                            label="Range"
                            onChange={this.onRangeModeChange}
                            value={this.state.rangeMode}
                            SelectProps={{
                                native: true,
                                MenuProps: {
                                },
                            }}
                            helperText="Please specify the range"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        >
                            {RangeModes.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Col>
                    <Col>
                        <TextField
                            id="outlined-select-from"
                            select
                            label="From"
                            onChange={this.onFromYearChange}
                            disabled={this.state.fromDisabled}
                            value={this.state.fromValue}
                            SelectProps={{
                                native: true,
                                MenuProps: {
                                },
                            }}
                            helperText="Please specify the start year"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        >
                            {this.state.fromYears.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Col>
                    <Col>
                        <TextField
                            id="outlined-select-to"
                            select
                            label="To"
                            onChange={this.onToYearChange}
                            disabled={this.state.toDisabled}
                            value={this.state.toValue}
                            SelectProps={{
                                native: true,
                                MenuProps: {
                                },
                            }}
                            helperText="Please specify the final year"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        >
                            {this.state.toYears.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Col>
                </Form.Row>
            </div>
        );
    }
}
