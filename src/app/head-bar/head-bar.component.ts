import { Component } from '@angular/core';
import { TodoService } from '../service-name.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent {
 
  constructor(public todoService:TodoService,
               private router:Router){}

  signOut(){
    localStorage.removeItem("token")
    this.router.navigateByUrl('/signin')  }
}
