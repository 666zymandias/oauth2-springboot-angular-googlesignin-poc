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
  private resourceService = inject(ResourceService);

  message = '';

  ngOnInit(): void {
    this.resourceService.admin().subscribe(data => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.message = (data as any).message;
    },
      err => {
        console.log(err);
      });
  }
}
