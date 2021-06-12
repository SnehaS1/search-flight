import React, { useContext, useState } from "react";
import { Button, Table } from "react-bootstrap";
import BooksContext from "../context/BooksContext";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

function SearchFlights() {
  const { books, setBooks } = useContext(BooksContext);
  const [origin, setOrigin] = useState("Abu Dhabi");
  const [departure, setDeparture] = useState();
  const [flightResult, setFlightResult] = useState([]);
  const [submit, setSubmit] = useState(false);


  const originRange = books.map((book) => book.flightOrigin);
  const departureRange = books.map((book) => book.flightDeparture);
  //   handleChang
  const handleInputChange = (event, value) => {
    console.log(value);
    setOrigin(value);
  };
  const handleDeptChange = (event, value) => {
    console.log(value);
    setDeparture(value);
    
  };
  const handleSubmit = (event) => {
      setSubmit(true);
    
    event.preventDefault();
    debugger;
    const val = books.filter(function (el) {
      return el.flightOrigin === origin && el.flightDeparture === departure;
    });
    // if (val.length) {
      setFlightResult(val);
    // }
  };
  return (
    <div className="search-wrapper">
      {/* <div className="search-title">Search flights</div> */}
      <div className="search-inputs">
        <form className="search-form" onSubmit={handleSubmit}>
          <label className="form-label">
            Origin:
            {/* <input type="text" name="name" /> */}
            <Autocomplete
              onChange={handleInputChange}
              name="originRange"
              id="combo-box-demo"
              name="origin"
              options={originRange}
              value={origin}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <>
                  <TextField
                    {...params}
                    label="Flight origin"
                    variant="outlined"
                  />
                </>
              )}
            />
          </label>
          <label className="form-label">
            Destination:
            <Autocomplete
              onChange={handleDeptChange}
              id="combo-box-demo"
              value={departure}
              options={departureRange}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <>
                  <TextField
                    {...params}
                    label="Flight Destination"
                    variant="outlined"
                  />
                </>
              )}
            />
          </label>
          <Button variant="primary" type="submit" className="submit-btn-form">
            {" "}
            Submit
          </Button>
        </form>
        {/* <div className="search-origin"></div>
               <div className="search-departure"></div>
               <div className="search-submit"></div> */}
      </div>
      <div className="flights-container">
        {flightResult.length !== 0 ? (
          <div className="search-fliter">
            <Table bordered>
              <thead style={{ backgroundColor: " rgba(0,0,0,.05)" }}>
                <tr>
                  <th>Flight Host</th>
                  <th>Flight Number</th>
                  <th>Flight Origin</th>
                  <th>Flight Destination</th>
                  <th>Flight Duration</th>
                  <th>Price</th>
                  {/* <th></th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {flightResult.map((flight) => {
                    return (
                      <>
                        <td>{flight.flightName}</td>
                        <td>{flight.flightNumber}</td>
                        <td>{flight.flightOrigin}</td>
                        <td>{flight.flightDeparture}</td>
                        <td>{flight.flightDuration}</td>

                        <td>$ { flight.flightDuration*123}</td>
                      </>
                    );
                  })}
                </tr>
              </tbody>
            </Table>
          </div>
        ): submit && (<div className="search-fliter">No Results Found</div>
        )}
      </div>
    </div>
  );
}

export default SearchFlights;
