import { Component, ViewChild } from '@angular/core';
import { WorkoutService } from './services/workout.service';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;

  constructor(private workoutService: WorkoutService) {}

  onSubmit(): void {
    const workout = {
      userName: this.userName,
      workoutType: this.workoutType,
      workoutMinutes: this.workoutMinutes
    };
    this.workoutService.addWorkout(workout);
    
    this.resetForm();
  }

  resetForm(): void {
    this.userName = '';
    this.workoutType = '';
    this.workoutMinutes = 0;
  }
}
