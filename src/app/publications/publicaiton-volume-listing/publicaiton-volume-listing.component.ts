import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaiton-volume-listing',
  templateUrl: './publicaiton-volume-listing.component.html',
  styleUrls: ['./publicaiton-volume-listing.component.scss']
})
export class PublicaitonVolumeListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //scroll top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
