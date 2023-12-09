import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
import { userService } from 'src/app/services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  cards:any = []
  fname:string

  @ViewChild('fileInput') fileInput!: ElementRef;

  handleUploadClick() {
    this.fileInput.nativeElement.click();
  }

  handleFileChange(event: any) {
    const selectedFile = event.target.files[0];
    console.log('Selected file:', selectedFile.name);

    // You can perform additional actions, such as uploading the file to a server.
  }

  constructor(private router: Router, private httpClient: HttpClient) { }

  ionViewDidEnter() {
    if (userService.UID == "no user") this.router.navigate(['login'])
    else{
      this.fname = userService.fname

      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json; charset=UTF-8');
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

      this.httpClient.post('https://dormpal.000webhostapp.com/getdormlist.php', ('{"UID": ' + userService.UID + '}'),{headers: headers}).subscribe((response) => {
        console.log(response)
        this.cards = response
      })
    
       
    }
  }

  getImgUrl (card: any): string {
    return "test.png" 
  }


  cardClicked(id: string){
    console.log("CARD CLICKED: " + id)
  }

  goToCreate() {
    this.router.navigate(['create'])
  }

  goToLLProfile() {
    this.router.navigate(['llprofile'])
  }

  goToDashboard() {
    this.router.navigate(['dashboard'])
  }

  ngOnInit() {
  }

}
