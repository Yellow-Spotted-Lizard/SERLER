import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
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
    }

    display(docs) {
      console.debug(docs);
    }

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <div>
                <SearchForm onSearch={this.display.bind(this)}/>
              </div>
            </header>
          </div>
        );
    }
}

export default Search;