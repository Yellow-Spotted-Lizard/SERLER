import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Divider from '@material-ui/core/Divider';
import RangeModes from "./rangeModes";
import TextField from '@material-ui/core/TextField';

export default class Calendar extends Component {

    constructor(props) {
        super(props);
        var years = [];
        years.push({ value: "not set", label: "Not set" })
        for (var i = 1970; i < 2020; i++) {
            years.push({ value: i, label: i });
        }
        this.state = {
            fromYears: years,
            fromValue: 'not set',
            toYears: years,
            toValue: 'not set',
            fromDisabled: true,
            toDisabled: true
        }
    }

    onRangeModeChange = (event) => {
        switch (event.target.value) {
            case 'all':
                this.setState({ fromDisabled: true, fromValue: 'not set', toDisabled: true, toValue: 'not set' });
                break;
            case 'today-5':
                this.setState({ fromDisabled: true, fromValue: '2014', toDisabled: true, toValue: '2019' });
                break;
            case 'today-10':
                this.setState({ fromDisabled: true, fromValue: '2009', toDisabled: true, toValue: '2019' });
                break;
            case 'after':
                this.setState({ fromDisabled: false, fromValue: '2019', toDisabled: true, toValue: 'not set' });
                break;
            case 'before':
                this.setState({ fromDisabled: true, fromValue: 'not set', toDisabled: false, toValue: '2019' });
                break;
            case 'range':
                this.setState({ fromDisabled: false,  fromValue: '2019', toDisabled: false, toValue: '2019' });
                break;
        }
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
