import React from 'react';
import axios from 'axios';
import Results from './Results.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class Main extends React.Component {
  //   const { children, handleClick } = props;
  constructor(props) {
    super(props);

    this.state = {
      candidateId: null,
      candidatePercentiles: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchPercentiles = this.fetchCandidatePercentiles.bind(this);
  }

  handleChange(event) {
    this.setState({
      candidatePercentiles: [],
      candidateId: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchCandidatePercentiles(this.state.candidateId);
  }

  fetchCandidatePercentiles(candidateId) {
    axios
      .get(`/api/candidates/${candidateId}`)
      .then(res => res.data)
      .then(candidatePercentiles => {
        this.setState({ candidatePercentiles: candidatePercentiles });
      })
      .catch(err =>
        console.error('Fetching candidate information was unsuccessful', err)
      );
  }

  render() {
    return (
      <div>
        <Header />
        <div id='main-content'>
          <form id='lookup-form' onSubmit={this.handleSubmit}>
            <div className='block'>
              <label className='label'>Enter your candidate ID here:</label>
            </div>
            <input
              type='text'
              name='candidate-id'
              placeholder = '000'
              onChange={this.handleChange}
            />
            <div className='block'>
              <button type='submit'>Submit</button>
            </div>
          </form>
          {this.state.candidateId && this.state.candidatePercentiles.length ? (
            <Results percentiles={this.state.candidatePercentiles} />
          ) : null}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
