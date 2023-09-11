import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Site } from 'src/app/model/site.Model';


@Component({
  selector: 'app-site-create',
  templateUrl: './site-create.component.html',
  styleUrls: ['./site-create.component.css']
})
export class SiteCreateComponent implements OnInit {


  @ViewChild('closeModalButton') closeModalButton: any;

  CreateSiteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }


  ngOnInit(): void {


    this.CreateSiteForm = this.formBuilder.group({

      Name: ['', [Validators.required]],
      Location: ['', [Validators.required]],
      Description: ['', [Validators.required]],

    })


  }

  SubmitForm(): void {

    if (this.CreateSiteForm.valid) {
      // Form is valid, you can access form values using this.myForm.value
      console.log('Reactive-Forms', this.CreateSiteForm.value);
      this.closeModalButton.nativeElement.click();
      this.CreateSiteForm.reset();
    }
    else {
      // Form is invalid, handle validation errors
    }

  }
}

