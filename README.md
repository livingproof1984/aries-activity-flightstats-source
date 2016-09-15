![alt text](/img/logo.png "Aries Integration for Flightstats")

#Aries Integration for Flightstats

This is an integration for [Flightstats](https://developer.flightstats.com/).

##Methods
This integration has 20 methods that can be called, broken out into four API categories.

###FIDS (Flight Information Display System)

####Fids Arrival
`fidsArrival` - Retrieve FIDS display data, given by the requestedFields parameter, for flights arriving at a given airport, including fields selected by a comma-separated list.

####Fids Departure
`fidsDeparture` - Retrieve FIDS display data, given by the requestedFields parameter, for flights departing from a given airport, including fields selected by a comma-separated list.

###Airport

####Get All Airports
`getAllAirports` - Returns a listing of all airports, including those that are not currently active.

####Get Active Airports
`getActiveAirports` - Returns a listing of currently active airports. (Airports that are in use).

####Get Active Airports For Date
`getActiveAirportsForDate` - Returns a listing of active airports on the given date.

####Get Current Airport By Code
`getCurrentAirportByCode` - Returns the airport that currently has the given code (or null if none)

####Get Airport By City Code
`getCurrentAirportByCode` - Returns a listing of airports that have had the given city code 

###Airline

####Get All Airlines
`getAllAirlines` - Returns a listing of all airlines, including those that are not currently active. (In use).

####Get Active Airlines
`getActiveAirlines` - Returns a listing of currently active airlines.

####Get Active Airlines For Date
`getActiveAirlinesForDate` - Returns a listing of active airlines on the given date.

###Flight Status

####Get Taxi Data
`getTaxiData` - Returns a list of taxi data from the given airport and embark status, arrival or departure.

####Get Flight Status Arrivals By Airport
`getFlightStatusArrivalsByAirport` - Returns the status of all flights arriving (or having arrived) at an airport within the specified hour, or within a window up to 6 hours wide if numHours is specified.

####Get Flight Status Departures By Airport
`getFlightStatusArrivalsByAirport` - Returns the status of all flights departing (or having departed) from an airport within the specified hour, or within a window up to 6 hours wide if numHours is specified.

####Get Flight Tracks Arrivals By Airport
`getFlightTracksArrivalsByAirport` - Returns the positional tracks of active flights having the specified arrival airport. Flight plans may be optionally included. "Active" flights are those for which positional data are available, and which have not yet landed. To narrow down to only the freshest data, you may optionally limit the age (in minutes) and/or number of positions per track.

####Get Flight Tracks Departures By Airport
`getFlightTracksDeparturesByAirport` - Returns the positional tracks of active flights having the specified departure airport. Flight plans may be optionally included. "Active" flights are those for which positional data are available, and which have not yet landed. To narrow down to only the freshest data, you may optionally limit the age (in minutes) and/or number of positions per track.

####Get Appendix Airport
`getAppendixAirport` - Returns list of airports flying into given airport.

####Get Appendix Equipment
`getAppendixEquipment` - Returns list of equipment used flying into given airport.

##Configuration
This integration has 2 required parameters, appId and appKey, for all methods while many of the methods are unique and require a different number of parameters.

###App Id
The app id is the application id associated with your developer account. The app id can be found by logging into your developer flightstats account > Dashboard (Can be found at the top-middle section of page) > View (of the app to use) and it'll be under APPLICATION ID.
```javascript
"appId": "h35fa832"
```

###App Key
The app key is the application key associated with the specified application inside of your developer account. The app key can be found by logging into your developer flightstats account > Dashboard (Can be found at the top-middle section of page) > View (of the app to use) and it'll be under APPLICATION KEYS.
```javascript
"appKey": "h738j6e64d98323fb58e827f1696uej6"
```

###Requested Fields
The requested fields parameter are the fields that will be displayed if given. A listed of the accepted requested fields can be found [here](https://developer.flightstats.com/api-docs/fids/v1/fidsResponse).
```javascript
"requestedFields": [ 
    "flightId", 
    "flight", 
    "airlineName", 
    "primaryMarketingAirlineName", 
    "operatingAirlineName"
]
```

###Time Window Begin
The number of minutes before 'now' during which flights should potentially be included. Default window is based on airport classification.
```javascript
"timeWindowBegin": 720
```

###Time Window End
The number of minutes after 'now' during which flights should potentially be included. Default window is based on airport classification.
```javascript
"timeWindowEnd": 720
```

###Late Minutes
The number of minutes after which a flight should be considered late, when generating remarks. Defaults to 100.
```javascript
"lateMinutes": 15
```

###Airport
The airport to retrieve data for.
```javascript
"airport": "CVG"
```

###Embark
The arrival or departure of a given airport or flight.
```javascript
"embark": "arr"
```

###Date
The date of the wanted query. Default is set to the current date.
* Year: The four-digit year.
* Month: The numeric month value. (1-12)
* Day: The numeric day value for given month. 
* Hour: The numeric hour value. (0-23)
```javascript
"date": {
	"year": 2016,
	"month": 1,
	"day": 12,
	"hour": 12
}
```

###Airport Code
The airport code is the IATA code associated with the airport, the three-letter code assigned to airports. A list of IATA codes can be found [here](http://www.airportcodes.org/).
```javascript
"airportCode": "CVG"
```

###City Code
The city code is the three-letter code assigned to cities. A list of city codes can be found [here](http://www.ezoory.com/forms/eng/citycodlong.html).
```javascript
"cityCode": "CVG"
```

###UTC
The UTC parameter decides whether the time is given in UTC or local time. Default is false.
```javascript
"utc": "true"
```

###Include Flight Plan
The include flight plan parameter adds waypoints, the longitude and latitude of the flight, if true. Default is false.
```javascript
"includeFlightPlan": "false"
```

##Response
This is an example response with the `getFlightTracksDeparturesByAirport` method with includeFlightPlan set to false.
```javascript
{
 "request": {
  "airport": {
   "requestedCode": "CVG",
   "fsCode": "CVG"
  },
  "includeFlightPlan": {
   "requested": "false",
   "interpreted": false
  },
  "maxPositions": {
   "requested": "2",
   "interpreted": 2
  },
  "maxPositionAgeMinutes": {},
  "codeType": {},
  "maxFlights": {
   "requested": "1",
   "interpreted": 1
  },
  "extendedOptions": {},
  "url": "https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/tracks/CVG/dep"
 },
 "appendix": {
  "airlines": [
   {
    "fs": "9E",
    "iata": "9E",
    "icao": "FLG",
    "name": "Endeavor Air",
    "active": true
   }
  ],
  "airports": [
   {
    "fs": "CVG",
    "iata": "CVG",
    "icao": "KCVG",
    "faa": "CVG",
    "name": "Cincinnati/Northern Kentucky Airport",
    "city": "Cincinnati",
    "cityCode": "CVG",
    "stateCode": "OH",
    "postalCode": "41048",
    "countryCode": "US",
    "countryName": "United States",
    "regionName": "North America",
    "timeZoneRegionName": "America/New_York",
    "weatherZone": "OHZ077",
    "localTime": "2016-09-15T16:36:40.382",
    "utcOffsetHours": -4,
    "latitude": 39.0555,
    "longitude": -84.66145,
    "elevationFeet": 897,
    "classification": 1,
    "active": true,
    "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/CVG?codeType=fs",
    "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/CVG?codeType=fs"
   },
   {
    "fs": "BWI",
    "iata": "BWI",
    "icao": "KBWI",
    "faa": "BWI",
    "name": "Baltimore/Wash International Thurgood Marshall Airport",
    "city": "Baltimore",
    "cityCode": "BWI",
    "stateCode": "MD",
    "postalCode": "21240",
    "countryCode": "US",
    "countryName": "United States",
    "regionName": "North America",
    "timeZoneRegionName": "America/New_York",
    "weatherZone": "MDZ014",
    "localTime": "2016-09-15T16:36:40.785",
    "utcOffsetHours": -4,
    "latitude": 39.179526,
    "longitude": -76.668941,
    "elevationFeet": 146,
    "classification": 1,
    "active": true,
    "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/BWI?codeType=fs",
    "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/BWI?codeType=fs"
   }
  ]
 },
 "flightTracks": [
  {
   "flightId": 776718506,
   "carrierFsCode": "9E",
   "flightNumber": "3896",
   "tailNumber": "N8869B",
   "departureAirportFsCode": "CVG",
   "arrivalAirportFsCode": "BWI",
   "departureDate": {
    "dateLocal": "2016-09-15T16:00:00.000",
    "dateUtc": "2016-09-15T20:00:00.000Z"
   },
   "equipment": "CR2",
   "bearing": 75.20462049752904,
   "heading": 89.7266173770676,
   "positions": [
    {
     "lon": -81.1704,
     "lat": 38.3438,
     "speedMph": 533,
     "altitudeFt": 27156,
     "source": "derived",
     "date": "2016-09-15T20:31:06.000Z"
    },
    {
     "lon": -81.3346,
     "lat": 38.3433,
     "speedMph": 521,
     "altitudeFt": 27123,
     "source": "derived",
     "date": "2016-09-15T20:30:06.000Z"
    }
   ]
  }
 ]
}
```