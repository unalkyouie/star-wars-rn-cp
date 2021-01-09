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

export interface URLResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Fighter[];
}
