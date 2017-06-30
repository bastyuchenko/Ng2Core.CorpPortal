import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { StarComponent } from './star.component'
import { CounterComponent } from './counter/counter.component'
import { LoaderComponent } from './loader/loader.component'
import { ToggleComponent } from './toggle/toggle.component'
import { AlertHelperComponent } from './alert/alert.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [
        StarComponent,
        CounterComponent,
        LoaderComponent,
        ToggleComponent,
        AlertHelperComponent
    ],
    exports: [
        StarComponent,
        CounterComponent,
        LoaderComponent,
        ToggleComponent,
        AlertHelperComponent
    ]
})

export class SharedModule {
}