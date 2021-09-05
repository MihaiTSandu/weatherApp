import fs from 'fs';

export const getDatabase = () => {
  try {
    return JSON.parse(fs.readFileSync('database.json', 'utf-8'));
  } catch {
    // Initial database is an empty array
    return [];
  }
};

export const updateDatabase = (database: any) =>
  fs.writeFileSync('database.json', JSON.stringify(database));
