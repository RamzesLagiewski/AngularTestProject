import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*<h2>{{ hero.name | uppercase }} Details</h2>
<div><span>id: </span>{{hero.id}}</div>
<div>
    <label>name:
        <input [(ngModel)]="hero.name" placeholder="name">
    </label>
</div> */
