import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

acno=''
   pswd=''
   userDetails:any={
    1000:{acno:1000,username:'amal',password:123,balance:100000},
    1001:{acno:1001,username:'manu',password:123,balance:10000},
    1002:{acno:1000,username:'ananthu',password:123,balance:4000000},
    1003:{acno:1000,username:'sruthi',password:123,balance:800000},
   }

  constructor() { }
}
