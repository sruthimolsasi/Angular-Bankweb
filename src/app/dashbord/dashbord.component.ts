import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  
  user=''

  // acno=''
  // pswd=''
  // damount=''

  // acno1=''
  // pswd1=''
  // wamount=''
   acnum:any    //for parent child data transfer

  dashbordForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    damount:['',[Validators.required,Validators.pattern('[0-9]+')]],

    acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    wamount:['',[Validators.required,Validators.pattern('[0-9]+')]]
    }) 
  
  constructor(private fb:FormBuilder,private ds:DataService,private router:Router ) 
   {
       this.user=this.ds.currentuser
       

    }

  ngOnInit(): void {

    if(!localStorage.getItem('currentacno'))  //after logout the page will not see when pressing the back arrow
    {
      alert('please login first')
      this.router.navigateByUrl('')   //redirect to login page
    }
    
    
  }

  deposit()
  {
     var acno=this.dashbordForm.value.acno
     var pswd=this.dashbordForm.value.pswd
     var damount=this.dashbordForm.value.damount    
     const result=this.ds.deposit(acno,pswd,damount)

     if(result)             //where result is true in if case
     {
       alert(`${damount}is creadited,new balance is ${result}`)
     }
  }
  withdow()
  {
      var acno1=this.dashbordForm.value.acno1
      var pswd1=this.dashbordForm.value.pswd1
      var wamount=this.dashbordForm.value.wamount
      const result=this.ds.withdrow(acno1,pswd1,wamount)
      if(result)
      {
         alert(`${wamount} is withdrowed, new balance is ${result}`)
        
       }

  }
  logout()
  {
    this.router.navigateByUrl('') //redirect to login page
    localStorage.removeItem('currentuser')  //remove current userid from local storage
    localStorage.removeItem('currentacno')  //remove current useracno from local storage

  }
  deleteconfirm()
  {
    this.acnum=JSON.parse(localStorage.getItem('currentacno') || '')
  }


}
