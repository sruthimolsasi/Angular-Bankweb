import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  @Input()item:string | undefined        //values input from the parent component ,item--name

  @Output() onCancel=new EventEmitter()
  // @Output() onCancel=new EventEmitter    //eventemitter object created 
  

  constructor() { }

  ngOnInit(): void {
  }
 
  cancel()
  {
    this.onCancel.emit()
  }
}
