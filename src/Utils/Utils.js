import moment from "moment";

export function dateFormat(observation) {
  const dateFormat = moment(observation.date).format("L");
  return dateFormat;
}

export function timeFormat(observation) {
  const timeFormat = moment(observation.time, "hh:mm:ss").format("hh:mm a");
  return timeFormat;
}
