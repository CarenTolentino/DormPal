import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { GoogleMap, LatLngBounds, Marker } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LatLng } from '@capacitor/google-maps/dist/typings/definitions';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {defineCustomElements } from '@ionic/pwa-elements/loader'

import { PhotoService, UserPhoto } from '../../services/photo.service';

import { AlertController } from '@ionic/angular';

import { Router } from '@angular/router';

defineCustomElements(window);

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})


export class CreatePage implements OnInit {

  defaultlat:number = 13.781903599860783;
  defaultlng:number = 121.06918362277806;

  dormCreate:FormGroup

  constructor(private router: Router, public formBuilder: FormBuilder, public photoService: PhotoService, private httpClient: HttpClient, private alertController:AlertController){
    this.dormCreate = this.formBuilder.group({
      landlordID:['5'],
      dormname:[''],
      dormaddress:[''],
      dormlng:[''],
      dormlat:[''],
      dormutilities:[''],
      dormimages:['']
    })
  }

  async ngOnInit() {
    this.createMap()
  }

  async presentAlert(alertHeader:string, alertMessage:string, alertButtons?:any){
    let button = 'RETURN'
    if (alertButtons != null) button = alertButtons
    const alert = await this.alertController.create({
      header : alertHeader,
      message: alertMessage,
      buttons: [button]
    })

    await alert.present()
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

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  
  public onImageClick(photo: UserPhoto): void {
    const index = this.photoService.photos.indexOf(photo);
    if (index > -1) {
      this.photoService.photos.splice(index, 1);
    }
  }

  async dormCreateSubmit() {
    
    let bounds: LatLngBounds = await this.newMap.getMapBounds();
    let center: LatLng = bounds.center;

    this.dormCreate.patchValue({
      dormlat: center.lat.toString(),
      dormlng: center.lng.toString(),
      dormimages: this.photoService.getBase64Photos()
    })

    var data = (JSON.stringify(this.dormCreate.value))

    console.log(data)

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=UTF-8');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

    this.httpClient.post('https://dormpal.000webhostapp.com/createdorm.php', data, {headers: headers}).subscribe((response) => {
      if(response == 'c01') this.presentAlert("ERROR","Missing Parameters")
      if(response == 'c02') this.presentAlert("Success","Successfully Created Dorm Page")
    })
  }
}

