import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicaitonVolumeListingComponent } from './publicaiton-volume-listing.component';

describe('PublicaitonVolumeListingComponent', () => {
  let component: PublicaitonVolumeListingComponent;
  let fixture: ComponentFixture<PublicaitonVolumeListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicaitonVolumeListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicaitonVolumeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
