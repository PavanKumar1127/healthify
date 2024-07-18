import { Component } from '@angular/core';
import { WorkoutService } from './services/workout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'healthify';
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;

  constructor(private workoutService: WorkoutService) { }

  onSubmit(): void {
    if (this.userName && this.workoutType && this.workoutMinutes > 0) {
      const workout = {
        userName: this.userName,
        workoutType: this.workoutType,
        workoutMinutes: this.workoutMinutes
      };
      this.workoutService.addWorkout(workout);
      this.resetForm();
    } else {
      console.error('Validation failed: Please fill out all fields and enter valid workout minutes.');
    }
  }

  resetForm(): void {
    this.userName = '';
    this.workoutType = '';
    this.workoutMinutes = 0;
  }
}
