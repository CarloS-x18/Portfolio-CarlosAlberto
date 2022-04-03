import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  form: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.minLength(8) ] ],
    email: [ '', [ Validators.required, Validators.pattern(this.emailPattern) ] ],
    tel: [ '', [ Validators.pattern('^[0-9+]{10,15}') ] ],
    message: [ '', [ Validators.required, Validators.minLength(15) ] ]
  });

  get themeDark() {
    return this.portfolioService.themeDark;
  }

  constructor( private portfolioService: PortfolioService,
               private fb: FormBuilder,
               private snackBar: MatSnackBar ) { }

  get emailErrorMsg(): string {
    const errors = this.form.get('email')?.errors;

    if( errors?.['required'] ) {
      return 'El correo es obligatorio.';
    } else if( errors?.['pattern'] ) {
      return 'Este correo no es valido, intenta con otro.'
    }

    return '';
  }

  errorField( field: string ) {
    return this.form.get( field )?.invalid
           && this.form.get( field )?.touched;
  }

  submitForm() {
    if( !this.form.valid ) {
      this.form.markAllAsTouched();
      return;
    }

    this.portfolioService.onSaveData( this.form.value );
    this.form.reset();

    this.showSnackbar('Tus datos se enviaron correctamente, yo me pongo en contacto contigo, Gracias 🙌');
  }

  showSnackbar( message: string ) {

    this.snackBar.open( message, 'Cerrar', {
      duration: 8000
    })

  }

}
