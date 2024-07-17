// workout-form.component.ts

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WorkoutEntry, WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent implements OnInit {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;
  availableWorkoutTypes: string[] = ['Running', 'Cycling', 'Swimming', 'Yoga', 'Weight Lifting'];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const workoutEntry: WorkoutEntry = {
        userName: this.userName,
        workoutType: this.workoutType,
        workoutMinutes: this.workoutMinutes
      };
      
      this.workoutService.addWorkout(workoutEntry); // Add entry to local storage

      form.reset();
    }
  }
}
