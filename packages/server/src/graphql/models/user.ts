import { ICityInfo } from './city';

export interface IUserInfo {
  name: string;
  cities: ICityInfo[];
}

export class User {
  name: IUserInfo['name'];

  cities: ICityInfo[];

  constructor(public id: any, { name, cities }: IUserInfo) {
    this.id = id;
    this.name = name;
    this.cities = cities;
  }
}
