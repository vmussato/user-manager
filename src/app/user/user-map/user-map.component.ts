import { Component, Input, OnInit } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon-2x.png';

@Component({
  selector: 'app-user-map',
  templateUrl: './user-map.component.html',
  styleUrls: ['./user-map.component.scss']
})
export class UserMapComponent implements OnInit {

  private map;
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
    console.log(this.data, 'data')
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ this.data.lng, this.data.lat  ],
      zoom: 5
    });

    L.marker([this.data.lng, this.data.lat]).addTo(this.map);

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

}
