import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {
  private router = inject(Router);
  private tokenService = inject(TokenService);


  ngOnInit(): void {
    this.tokenService.clear();
    this.router.navigate(['']);
  }

}
