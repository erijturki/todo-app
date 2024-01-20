import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoTemplateDrivenFormComponent } from './todo-template-driven-form/todo-template-driven-form.component'
import { RouterModule } from '@angular/router';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    
    AppComponent,
    ComponentNameComponent,
    HeadBarComponent,
    TodoReactiveFormComponent,
    TodoTemplateDrivenFormComponent,
    TodoListComponent,
    TodoUpdateComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{path:'',component:TodoListComponent},
    {path:'signin',component:TodoReactiveFormComponent}])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
