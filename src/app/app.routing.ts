import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PublicationComponent } from './publications/publication/publication.component';
import { FaqComponent } from './faq/faq.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { PublicaitonVolumeListingComponent } from './publications/publicaiton-volume-listing/publicaiton-volume-listing.component';
import { PublicationDetailComponent } from './publications/publication-detail/publication-detail.component';
import { ESubmissionComponent } from './e-submission/e-submission.component';



const router: Routes = [
    { path: '', component: IndexComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'publications', component: PublicationComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'join-us', component: JoinUsComponent },
    { path: 'publications-volume-listing', component: PublicaitonVolumeListingComponent },
    { path: 'publications-detail', component: PublicationDetailComponent },
    { path: 'e-submission', component: ESubmissionComponent },

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });