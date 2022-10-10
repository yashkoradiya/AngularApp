import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './MyComponent';
import { ForEachComponent } from './for-each/for-each.component';
import { IfExampleComponent } from './if-example/if-example.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDirective } from './CustomDirective';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { CustomSortPipe } from './sort.pipe';
import { MyServiceComponent } from './my-service/my-service.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HttpClientModule } from '@angular/common/http';

import { PostExampleComponent } from './post-example/post-example.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyFormReactiveComponent } from './my-form-reactive/my-form-reactive.component';
import { MyModule } from './MyModule';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPostComponent } from './user-post/user-post.component';


@NgModule({
  declarations: [
    AppComponent, MyComponent, ForEachComponent, IfExampleComponent,CustomDirective ,CustomSortPipe, MyServiceComponent, EmployeeDetailsComponent, PostExampleComponent,PipeexampleComponent, MyFormComponent, MyFormReactiveComponent, UserDetailsComponent, UserPostComponent,
  ],
  imports: [
    MyModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
 
    
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
