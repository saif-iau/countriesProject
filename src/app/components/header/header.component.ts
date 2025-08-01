import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

 constructor(private router: Router) {}


  toggleDarkMode() {
  document.body.classList.toggle('dark');
}
  goBack() {
  this.router.navigate(['/']);
}
}
