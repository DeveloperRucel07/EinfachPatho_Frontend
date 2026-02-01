import { Component,} from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';




@Component({
  selector: 'app-header',
  imports: [ MatButtonModule, MatIconModule, RouterModule,],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})


export class Header {


}
