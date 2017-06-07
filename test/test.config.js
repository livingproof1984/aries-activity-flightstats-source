require('dotenv').config();

export const config = {
	airport: 'CVG',
  embark: 'dep',
  date: {
    year: 2017,
    month: 8,
    day: 15,
    hour: 12
  },
	requestedFields : [
		'scheduledTime',
		'scheduledDate',
		'flight',
		'actualTime',
		'actualGateTime',
		'statusCode',
		'remarks',
		'codesharesAsNames',
		'airlineName',
		'flightId'
	],
	timeWindowBegin : 720,
	timeWindowEnd : 720,
	lateMinutes : 15,
	useRunwayTimes : false,
	excludeCargoFlights : false,
	utc : false,
	includeFlightPlan : false,
	appId : process.env.APP_ID,
	appKey : process.env.APP_KEY
};

