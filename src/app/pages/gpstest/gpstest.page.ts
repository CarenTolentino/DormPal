import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { GoogleMap, Marker } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-gpstest',
  templateUrl: './gpstest.page.html',
  styleUrls: ['./gpstest.page.scss'],
})

export class GpstestPage implements OnInit {

  latitude:number = 13.781903599860783;
  longitude:number = 121.06918362277806;


  ngOnInit() {
    this.createMap()
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
    const marker:Marker = {
      coordinate: ({
        lat: 13.897814264363909,
        lng: 121.05081769303631
      }),
      title: "TESTMARKER",
      snippet:"testsnippet"
    }

    await this.newMap.addMarker(marker)
    this.newMap.setOnMarkerClickListener(async(marker) => {
      console.log(marker.title)
    })

  }

}

