import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {

  latitude:number = 13.781903599860783;
  longitude:number = 121.06918362277806;

  constructor(private httpClient:HttpClient, private router:Router){}

  ngOnInit() {
    this.createMap()
    if (userService.UID == "no user") this.router.navigate(['login'])
  }

  ionViewDidEnter(){
    if (userService.UID == "no user") this.router.navigate(['login'])
  }

  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>
  newMap: GoogleMap

  async createMap(){
    const position = await Geolocation.getCurrentPosition()
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;

    this.newMap = await GoogleMap.create({
      id: 'test-map',
      element: document.getElementById('map')!,
      apiKey: 'AIzaSyA_XbhifnOv5XoTCQAi9BkoHqNZRc_-1bo',
      config: {
        center: {
          lat: this.latitude,
          lng: this.longitude,
        },
        disableDefaultUI: true, // a way to quickly hide all controls
        scaleControl: true,
        zoomControl: true,
        zoom: 15,
        mapId: 'c7128929d247ddf2'
      },
    })

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=UTF-8');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

    this.httpClient.get('https://dormpal.000webhostapp.com/getmarkers.php', {headers: headers}).subscribe((response) => {
    
      const rows = response as Array<any>
      rows.forEach((row) => {
        this.newMap.addMarker({
          coordinate: ({
            lat: Number(row['latitude']),
            lng: Number(row['longitude'])
          }),
          title: row['dormID']
        })
      })
      this.newMap.setOnMarkerClickListener(async(marker) => {
        console.log("Dorm ID for marker: "+marker.title)
      })
    })

  }


  goToProfile(){
    this.router.navigate(['profile'])
  }
}
