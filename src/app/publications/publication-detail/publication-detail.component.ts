import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.scss']
})
export class PublicationDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //scroll top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
