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
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly authService = inject(AuthService);
  private readonly tokenService = inject(TokenService);
  private readonly router = inject(Router);


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
    this.authService.getToken(code, codeVerifier).subscribe({
      next: (data) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response = data as any;
        this.tokenService.setTokens(response.access_token, response.refresh_token);
        this.router.navigate(['']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
