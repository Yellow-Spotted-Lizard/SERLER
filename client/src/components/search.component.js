import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import BootstrapTable from 'react-bootstrap-table-next';

import axios from 'axios';

import DateRange from './search/date-range';
import { createQuery, OP } from './search/query';
import { useJsonState } from './hooks/jsonState';

function SearchForm(props) {
  // var today = new Date();
  const [queryText, setQueryText] = useState("Start search here..." );

  const handleSubmit = (event) => {
    // console.debug('/api/v1/evidences/search?title_contains=', event.target.query.value);
    event.preventDefault();
    runSearch();
  }

  const [query, queryRef] = useJsonState(() => {
    const q = createQuery();
    q.setOp(OP.AND);
    return q;
  });

  const titleQuery = query.getQuery(0);
  titleQuery.setOp(OP.MATCH).setField('title');
  const dateRangeQuery = query.getQuery(1);

  console.debug(query);

  const runSearch = () => {
    console.debug('/api/v1/evidences/search?title_contains=', queryText)
    // axios.get('/api/v1/evidences/search?title_contains=' + queryText)
      // .then(result => props.onSearch(result.data))
      // .catch(e => console.error('failed to search', e));
    console.debug(JSON.stringify(query));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col sm={8}>
          <Form.Control name="query" placeholder="Start search here..." 
            onChange={e => {
              // console.debug(e.target);
              setQueryText(e.target.value); 
              titleQuery.setValue(e.target.value);
            }}
          />
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <DateRange field='date' query={dateRangeQuery}/>
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