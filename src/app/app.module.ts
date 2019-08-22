import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PublicationComponent } from './publications/publication/publication.component';
import { FaqComponent } from './faq/faq.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { PublicationDetailComponent } from './publications/publication-detail/publication-detail.component';
import { PublicaitonVolumeListingComponent } from './publications/publicaiton-volume-listing/publicaiton-volume-listing.component';
import { ESubmissionComponent } from './e-submission/e-submission.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    PublicationComponent,
    FaqComponent,
    JoinUsComponent,
    PublicationDetailComponent,
    PublicaitonVolumeListingComponent,
    ESubmissionComponent
  ],
  imports: [
    routes,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
