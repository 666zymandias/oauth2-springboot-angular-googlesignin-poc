import { Component, inject, OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  private readonly resourceService = inject(ResourceService);

  message = '';

  ngOnInit(): void {
    this.resourceService.admin().subscribe({
      next: (data) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.message = (data as any).message;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
