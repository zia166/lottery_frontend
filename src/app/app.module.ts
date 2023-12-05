
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerformanceListComponent } from './performance-list/performance-list.component';
import { WinnersSelectionComponent } from './winners-selection/winners-selection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LotteryEntriesComponent } from './lottery-entries/lottery-entries.component';

@NgModule({
  declarations: [
    AppComponent,
    PerformanceListComponent,
    WinnersSelectionComponent,
    LotteryEntriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
