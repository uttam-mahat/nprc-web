import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //scroll top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
