import { Injectable } from '@angular/core';

export interface WorkoutEntry {
  userName: string;
  workoutType: string;
  workoutMinutes: number;
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private localStorageKey = 'workoutEntries';
  private workouts: WorkoutEntry[] = [];

  constructor() { }

  addWorkout(workout: WorkoutEntry): void {
    const currentEntries = this.getWorkouts();
    currentEntries.push(workout);
    localStorage.setItem(this.localStorageKey, JSON.stringify(currentEntries));
  }

  getWorkouts(): WorkoutEntry[] {
    if (typeof localStorage !== 'undefined') {
      const storedEntries = localStorage.getItem(this.localStorageKey);
      return storedEntries ? JSON.parse(storedEntries) : [];
    } else {
      console.error('localStorage is not available.');
      return [];
    }
  }
  
  

  getEntries(): WorkoutEntry[] {
    const entriesString = localStorage.getItem(this.localStorageKey);
    if (entriesString) {
      return JSON.parse(entriesString);
    }
    return [];
  }

  clearAllWorkouts(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  
}
