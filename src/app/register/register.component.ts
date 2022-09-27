import { Component, OnInit } from '@angular/core';
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

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  register()
  {
     var uname=this.uname
     var acno=this.acno
     var pswd=this.pswd

    let userDetails=this.ds.userDetails
    // alert('registered')
  }
}
