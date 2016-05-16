#Aries Integration for Flightstats

This is an integration for [Flightstats](https://developer.flightstats.com/).

##Methods
This integration has a number of methods that can be called, broken out into four API categories.

###FIDS (Flight Information Display System)
```javascript
fidsArrival
fidsDepartment
```

###Airport
```javascript
getAllAirports
getActiveAirports
getActiveAirportsForDate
getCurrentAirportByCode
getAirportByCityCode
```

###Airline
```javascript
getAllAirlines
getActiveAirlines
getActiveAirlinesForDate
```

###Flight Status
```javascript
getTaxiData
getFlightStatusArrivalsByAirport
getFlightTracksArrivalsByAirport
getFlightTracksDeparturesByAirport
getFlightTracksArrivalsByAirportWithDate
getFlightTracksDeparturesByAirportWithDate
getAppendixAirport
getAppendixEquipment
```


##Configuration

###Method
The method denotes which of the above methods you want to use. Possible values are `forecast` or `current`
```javascript
"method": "current"
```

##Response
