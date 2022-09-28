import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   aim='My perfect banking patner'
   acnt='Enter your account number'
   
     
  
   acno=''
   pswd=''
   userDetails:any={
    1000:{acno:1000,username:'amal',password:123,balance:100000},
    1001:{acno:1001,username:'manu',password:123,balance:10000},
    1002:{acno:1000,username:'ananthu',password:123,balance:4000000},
    1003:{acno:1000,username:'sruthi',password:123,balance:800000},
   }


  constructor( private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
                        
  login(){
     var acnum=this.acno
     var pswd= this.pswd
    
    const result=this.ds.login(acnum,pswd)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashbord')
    }

    //  let userDetails=this.userDetails
    //  if (acnum in userDetails)
    //  {
    //    if(pswd==userDetails[acnum]['password']){
    //      alert('login success')
    //      //redireciton
    //          this.router.navigateByUrl('dashbord')
    //     }
    //     else {
    //     alert('incorrect password')
    //     }
    // }
    // else{
    //   alert('user not exist or incorrect password')
    }
    
  }

 
  // acnochange(event:any)
  // {
  //    this.acno=event.target.value   //access datas from console
  //    console.log(this.acno);
  // }
  // pswdchange(event:any)
  // {
  //   this.pswd=event.target.value
  //   console.log(this.pswd)
  // }
                                      // in the case of #
   //-----------------------------------------------
//   login( a:any,b:any){
//     // console.log(a.value)
//     // console.log(b.value)

//     var acnum=a.value
//     var pswd=b.value

//     let userDetails=this.userDetails
//     if (acnum in userDetails)
//     {
//       if(pswd==userDetails[acnum]['password']){
//         alert('login success')
//        }
//        else {
//        alert('incorrect password')
//        }
//    }
//    else{
//      alert('user not exist or incorrect password')
//    }
   
//  }
  

// }
