import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef;

  handleUploadClick() {
    this.fileInput.nativeElement.click();
  }

  handleFileChange(event: any) {
    const selectedFile = event.target.files[0];
    console.log('Selected file:', selectedFile.name);

    // You can perform additional actions, such as uploading the file to a server.
  }

  constructor() { }

  ngOnInit() {
  }

}
