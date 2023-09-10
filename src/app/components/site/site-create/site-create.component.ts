import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-site-create',
  templateUrl: './site-create.component.html',
  styleUrls: ['./site-create.component.css']
})
export class SiteCreateComponent {

  @ViewChild('staticBackdrop') staticBackdrop:  any;

  // Function to close the modal
  closeModal() {
    this.staticBackdrop.nativeElement.modal('hide');
  }

}
