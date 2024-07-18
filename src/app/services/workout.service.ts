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
  private workouts: WorkoutEntry[] = [
    {
      userName: 'John Doe',
      workoutType: 'Running',
      workoutMinutes: 30
    },
    {
      userName: 'John Doe',
      workoutType: 'Cycling',
      workoutMinutes: 45
    },
    {
      userName: 'Jane Smith',
      workoutType: 'Swimming',
      workoutMinutes: 60
    },
    {
      userName: 'Jane Smith',
      workoutType: 'Running',
      workoutMinutes: 20
    },
    {
      userName: 'Mike Johnson',
      workoutType: 'Yoga',
      workoutMinutes: 50
    },
    {
      userName: 'Mike Johnson',
      workoutType: 'Cycling',
      workoutMinutes: 40
    }
  ];

  constructor() { }

  addWorkout(workout: WorkoutEntry): void {
    const currentEntries = this.getWorkouts();
    currentEntries.push(workout);
    localStorage.setItem(this.localStorageKey, JSON.stringify(currentEntries));
  }

  getWorkouts(): WorkoutEntry[] {
    if (typeof localStorage !== 'undefined') {
      const storedEntries = localStorage.getItem(this.localStorageKey);
      return storedEntries ? JSON.parse(storedEntries) : this.workouts;
    } else {
      console.error('localStorage is not available.');
      return this.workouts;
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
