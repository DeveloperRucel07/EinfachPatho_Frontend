import { Component, inject, ChangeDetectionStrategy} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Sidebar } from "../sidebar/sidebar";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FormLogin } from "../../components/form-login/form-login";
import { FormSignup } from "../../components/form-signup/form-signup";



@Component({
  selector: 'app-header',
  imports: [Sidebar, MatButtonModule, MatIconModule, RouterModule, MatDialogModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})


export class Header {

  protected dialog = inject(MatDialog);

  openDialogLogin() {
    this.dialog.open(FormLogin, {
      width: '400px',
    });
  }

  openDialogSignup() {
    this.dialog.open(FormSignup, {
      width: '500px',
    });
  }

}
