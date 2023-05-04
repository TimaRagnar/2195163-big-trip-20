import { getRandomData } from '../mock/mocks.js';

const WAYPOINTS_COUNT = 4;


export default class WaypointsModel {
  waypoints = Array.from({length: WAYPOINTS_COUNT}, getRandomData);

  getWaypoints() {
    return this.waypoints;
  }

}