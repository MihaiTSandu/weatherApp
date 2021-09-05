import { IUserInfo } from './user';

export interface ICityInfo {
  name: string;
  latitude: number;
  longitude: number;
  owner: IUserInfo;
}

export class City {
  name: ICityInfo['name'];

  latitude: ICityInfo['latitude'];

  longitude: ICityInfo['longitude'];

  owner: ICityInfo['owner'];

  constructor(public id: any, { name, latitude, longitude, owner }: ICityInfo) {
    this.id = id;
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.owner = owner;
  }
}
