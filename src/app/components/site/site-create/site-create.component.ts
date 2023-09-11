import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
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
  SiteNameManualRequered: boolean = false;

  constructor(private formBuilder: FormBuilder, private renderer: Renderer2) {

  }


  ngOnInit(): void {


    this.CreateSiteForm = this.formBuilder.group({

      Name: [null, [Validators.required]],
      Location: ['', [Validators.required]],
      Description: ['', [Validators.required]],

    })


  }

  SubmitForm(): void {
    this.SiteNameManualRequered = false;

    if (this.CreateSiteForm.valid) {
      // Form is valid, you can access form values using this.myForm.value

      this.closeModalButton.nativeElement.click();

    }
    else {
      // Form is invalid, handle validation errors
   /*    console.log("this.CreateSiteForm.value.Name", this.CreateSiteForm.get('Name')?.value)
      if (this.CreateSiteForm.get('Name')?.value == null || this.CreateSiteForm.get('Name')?.value == '') {

        // this.SiteNameManualRequered = true;

      } */

      alert("All the fields are requered");
      /*       for (const controlName in this.CreateSiteForm) {
              const element = document.getElementById(controlName);
      
              if (element) {
      
                this.renderer.addClass(element, 'invalid-field')
              }
            } */
    }

  }


  onCloseModal(): void {
    this.CreateSiteForm.reset();
  }
}

