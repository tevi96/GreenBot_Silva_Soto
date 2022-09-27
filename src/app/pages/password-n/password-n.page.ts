import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-password-n',
  templateUrl: './password-n.page.html',
  styleUrls: ['./password-n.page.scss'],
})
export class PasswordNPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public login(): void {

    this.router.navigate(['/login']);

  }
}
