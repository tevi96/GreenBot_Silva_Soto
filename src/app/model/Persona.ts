import { Usuario } from './Usuario';

export class Persona {
  public nombre = '';
  public apellido = '';
  public fechaNacimiento = new Date();
  public nombreUsuario: Usuario = new Usuario();

  constructor() {
    this.fechaNacimiento = null;
  }


  public setNombre() {
    if(this.nombreUsuario.nombreUsuario==='atorres@duocuc.cl'){
      this.nombre='Ana Torres'
    }
  }
}
