import { assert } from 'chai';
import FlightStatsSource from '../lib/index.js';
import { config } from './test.config';
import nock from 'nock';
import * as fixtures from './fixtures';
import deepEqual from 'deep-equal';

const URL = 'https://api.flightstats.com/flex'
const { year, month, day, hour } = config.date;

describe('FlightStatsSource', () => {
	describe('#props', () => {
		it('is the proper configuration', () => {
			assert(FlightStatsSource.props.name === require('../package.json').name);
			assert(FlightStatsSource.props.version === require('../package.json').version);
		});
	});

	describe('#getFlightStatusArrivalsByAirport', async () => {
		before(function() {
			nock(URL)
			.get(`/flightstatus/rest/v2/json/airport/status/${config.airport}/arr/${year}/${month}/${day}/${hour}?appId=${config.appId}&appKey=${config.appKey}&utc=${config.utc}`)
			.reply('200', fixtures.responseStatus)
		});
		it('gets arrivals flight status by airport', async () => {
			const source = new FlightStatsSource();
			const response = await source.getFlightStatusArrivalsByAirport(config);
			assert.isOk(response);
		});
	});

	describe('#getFlightTracksDeparturesByAirport', async () => {
		before(function() {
			nock(URL)
			.get(`/flightstatus/rest/v2/json/airport/tracks/${config.airport}/dep?appId=${config.appId}&appKey=${config.appKey}&includeFlightPlan=${config.includeFlightPlan}`)
			.reply('200', fixtures.responseTrack)
		});
		it('gets flight tracks departures by airport', async () => {
			const source = new FlightStatsSource();
			const response = await source.getFlightTracksDeparturesByAirport(config);
			assert.isOk(response);
		});
	});

	describe('#getFlightTracksArrivalsByAirport', async () => {
		before(function() {
			nock(URL)
			.get(`/flightstatus/rest/v2/json/airport/tracks/${config.airport}/arr?appId=${config.appId}&appKey=${config.appKey}&includeFlightPlan=${config.includeFlightPlan}`)
			.reply('200', fixtures.responseTrack)
		});
		it('gets arrivals flight tracks by airport', async () => {
			const source = new FlightStatsSource();
			const response = await source.getFlightTracksArrivalsByAirport(config);
			assert.isOk(response);
		});
	});

	describe('#getTaxiData', async () => {
		before(function() {
			nock(URL)
			.get(`/flightstatus/rest/v2/json/airport/status/${config.airport}/dep/${year}/${month}/${day}/${hour}?appId=${config.appId}&appKey=${config.appKey}&utc=${config.utc}`)
			.reply('200', fixtures.responseStatus)
		});
		it('gets taxi data', async () => {
			const source = new FlightStatsSource();
			const response = await source.getTaxiData(config);
			assert.isOk(response);
		});
	});

	describe('#fidsArrival', async () => {
		before(function() {
			nock(URL)
			.get(`/fids/rest/v1/json/CVG/arrivals?appId=${config.appId}&appKey=${config.appKey}&requestedFields=${config.requestedFields.join('%2C')}&timeWindowBegin=${config.timeWindowBegin}&timeWindowEnd=${config.timeWindowEnd}&lateMinutes=${config.lateMinutes}`)
			.reply('200', fixtures.responseFids)
		});
		it('gets fids arrivals', async () => {
			const source = new FlightStatsSource();
			const response = await source.fidsArrival(config);
		});
	});

	describe('#getActiveAirlines', async () => {
		before(function() {
			nock(URL)
			.get(`/airlines/rest/v1/json/active?appId=${config.appId}&appKey=${config.appKey}`)
			.reply('200', fixtures.responseStatus)
		});
		it('gets flight tracks departures by airport', async () => {
			const source = new FlightStatsSource();
			const response = await source.getActiveAirlines(config);
			assert.isOk(response);
		});
	});
	
});
