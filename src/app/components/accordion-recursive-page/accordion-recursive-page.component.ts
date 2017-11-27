import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-recursive-page',
  templateUrl: './accordion-recursive-page.component.html',
  styleUrls: ['./accordion-recursive-page.component.css']
})
export class AccordionRecursivePageComponent implements OnInit {

    @Input() first: boolean;
    @Input() data: number;
    @Output() dataChange = new EventEmitter<Object>();

    constructor() {
    }

    ngOnInit() {
      console.log(this.first);
    }

}
