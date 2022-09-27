import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-password1',
  templateUrl: './password1.page.html',
  styleUrls: ['./password1.page.scss'],
})
export class Password1Page implements OnInit {
  public usuario: Usuario;
  constructor(private router: Router, private toastController: ToastController) {
    this.usuario = new Usuario();
    this.usuario.nombreUsuario = '';
    this.usuario.password = '';
  }

  public ngOnInit(): void {
  }

  public validarNombreUsuario(usuario: Usuario): boolean {

    const mensajeError = usuario.validarNombreUsuario();

    if (mensajeError) {
      this.mostrarMensaje(mensajeError);
      return false;
    }

    return true;
  }

  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }

  public ingresar(): void {

    if(!this.validarNombreUsuario(this.usuario)) {
      return;
    }

    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    this.router.navigate(['/password2'], navigationExtras);
  }

  public login(): void {

    this.router.navigate(['/login']);

  }
}
