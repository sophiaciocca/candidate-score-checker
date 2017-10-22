import React from "react";

class LookupForm extends React.Component {
  //   const { children, handleClick } = props;
  constructor(props) {
    super(props);

    this.state = {
      cartItems: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const updatedValues = this.state.cartItems;
    this.props.updateQty(updatedValues);
  }

  render() {
    return (
      <div>
        <h1>HI THIS IS LOOKUP FORM</h1>
        <form id='lookup-form'>
          <label>Candidate Id:</label>
          <input type='text' name='candidate-id' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default LookupForm;

// <form id="address-form" onSubmit={handleSubmit} />

// <div className="row center-block">
// <div className="col-lg-4">
//   <h4>Shipping Information:</h4>
//   <br />
//   <div>
//     <label>Email</label>
//     <input type="text" name="email" />
//   </div>
// </div>
// </div>
// <div className="row">
// <div className="col-lg-12">
//   <center>
//     <button type="submit">Submit Order</button>
//   </center>
// </div>
// </div>
