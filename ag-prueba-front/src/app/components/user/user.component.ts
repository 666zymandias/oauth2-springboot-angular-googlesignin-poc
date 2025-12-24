import { Component, OnInit, inject } from '@angular/core';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  private readonly resourceService = inject(ResourceService);


  message = '';

  ngOnInit(): void {
    this.resourceService.user().subscribe({
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
