import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreService } from './store/store.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { messageReducer, profileReducer } from './store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, ProfileComponent, MessageComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    StoreDevtoolsModule,
    StoreModule.forRoot({
      profileState: profileReducer,
      messageState: messageReducer,
    }),
    HttpClientModule,
  ],
  providers: [StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
