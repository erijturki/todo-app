import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from '../service-name.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent {

  constructor(private formBuilder : FormBuilder,
              private authService : UserService,
              private router: Router){}

    authForm=this.formBuilder.nonNullable.group(
      {
      login:['',Validators.required],
      password:['',Validators.required]
    }
    )
  
    checkLogin(){
      if(this.authForm.value.login &&this.authForm.value.password)
      this.authService.getUser(this.authForm.value.login,this.authForm.value.password).
           subscribe(
            result=>{
              if(result.length){
              localStorage.setItem("token", result[0].token)
              this.router.navigateByUrl('')
            }
              else
              alert('login ou mot de passe incorrects!')
            }
           )
    }
}
