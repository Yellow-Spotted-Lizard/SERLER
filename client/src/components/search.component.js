import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import BootstrapTable from 'react-bootstrap-table-next';

import axios from 'axios';

function SearchForm(props) {

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
    </Form>
  );
}

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
          result: []
        }
    }

    display(docs) {
      console.debug(docs);
      this.setState({result: docs})
    }

    render() {
      const columns = [{
          dataField: 'title',
          text: 'Title'
        }, {
          dataField: 'authors',
          text: 'Authors',
          formatter: a => a.map(ai => ai.lastName + ', ' + ai.firstName).join('; ')
        }, {
          dataField: 'keywords',
          text: 'Keywords',
          formatter: k => k.join(', ')
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
        },
        {
          dataField: 'researchQuestion',
          text: 'Research Question',
        },
        {
          dataField: 'result',
          text: 'Result',
        },
      ];

      return (
        <div className="App">
          {/* <header className="App-header">
          </header> */}
          <div>
            <div>
              <SearchForm onSearch={this.display.bind(this)}/>
            </div>
            <br/> <br/>
            <div>
              <BootstrapTable keyField='_id' data={this.state.result} columns={ columns } />
            </div>
            </div>
        </div>
      );
    }
}

export default Search;