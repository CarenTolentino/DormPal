import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
