import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';



@Injectable({
  providedIn: 'root'
})

export class userService {
   static UID:string = "no user"
   static fname:string = "no user"
   static lname:string = "no user"
   static number:string = "no user"
   static usertype:string = "no user"

  public static pushData(data: userData){
    userService.UID = data.UID
    userService.fname = data.fname
    userService.lname = data.lname
    userService.usertype = data.usertype
  }

}


export interface userData {
  UID: string,
  fname: string,
  lname: string,
  usertype: string
}