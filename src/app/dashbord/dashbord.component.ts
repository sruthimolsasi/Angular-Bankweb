import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  
  user=''

  acno=''
  pswd=''
  damount=''

  acno1=''
  pswd1=''
  wamount=''

  
  constructor(private ds:DataService) 
   {
       this.user=this.ds.currentuser
       

    }

  ngOnInit(): void {
  }

  deposit()
  {
     var acno=this.acno
     var pswd=this.pswd
     var damount=this.damount
     const result=this.ds.deposit(acno,pswd,damount)

     if(result)             //where result is true in if case
     {
       alert(`${damount}is creadited,new balance is ${result}`)
     }
  }
  withdow()
  {
      var acno1=this.acno1
      var pswd1=this.pswd1
      var wamount=this.wamount
      const result=this.ds.withdrow(acno1,pswd1,wamount)
      if(result)
      {
         alert(`${wamount} is withdrowed, new balance is ${result}`)
        
       }

  }


}
