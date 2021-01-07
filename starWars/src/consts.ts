export interface Person {
  // birth_year: string;
  // eye_color: string;
  // films: Film[];
  // gender: 'Male' | 'Female' | 'unknown' | 'n/a';
  // hair_color: string;
  height: number;
  // homeworld: Planet;
  // mass?: number;
  name: string;
  // skin_color: string;
  // created: Date;
  // edited: Date;
  // species: Specie[];
  // starships: Starship[];
  // url: string;
  // vehicles: Vehicle[];
}

export interface Film {
  title: string;
}
export interface Planet {
  climate: string;
  diameter: number;
  films: Film[];
  gravity: number;
  name: string;
  orbital_period: number;
  population: number;
  residents: Person[];
  rotation_period: number;
  surface_water: number;
  terrain: string;
  url: string;
}

export interface Specie {
  classification: string;
  designation: string;
  eye_colors: string[];
  hair_colors: string[];
  homeworld: Planet;
  language: string;
  name: string;
  people: Person[];
  films: Film[];
  skin_colors: string[];
  url: string;
}
export interface Starship {
  MGLT: string;
  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  created: Date;
  crew: number;
  edited: string;
  hyperdrive_rating: number;
  length: number;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: number;
  films: Film[];
  pilots: Person[];
  starship_class: string;
  url: string;
}
export interface Vehicle {
  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  created: Date;
  crew: number;
  edited: Date;
  length: number;
  manufacturer: string;
  max_atmosphering_speed: number;
  model: string;
  name: string;
  passengers: number;
  pilots: Person[];
  films: Film[];
  url: string;
  vehicle_class: string;
}

interface Element {
  name: string;
  fightingStat: number;
}

export enum resource {
  people = 'people/',
  starships = 'starships/',
  vahicles = 'vehicles/',
}
