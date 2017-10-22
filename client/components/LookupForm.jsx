import React from 'react'
import axios from 'axios'


class LookupForm extends React.Component {
  //   const { children, handleClick } = props;
  constructor(props) {
    super(props);

    this.state = {
      candidateId: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchresults = this.fetchCandidateInfo.bind(this);
  }

  handleChange(event) {
    this.setState({candidateId: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchCandidateInfo(this.state.candidateId)
  }

  fetchCandidateInfo(candidateId) {
    axios.get(`/api/candidates/${candidateId}`)
    .then(res => res.data)
    .then(candidateInfo => {
      console.log('retrieved candidate info: ', candidateInfo)
    })
    .catch(err => console.error('Fetching candidate information was unsuccessful', err))
  }

  render() {
    return (
      <div>
        <form id='lookup-form' onSubmit={this.handleSubmit}>
          <label>Candidate Id:</label>
          <input type='text' name='candidate-id' onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default LookupForm;