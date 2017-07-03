import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AccountManagementModule } from './account-management/account-management.module'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/page-notfound.component';
import { WelcomeComponent } from './home/welcome.component'
import { AboutComponent } from './about/about.component'
import { NewsModule } from './news/news.module'
import { LastNewsComponent } from './news/last-news/last.news.component'

import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { SharedService } from './shared/shared.service'
import { AccountManagementService } from './account-management/account-management.service'

import { HrService } from './hr-management/hr-management.service'
import { HrManagementModule } from './hr-management/hr-management.module'


import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AlertService } from './shared/alert/alert.service'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AccountManagementModule,
        NewsModule,
        HrManagementModule,
        FormsModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: 'news', component: LastNewsComponent, outlet: 'lastNews' }, // http://localhost:5000/#/welcome(lastNews:news)
            { path: 'about', component: AboutComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent },
        ], { useHash: true })
    ],
    declarations: [

        AppComponent,
        AboutComponent,
        WelcomeComponent,
        PageNotFoundComponent],
    providers: [
        HrService,
        AlertService,
        SharedService,
        AccountManagementService],
    bootstrap: [AppComponent]
})

export class AppModule { }

