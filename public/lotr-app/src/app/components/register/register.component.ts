import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  users: User[];
  rePassword: String;

  TickClass1 = {
    'fa fa-exclamation': true,
    'fa fa-check': false
     };
  TickClass2 = {
    'fa fa-exclamation': true,
    'fa fa-check': false
      };

  constructor(private router: Router,private userService : UserService) {
    this.TickClass1 = {
    'fa fa-exclamation': true,
    'fa fa-check': false
     };

    this.TickClass2 = {
    'fa fa-exclamation': true,
    'fa fa-check': false
      };

   }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }

passTickClass1(minLengthError,pristine,text){

    if(pristine || text == ''){
      this.TickClass1 = {
        'fa fa-exclamation': true,
        'fa fa-check': false
         };
    }
    else if(minLengthError && !pristine){
      this.TickClass1 = {
        'fa fa-exclamation': true,
        'fa fa-check': false
         };
    }else{
      this.TickClass1 = {
        'fa fa-exclamation': false,
        'fa fa-check': true
         };
    }
    return(this.TickClass1);
  }

  passTickClass2(patternError,pristine,text){

        if(pristine || text == ''){
          this.TickClass1 = {
            'fa fa-exclamation': true,
            'fa fa-check': false
             };
        }
        else if(patternError && !pristine){
          this.TickClass1 = {
            'fa fa-exclamation': true,
            'fa fa-check': false
             };
        }else{
          this.TickClass1 = {
            'fa fa-exclamation': false,
            'fa fa-check': true
             };
        }
        return(this.TickClass1);
      }
    
      onSubmit(){
        if(this.user.password != this.rePassword){
            alert("passwrords don't match");
            return;
        }

        this.userService.addUser(this.user).subscribe(user => {
          console.log(user);
          this.router.navigateByUrl('/');
        });
        console.log("submitted");
      }
 
}
