import { PetService } from './../../services/pet-service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../../interfaces/pet';
@Component({
  selector: 'app-pet-details',
  imports: [DatePipe],
  templateUrl: './pet-details.html',
  styleUrl: './pet-details.css'
})
export class PetDetails implements OnInit {
  constructor(private route: ActivatedRoute, private petAPI: PetService) { }
  id: string = ""
  petData: Pet | undefined

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? "";
    this.petAPI.getOnePet(this.id).subscribe({
      next: (data) => { this.petData = data },
      error: (err) => console.error(err)
    })
  }
}
