import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-password2',
  templateUrl: './password2.page.html',
  styleUrls: ['./password2.page.scss'],
})
export class Password2Page implements OnInit {
  public usuario: Usuario;
  constructor(
    private activeroute: ActivatedRoute
  , private router: Router) {

this.activeroute.queryParams.subscribe(params => {
  if (this.router.getCurrentNavigation().extras.state) { 
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
  } else {
    this.router.navigate(['/password1']);
  }
});
}

  public ngOnInit(): void {
  }

  public login(): void {

    this.router.navigate(['/login']);

  }

  public ingresar(): void {
    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    if(this.usuario.nombreUsuario==='atorres@duocuc.cl' && this.usuario.respuesta !='gato'){
      this.router.navigate(['/password-n'], navigationExtras)
    }
    else if(this.usuario.nombreUsuario==='avalenzuela@duocuc.cl' && this.usuario.respuesta !='juanito'){
      this.router.navigate(['/password-n'], navigationExtras)
    }
    else if(this.usuario.nombreUsuario==='cfuentes@duocuc.cl' && this.usuario.respuesta !='Valparaiso'){
      this.router.navigate(['/password-n'], navigationExtras)
    }
    else if(this.usuario.nombreUsuario==='atorres@duocuc.cl' && this.usuario.respuesta ==='gato'){
      this.router.navigate(['/password-y'], navigationExtras)
    }
    else if(this.usuario.nombreUsuario==='avalenzuela@duocuc.cl' && this.usuario.respuesta ==='juanito'){
      this.router.navigate(['/password-y'], navigationExtras)
    }
    else if(this.usuario.nombreUsuario==='cfuentes@duocuc.cl' && this.usuario.respuesta ==='Valparaiso'){
      this.router.navigate(['/password-y'], navigationExtras)
    }
  }
}
