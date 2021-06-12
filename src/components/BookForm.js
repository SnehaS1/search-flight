import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
  const [book, setBook] = useState(() => {
    return {
      flightName: props.book ? props.book.flightName : '',
      flightNumber: props.book ? props.book.flightNumber : '',
      flightOrigin: props.book ? props.book.flightOrigin : '',
      flightDestination: props.book ? props.book.flightDestination : '',
      flightDuration: props.book ? props.book.flightDuration : '',
      flightDeparture: props.book ? props.book.flightDeparture : '',
      
      // author: props.book ? props.book.author : '',
      // quantity: props.book ? props.book.quantity : '',
      // price: props.book ? props.book.price : '',
      // date: props.book ? props.book.date : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { flightName, flightDuration, flightOrigin, flightNumber, flightDeparture } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [flightName, flightDuration, flightOrigin, flightNumber, flightDeparture];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        flightName,
        flightDuration,
        flightOrigin,
        flightNumber,
        flightDeparture
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'flightNumber':
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      // case 'flightOrigin':
      //   if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
      //     setBook((prevState) => ({
      //       ...prevState,
      //       [name]: value
      //     }));
      //   }
      //   break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Flight Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="flightName"
            value={flightName}
            placeholder="Enter name of Flight Host"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="flightNumber">
          <Form.Label>Flight Number</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="flightNumber"
            value={flightNumber}
            placeholder="Enter Flight Number"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="flightOrigin">
          <Form.Label>Origin of Flight</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="flightOrigin"
            value={flightOrigin}
            placeholder="Enter Flight Origin"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="flightOrigin">
          <Form.Label>Destination of Flight</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="flightDeparture"
            value={flightDeparture}
            placeholder="Enter Flight Destination"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="flightDuration">
          <Form.Label>Flight Duration</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="flightDuration"
            value={flightDuration}
            placeholder="Enter Flight Duration"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
