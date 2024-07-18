import { Component, OnInit } from '@angular/core';
import { WorkoutEntry, WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  searchTerm: string = '';
  filterType: string = '';
  availableWorkoutTypes: string[] = ['Running', 'Cycling', 'Swimming', 'Yoga', 'Weight Lifting'];
  itemsPerPage: number = 5;
  currentPage: number = 1;
  totalPages: number = 1;
  paginatedEntries: WorkoutEntry[] = [];

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let filteredEntries = this.workoutService.getWorkouts();

    if (this.searchTerm) {
      filteredEntries = filteredEntries.filter(entry =>
        entry.userName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.filterType) {
      filteredEntries = filteredEntries.filter(entry => entry.workoutType === this.filterType);
    }

    this.totalPages = Math.ceil(filteredEntries.length / this.itemsPerPage);

    this.paginateEntries(filteredEntries);
  }

  paginateEntries(entries: WorkoutEntry[]): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedEntries = entries.slice(startIndex, endIndex);
  }

  changePage(increment: number): void {
    this.currentPage += increment;
    this.applyFilters();
  }

  getNumberOfWorkouts(userName: string): number {
    return this.workoutService.getWorkouts().filter(entry => entry.userName === userName).length;
  }

  getTotalWorkoutMinutes(userName: string): number {
    return this.workoutService.getWorkouts().filter(entry => entry.userName === userName)
      .reduce((total, entry) => total + entry.workoutMinutes, 0);
  }
}
