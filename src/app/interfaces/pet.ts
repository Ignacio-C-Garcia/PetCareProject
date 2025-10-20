import { User } from './user';
export interface Pet {
    id: number;
    userId: number;
    photo: string;
    name: string;
    species: string;
    age: number;
    diseases: string[];
    lastCheckup: string;
    medication: string[];
    currentTreatment: string;
    medicalHistory: string;
    createdAt: string;
    updatedAt: string;
    User: User;
}

