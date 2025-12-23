import { AuthService } from './../../services/auth.service';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrl: './authorized.component.scss'
})
export class AuthorizedComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private tokenService = inject(TokenService);
  private router = inject(Router);


  code = '';

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      this.code = data["code"];
      const codeVerifier = this.tokenService.getVerifier();
      this.tokenService.deleteVerifier();
      this.getToken(this.code, codeVerifier);
    });
  }

  getToken(code: string, codeVerifier: string): void {
    this.authService.getToken(code, codeVerifier).subscribe(
      data => {
        this.tokenService.setTokens(data.access_token, data.refresh_token);
        this.router.navigate(['']);
      },
      err => {
        console.log(err);
      })
  }

}
