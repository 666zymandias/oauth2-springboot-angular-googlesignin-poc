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
  private resourceService = inject(ResourceService);


  message = '';

  ngOnInit(): void {
    this.resourceService.user().subscribe(data => {
      this.message = data.message;
    },
      err => {
        console.log(err);
      });
  }

}
