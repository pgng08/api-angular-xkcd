import { Component, OnInit } from '@angular/core';
import { XkcdService } from '../xkcd/xkcd.service';
import { IBandeDessinee } from 'src/app/ibandedessinee';
import { AppComponent } from '../app.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//import { ApiBandeDessinee } from 'src/app/no-serv/apibandedessinee.service';

@Component({
  selector: 'app-bande-dessiner',
  templateUrl: './bande-dessiner.component.html',
  styleUrls: ['./bande-dessiner.component.scss'],
})

//classe BandeDessinerComponent
export class BandeDessinerComponent implements OnInit {
  uneBD: IBandeDessinee = {};
  numDerniereBD: any;
  numFormControl: FormControl;


  constructor(public xkcd: XkcdService) {
    this.numFormControl = new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(this.numDerniereBD),
    ]);
  }

  ngOnInit(): void {
    this.xkcd.getDerniereBD().subscribe((data) => {
      this.uneBD = data;
      this.numDerniereBD = this.uneBD.num;
      this.numFormControl.setValidators([
        Validators.required,
        Validators.min(1),
        Validators.max(this.numDerniereBD),
      ]);
      //console.log(this.uneBD.num);
    });
  }

  /**
   * Fonction du bouton qui prende une BD par son ID/num
   * @param num
   */
  btnSoumettre(num: any) {
    console.log('click btnSoumettre');

    if (this.numFormControl.valid) {
      this.xkcd.getUneBD(num).subscribe((data) => {
        this.uneBD = data;
        console.log(data);
      });
    } else {
      this.numFormControl.markAsTouched();
    }
  }

  /**
   * Fonction du bouton qui prend une BD aleatoire
   */
  btnAleatoire() {
    console.log('click btnAleatoire');

    this.xkcd.getAleatoireBD(this.numDerniereBD).subscribe((data) => {
      this.uneBD = data;
      console.log(this.uneBD);
    });
  }

  /**
   * Fonction du bouton qui prend la derniere BD
   */
  btnDerniere() {
    console.log('click btnDerniere');
    this.xkcd.getDerniereBD().subscribe((data) => {
      this.uneBD = data;

      console.log(data);
    });
  }
}
