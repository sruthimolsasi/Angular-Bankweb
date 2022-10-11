import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  @Input()item:string | undefined          //values input from the parrent component ,item--name

  constructor() { }

  ngOnInit(): void {
  }

}
