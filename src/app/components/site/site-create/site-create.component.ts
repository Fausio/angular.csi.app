import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Site } from 'src/app/model/site.Model';


@Component({
  selector: 'app-site-create',
  templateUrl: './site-create.component.html',
  styleUrls: ['./site-create.component.css']
})
export class SiteCreateComponent implements OnInit {


  @ViewChild('closeModalButton') closeModalButton: any;

  CreateSiteForm: FormGroup;


  ngOnInit(): void {

    this.CreateSiteForm = new FormGroup({
      'SiteData': new FormGroup({
        'Name': new FormControl('', Validators.required),
        'Location': new FormControl('', Validators.required),
        'Description': new FormControl('', Validators.required),

      })
    })

  }

  SubmitForm(): void {
    this.closeModalButton.nativeElement.click();
  }

}
