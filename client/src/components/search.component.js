import React, { useState } from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import BootstrapTable from 'react-bootstrap-table-next';

import axios from 'axios';

function SearchForm(props) {
  // var today = new Date();
  const [date, setDate] = useState(new Date());

  const handleSubmit = (event) => {
    // console.debug('/api/v1/evidences/search?title_contains=', event.target.query.value);
    event.preventDefault();
    axios.get('/api/v1/evidences/search?title_contains=' + event.target.query.value)
      .then(result => props.onSearch(result.data))
      .catch(e => console.error('failed to search', e));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col sm={8}>
          <Form.Control name="query" placeholder="Start search here..." />
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <label>
            Date:
          </label>
        </Col>
        </Form.Row>
      <Form.Row>
        <Col>
          <DatePicker
            name="date_field"
            selected={date}
            onSelect={(date) => {
              setDate(date)
              // call search 
            }} 
            // onChange={this.handleChange} 
          />
        </Col>
      </Form.Row> 
    </Form>
  );
}

function Search (props) {

  const [searchResult, setSearchResult] = useState([]);

  function display(docs) {
    console.debug('with hook', docs);
    setSearchResult(docs);
  }

  const columns = [{
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
  ];

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <div>
        <div>
          <SearchForm onSearch={display}/>
        </div>
        <br/> <br/>
        <div>
          <BootstrapTable keyField='_id' data={searchResult} columns={ columns } />
        </div>
        </div>
    </div>
  );
}

export default Search;