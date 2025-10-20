import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../interfaces/pet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(private http: HttpClient) { }

  getAllPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>("http://localhost:3000/pets");
  }
  getOnePet(petID: string) {
    return this.http.get<Pet>(`http://localhost:3000/pets/${petID}`);
  }
}
