import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-password-y',
  templateUrl: './password-y.page.html',
  styleUrls: ['./password-y.page.scss'],
})
export class PasswordYPage implements OnInit {
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
  ngOnInit() {
  }

  public login(): void {

    this.router.navigate(['/login']);

  }
}
