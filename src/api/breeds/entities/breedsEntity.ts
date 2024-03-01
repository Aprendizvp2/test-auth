export interface BreedEntity {
  [breedName: string]: string[];
}

export interface BreedsResponseEntity {
  message: BreedEntity;
  status: string;
}
