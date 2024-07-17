import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { WorkoutService } from './services/workout.service';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutFormComponent,
    WorkoutListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
