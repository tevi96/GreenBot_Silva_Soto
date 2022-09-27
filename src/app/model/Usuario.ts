export class Usuario {
  public nombreUsuario = '';
  public password = '';
  public nombrePersona = '';
  public respuesta = '';

  public validarNombreUsuario(): string {
    if (this.nombreUsuario.trim() === '') {
      return 'El campo no puede estar vacio.';
    }
    if (this.nombreUsuario.length < 3 || this.nombreUsuario.length > 25) {
      return 'El nombre de usuario debe tener entre 3 y 25 caracteres.';
    }
    
    if (this.nombreUsuario !== 'atorres@duocuc.cl' &&
      this.nombreUsuario !== 'avalenzuela@duocuc.cl' && 
      this.nombreUsuario !== 'cfuentes@duocuc.cl') {
      return 'No se ha encontrado el usuario';
    }
    return '';
  }

  public validarPassword(): string {
    if (this.password.trim() === '') {
      return 'El campo no puede estar vacío.';
    }
    //for(let i = 0; i < this.password.length; i++) {
    //  if ('0123456789'.indexOf(this.password.charAt(i)) === -1) {
    //    return 'La contraseña debe ser numérica.';
    //  }
    //}
    if (this.password.length !== 4) {
      return 'La contraseña debe contener 4 dígitos numéricos.';
    }
    if (this.nombreUsuario==='atorres@duocuc.cl' && this.password !=='1234'){
      return 'Contraseña incorrecta'
    }
    if (this.nombreUsuario==='avalenzuela@duocuc.cl' && this.password !=='qwer'){
      return 'Contraseña incorrecta'
    }
    if (this.nombreUsuario==='cfuentes@duocuc.cl' && this.password !=='asdf'){
      return 'Contraseña incorrecta'
    }
    return '';
  }

  public validarUsuario(): string {
    return this.validarNombreUsuario()
      || this.validarPassword();
  }

  public asignarNombre(): string{
    if(this.nombreUsuario==='atorres@duocuc.cl' && this.password==='1234'){
      return 'Ana Torres Leiva';
    }
    else if(this.nombreUsuario==='avalenzuela@duocuc.cl' && this.password==='qwer'){
      return 'Alberto Valenzuela Nuñez';
    }
    else if(this.nombreUsuario==='cfuentes@duocuc.cl' && this.password==='asdf'){
      return 'Carla Fuentes González';
    }
    return '';
  }
}
