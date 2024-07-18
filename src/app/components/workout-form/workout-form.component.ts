import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WorkoutEntry, WorkoutService } from '../../services/workout.service';
import { WorkoutListComponent } from '../workout-list/workout-list.component';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent implements OnInit {
  @ViewChild(WorkoutListComponent) workoutListComponent!: WorkoutListComponent;

  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number | null = null;
  availableWorkoutTypes: string[] = ['Running', 'Cycling', 'Swimming', 'Yoga', 'Weight Lifting'];
  errorMessage: string = '';

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void { }

  onSubmit(form: NgForm): void {
    console.log('Form submitted'); // Log to check if method is called
    this.errorMessage = '';

    if (!this.userName || !this.workoutType || this.workoutMinutes === null) {
      console.log('Validation failed: Missing fields'); // Log validation failure
      this.errorMessage = 'Please fill out all fields before adding a workout.';
      return;
    }
    if (this.workoutMinutes <= 0) {
      console.log('Validation failed: Invalid workout minutes'); // Log validation failure
      this.errorMessage = 'Please enter a valid workout time greater than 0.';
      return;
    }
    if (form.valid) {
      const workoutEntry: WorkoutEntry = {
        userName: this.userName,
        workoutType: this.workoutType,
        workoutMinutes: this.workoutMinutes
      };

      console.log('Adding workout entry:', workoutEntry); // Log workout entry
      this.workoutService.addWorkout(workoutEntry); // Add entry to local storage
      this.workoutListComponent.applyFilters();
      form.resetForm(); // Reset form
      this.userName = '';
      this.workoutType = '';
      this.workoutMinutes = null;
      console.log('Form reset'); // Log form reset
    }
  }
}
