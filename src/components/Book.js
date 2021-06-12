import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Book = ({
  id,
  flightName,
  flightDuration,
  flightOrigin,
  flightNumber,
  flightDeparture,
  handleRemoveBook
}) => {
  const history = useHistory();

  return (
    <tr>
      <td>{flightName}</td>
      <td>{flightNumber}</td>
      <td>{flightOrigin}</td>
      <td>{flightDeparture}</td>
      <td>{flightDuration}</td>
      <td><Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
           Edit
        </Button></td>
      <td><Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button></td>
    </tr>
    // <Card style={{ width: '18rem' }} className="book">
    //   <Card.Body>
    //     <Card.Title className="book-title">List of Flights</Card.Title>
    //     {/* <div className="book-details">
    //       <div>Author: {flightDuration}</div>
    //       <div>Quantity: {flightNumber} </div>
    //       <div>Price: {flightOrigin} </div>
    //       <div>Date: {flightDeparture}</div>
    //     </div>
    //     <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
    //       Edit
    //     </Button>{' '}
    //     <Button variant="danger" onClick={() => handleRemoveBook(id)}>
    //       Delete
    //     </Button> */}
    //   </Card.Body>
    // </Card>
  );
};

export default Book;
