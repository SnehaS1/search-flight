import React from 'react';
const initailFlightState = [
    {
        "id": "8966b005-3489-4609-9eaf-63247ef02052",
        "flightName": "Fly Service",
        "flightDuration": "3464",
        "flightOrigin": "Acapulco",
        "flightNumber": "9009",
        "flightDeparture": "Accra"
    },
    {
        "id": "f20e00d8-7469-4a88-87ed-8db5d38a20ae",
        "flightName": "Merkur",
        "flightDuration": "577",
        "flightOrigin": "Abu Dhabi",
        "flightNumber": "89",
        "flightDeparture": "Abuja"
    },
    {
        "id": "05523670-5ca1-489f-bcd3-0cf617db2ccb",
        "flightName": "air india",
        "flightDuration": "899",
        "flightOrigin": "Abidjan",
        "flightNumber": "44",
        "flightDeparture": "Abilene, TX"
    },
    {
        "id": "6720b9bf-9beb-4b6c-a0d6-e0a7e80a3627",
        "flightName": "air india",
        "flightDuration": "899",
        "flightOrigin": "Aberdeen",
        "flightNumber": "44",
        "flightDeparture": "Aberdeen, SD"
    },
    {
        "id": "630d4aaa-ee80-4ca0-afa9-f21d9027e453",
        "flightName": "Lithuana",
        "flightDuration": "33",
        "flightOrigin": "Aarhus",
        "flightNumber": "122",
        "flightDeparture": "Abbotsford, BC"
    },
    {
        "id": "76b61032-80d5-4077-85f9-d86645d49062",
        "flightName": "abc",
        "flightDuration": "233",
        "flightOrigin": "Aalborg",
        "flightNumber": "123",
        "flightDeparture": "Aalesund"
    }
];

const BooksContext = React.createContext(initailFlightState);

export default BooksContext;
