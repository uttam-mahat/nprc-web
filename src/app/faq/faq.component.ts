import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //scroll top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
