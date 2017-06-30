import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { LastNewsComponent } from './last-news/last.news.component'

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations:[
        LastNewsComponent
    ],
    exports:[
        LastNewsComponent
    ]
})

export class NewsModule{

}