import { Component } from '@angular/core';
import { Navegation } from './model/navagation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csi';
  csI_navagation: Navegation[] = [];

  constructor() {

    this.csI_navagation.push(new Navegation("beneficiary-index", "Beneficiary"));
    this.csI_navagation.push(new Navegation("household-index", "HouseHold"));
    this.csI_navagation.push(new Navegation("partner-index", "partner"));
    this.csI_navagation.push(new Navegation("site-index", "Site"));

  }


  onLinkClick(btnName: string): void {
    console.log("btnClicked", btnName);

    this.csI_navagation.forEach((value) => {

      // clean activeCss
      value.activeCss ="";

      // add active style
      if( value.name == btnName){
        value.activeCss ="background-color: black;";
      }

    })
  }


}


/* <li style="background-color: black;"><a routerLink="/beneficiary-index"> Beneficiary</a></li>
      <li><a routerLink="/household-index"> HouseHold</a></li>
      <li><a routerLink="/partner-index"> partner</a></li>
      <li><a routerLink="/site-index"> Site</a></li>
 */
