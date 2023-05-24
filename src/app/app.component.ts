import { Component } from '@angular/core';
import { IBandeDessinee } from 'src/app/ibandedessinee';
//import { ApiBandeDessinee } from 'src/app/no-serv/apibandedessinee.service';
import { XkcdService } from './xkcd/xkcd.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'examen-ng';

}
