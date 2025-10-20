import { Pet } from './../../interfaces/pet';
import { PetService } from './../../services/pet-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pet-container',
  imports: [],
  templateUrl: './pet-container.html',
  styleUrl: './pet-container.css'
})
export class PetContainer implements OnInit {
  constructor(private router: Router, private petAPI: PetService) { }
  petList: Pet[] = [];

  goToDetails(petID: number) {
    this.router.navigate(['/mypets', petID]);
  }
  ngOnInit() {
    this.petAPI.getAllPets().subscribe({
      next: (data) => (this.petList = data),
      error: err => console.error(err),
    })
  }
}
