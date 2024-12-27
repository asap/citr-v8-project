export type Animal = "dog"  | "cat" | "bird" | "reptile" | "rabbit"

export interface Pet { 
    id: number;
    name: string;
    description: string;
    animal: Animal;
    breed: string;
    images: string[];
    city: string;
    state: string
}

export interface PetAPIResponse {
    numberOfResults: number;
    startIndex: number;
    endIndex: number;
    hasNext: boolean;
    pets: Pet[];
}