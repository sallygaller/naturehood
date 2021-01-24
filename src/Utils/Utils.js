import moment from "moment";

export function dateFormat(observation) {
  const dateFormat = moment(observation.date).format("L");
  return dateFormat;
}

export function timeFormat(observation) {
  const timeFormat = moment(observation.time, "hh:mm:ss").format("hh:mm a");
  return timeFormat;
}

export const speciesTypes = [
  { id: 1, type: "Mammal" },
  { id: 2, type: "Fish" },
  { id: 3, type: "Bird" },
  { id: 4, type: "Arthropod" },
  { id: 5, type: "Amphibian" },
  { id: 6, type: "Reptile" },
];

export const testObservations = [
  {
    id: 1,
    species: "Robin",
    type: "Bird",
    date: "2020-12-25T08:00:00.000Z",
    time: "08:30:00",
    description: "I saw a robin at my feeder",
    lat: 45.593,
    lng: -122.755,
    date_added: "2020-12-25T09:28:32.615Z",
    neighbor: 1,
  },
  {
    id: 2,
    species: "Fox",
    type: "Mammal",
    date: "2020-12-15T08:00:00.000Z",
    time: "04:30:00",
    description: "I saw a mother fox and her cubs. The mother hissed at me.",
    lat: 47.593,
    lng: -122.755,
    date_added: "2020-12-15T16:28:32.615Z",
    neighbor: 1,
  },
  {
    id: 3,
    species: "Raccoon",
    type: "Mammal",
    date: "2020-12-05T08:00:00.000Z",
    time: "23:30:00",
    description: "A group of raccoons chased me down the street.",
    lat: 49.593,
    lng: -122.755,
    date_added: "2020-12-06T09:28:32.615Z",
    neighbor: 1,
  },
  {
    id: 4,
    species: "Skunk",
    type: "Mammal",
    date: "2020-12-08T08:00:00.000Z",
    time: "07:30:00",
    description: "I saw a skunk under my deck.",
    lat: 51.593,
    lng: -123.755,
    date_added: "2020-12-08T10:15:32.615Z",
    neighbor: 1,
  },
];
