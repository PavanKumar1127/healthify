# Healthify User Manual

## Introduction

Welcome to Healthify, your personal health tracking application built with Angular. This manual provides a comprehensive guide to using Healthify's features, handling edge cases, and troubleshooting common issues.

## Getting Started

To begin using Healthify:
1. Ensure you have Node.js installed on your system.
2. Clone the repository from GitHub.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install dependencies.
5. Run `ng serve` for a dev server.
6. Navigate to `http://localhost:4200/` in your web browser to access Healthify.

## Features

### 1. Adding a Workout

To add a new workout entry:
1. Click on the "Add Workout" button on the dashboard.
2. Fill out the required fields: workout type, duration, and calories burned.
3. Optionally, add additional details such as notes or date/time.
4. Click "Save" to add the workout.

#### Edge Cases Covered:
- **Validation**: Ensure all required fields are filled out correctly before saving.
- **Date/Time Handling**: Proper formatting and handling of date/time inputs.
- **Error Handling**: Clear messages for network errors or failed operations.

### 2. Viewing Workouts

To view existing workouts:
1. Navigate to the dashboard where your workouts are listed.
2. Workouts are displayed with details such as type, duration, calories, and date/time.

#### Edge Cases Covered:
- **Empty State**: Display a message when no workouts are available.
- **Security**: Ensure only authorized users can view their own workouts.

### 3. Searching and Filtering Workouts

To search or filter workouts:
1. Utilize the search bar to find workouts based on keywords (e.g., type of workout).
2. Use filters (e.g., date range) to narrow down displayed workouts.

#### Edge Cases Covered:
- **Complex Queries**: Handle complex search queries effectively.
- **Performance**: Optimize filtering for large datasets.

### 4. Pagination

To navigate through multiple workouts:
1. Navigate through pages using pagination controls.
2. Control the number of entries displayed per page.

#### Edge Cases Covered:
- **Boundary Conditions**: Proper handling at the edges of pagination limits.
- **User Experience**: Provide intuitive controls for navigating pages.

### 5. Future Development

For future releases, consider enhancing the application with batch editing or bulk delete options to improve user efficiency.

## Scenarios and Edge Cases

### Scenario 1: Adding a Workout
- **Scenario**: User adds a workout but forgets to enter the duration.
- **Edge Case Handling**: Display an error message indicating the required field and prevent saving until corrected.

### Scenario 2: Viewing Workouts
- **Scenario**: User has no workouts added yet.
- **Edge Case Handling**: Show a friendly message indicating no workouts found and provide guidance on how to add a new workout.

### Scenario 3: Editing a Workout
- **Scenario**: User tries to edit a workout that no longer exists (e.g., deleted by another session).
- **Edge Case Handling**: Notify the user that the workout is no longer available and refresh the list.

### Scenario 4: Searching and Filtering Workouts
- **Scenario**: User searches for workouts with a specific keyword that does not exist.
- **Edge Case Handling**: Inform the user that no matching workouts were found and provide suggestions for refining the search criteria.

## Troubleshooting

If you encounter any issues while using Healthify, consider the following troubleshooting steps:

- **Clear Browser Cache**: Sometimes, outdated cache can cause display or functionality issues.
- **Check Network Connection**: Ensure you have a stable internet connection to access Healthify.
- **Review Console Errors**: Check the browser console for any JavaScript errors that might provide clues to the issue.
