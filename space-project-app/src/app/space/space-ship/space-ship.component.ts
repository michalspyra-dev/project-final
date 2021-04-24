import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-ship',
  templateUrl: './space-ship.component.html',
  styleUrls: ['./space-ship.component.css']
})
export class SpaceShipComponent implements OnInit {

  spaceShip={
    modelName: 'Boeing',
    imigaUrl: '/assets/spaceship.png',
    health: 75,
    activeShields: true,
    activeWeapons: false,
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
