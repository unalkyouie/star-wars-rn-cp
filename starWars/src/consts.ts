export interface Fighter {
  name: string;
  fightingStat: number;
  height?: number;
  crew?: number;
}

export enum resource {
  people = 'people/',
  starships = 'starships/',
  vahicles = 'vehicles/',
}
