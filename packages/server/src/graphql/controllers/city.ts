import { getDatabase, updateDatabase } from '../database';
import { City } from '../models';

export const getCity = ({ id }: City) => {
  const cityInfo = getDatabase()[id];

  if (!cityInfo) throw new Error(`No city exists with id ${id}`);

  return new City(id, cityInfo);
};

export const createCity = ({ id: _, ...input }: City) => {
  const database = getDatabase();
  let id = Object.keys(database).length;
  if (id > 0) {
    id += 1;
  }

  database[id] = input;
  updateDatabase(database);

  return new City(id, input);
};

export const updateCity = ({ id, ...input }: City) => {
  const database = getDatabase();

  if (!database[id]) {
    throw new Error(`No city exists with id ${id}`);
  }

  database[id] = input;
  updateDatabase(database);

  return new City(id, input);
};
