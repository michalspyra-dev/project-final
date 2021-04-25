import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-ships2',
  templateUrl: './space-ships2.component.html',
  styleUrls: ['./space-ships2.component.css']
})
export class SpaceShips2Component implements OnInit {

  spaceShip2={
    modelName:'Ziomek',
    imageUrl: '../../assets/statek2.jpg',
    health: 40,
    activeShield: true,
    activeWeapon: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
