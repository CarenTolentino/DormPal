import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { GoogleMap, LatLngBounds, Marker } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LatLng } from '@capacitor/google-maps/dist/typings/definitions';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  defaultlat:number = 13.781903599860783;
  defaultlng:number = 121.06918362277806;

  dormCreate:FormGroup

  constructor(public formBuilder: FormBuilder){
    this.dormCreate = this.formBuilder.group({
      dormname:[''],
      dormaddress:[''],
      dormlng:[''],
      dormlat:[''],
      dormutilities:[''],
      dormimages:['']
    })
  }

  ngOnInit() {
    this.createMap()
  }

  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>
  newMap: GoogleMap


  async createMap(){
    const position = await Geolocation.getCurrentPosition()
    this.defaultlat = position.coords.latitude;
    this.defaultlng = position.coords.longitude;

    this.newMap = await GoogleMap.create({
      id: 'test-map',
      element: document.getElementById('map')!,
      apiKey: 'AIzaSyA_XbhifnOv5XoTCQAi9BkoHqNZRc_-1bo',
      config: {
        center: {
          lat: this.defaultlat,
          lng: this.defaultlng,
        },
        disableDefaultUI: true, // a way to quickly hide all controls
        scaleControl: true,
        zoomControl: true,
        zoom: 15,
        mapId: 'c7128929d247ddf2'
      },
    })
  }





  

  selectedImages: any[] = [];

  onFilesSelected(event: any) {
    const files = event.target.files;
    if (files) {
      this.readFiles(files);
    }
  }

  private readFiles(files: FileList) {
    for (let i = 0; i < Math.min(files.length, 3); i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImages.push(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  async dormCreateSubmit() {
    
    let bounds: LatLngBounds = await this.newMap.getMapBounds();
    let center: LatLng = bounds.center;

    this.dormCreate.patchValue({
      dormlat: center.lat.toString(),
      dormlng: center.lng.toString()
    })

    console.log(JSON.stringify(this.dormCreate.value))
  }

}
