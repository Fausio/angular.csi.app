import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-site-create',
  templateUrl: './site-create.component.html',
  styleUrls: ['./site-create.component.css']
})
export class SiteCreateComponent {

  @ViewChild('closeModalButton') closeModalButton: any;

  SubmitForm(): void {
    this.closeModalButton.nativeElement.click();
  }

}
