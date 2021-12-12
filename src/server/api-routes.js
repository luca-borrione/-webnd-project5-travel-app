const express = require('express');
const {
  getCurrentWeather,
  getGeoName,
  getPositionInfo,
  getTest,
  getThumbnail,
  getWeatherForecast,
} = require('./api-routes-controller');

const router = express.Router();

router.route('/test').get(getTest);
router.route('/geoname').get(getGeoName);
router.route('/position-info').get(getPositionInfo);
router.route('/thumbnail').get(getThumbnail);
router.route('/weather-current').get(getCurrentWeather);
router.route('/weather-forecast').get(getWeatherForecast);

module.exports = router;
