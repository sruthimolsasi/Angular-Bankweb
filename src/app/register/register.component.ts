import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

uname=''
acno=''
pswd=''

  constructor(private ds:DataService,private router:Router) { }   //service call as ds and call router

  ngOnInit(): void {
  }

  register()
  {
     var uname=this.uname
     var acno=this.acno
     var pswd=this.pswd
    const result=this.ds.register(acno,uname,pswd)
       if(result)
       {
        
        alert('registerd succefully')
        this.router.navigateByUrl('')
       }
      else
      {
        alert('user already exist')
      }
    // let userDetails=this.ds.userDetails //calling database
    // alert('registered')
  }
}
