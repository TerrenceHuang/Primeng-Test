import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-recursive-page',
  templateUrl: './accordion-recursive-page.component.html',
  styleUrls: ['./accordion-recursive-page.component.css']
})
export class AccordionRecursivePageComponent implements OnInit {

    @Input() first: boolean;

    constructor() {
    }

    ngOnInit() {
      console.log(this.first);
    }

}
