import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { AddressComponent } from './address/address.component';

/* Modules */
import { ViewModule } from './view/view.module';
import { HttpClientModule } from '@angular/common/http';

/* Services */
import { TestService } from './test.service';
import { BlockListComponent } from './block-list/block-list.component';
import { BlockTileComponent } from './block-tile/block-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressComponent,
    BlockListComponent,
    BlockTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ViewModule,
    HttpClientModule,
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
