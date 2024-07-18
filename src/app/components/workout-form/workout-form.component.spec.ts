import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { WorkoutFormComponent } from './workout-form.component';
import { WorkoutService } from '../../services/workout.service';
import { WorkoutListComponent } from '../workout-list/workout-list.component';
import { WorkoutEntry } from '../../services/workout.service';

describe('WorkoutFormComponent', () => {
  let component: WorkoutFormComponent;
  let fixture: ComponentFixture<WorkoutFormComponent>;
  let workoutService: WorkoutService;
  let workoutListComponent: WorkoutListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutFormComponent ],
      imports: [ FormsModule ],
      providers: [ WorkoutService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutFormComponent);
    component = fixture.componentInstance;
    workoutService = TestBed.inject(WorkoutService);
    workoutListComponent = TestBed.createComponent(WorkoutListComponent).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset form on successful submission', () => {
    spyOn(workoutService, 'addWorkout');
    spyOn(workoutListComponent, 'applyFilters');
    const form: NgForm = { valid: true, resetForm: () => {} } as NgForm;

    component.userName = 'Test User';
    component.workoutType = 'Running';
    component.workoutMinutes = 30;

    component.onSubmit(form);

    expect(workoutService.addWorkout).toHaveBeenCalled();
    expect(workoutListComponent.applyFilters).toHaveBeenCalled();
    expect(component.userName).toBe('');
    expect(component.workoutType).toBe('');
    expect(component.workoutMinutes).toBe(0);
    expect(component.errorMessage).toBe('');
  });

  it('should handle validation errors', () => {
    spyOn(console, 'log');
    const form: NgForm = { valid: false } as NgForm;

    component.onSubmit(form);

    expect(console.log).toHaveBeenCalledWith('Validation failed: Missing fields');
    expect(component.errorMessage).toBe('Please fill out all fields before adding a workout.');
  });
});
