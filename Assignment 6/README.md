# Angular Form Validation Project - Assignment 6

## Project Overview
This is an Angular application that implements a subscription form with comprehensive validation and error handling. The form includes email validation, subscription plan selection, and password field with real-time feedback to the user.

---

## Project Instructions

### Form Requirements

The form must contain the following elements:

#### 1. **Mail Address Field**
   - **Requirement:** Should not be empty
   - **Validation:** Must be a valid email address format
   - **Type:** Text input with type "email"
   - **Behavior:** Display error message if invalid or empty

#### 2. **Subscription Dropdown**
   - **Requirement:** Allows user to select from three subscription options
   - **Options Available:**
     - Basic
     - Advanced
     - Pro
   - **Default Value:** "Advanced" must be set as the default selection
   - **Behavior:** Display error message if no selection is made

#### 3. **Password Field**
   - **Requirement:** Should not be empty
   - **Type:** Password input (text hidden)
   - **Validation:** Required field validation
   - **Behavior:** Display error message if empty

#### 4. **Submit Button**
   - **Functionality:** Submit the form when clicked
   - **Behavior:** Button should be disabled if form is invalid after submission attempt
   - **Action:** Print the entire form value to browser console

#### 5. **Validation Error Messages**
   - **General Warning:** Display a warning message if the form is invalid AND has been touched by the user
   - **Field-Specific Warnings:** Display individual error messages below each input field if it's invalid
   - **Error Messages:**
     - Email: "Email address is required" / "Please enter a valid email address"
     - Password: "Password is required"
     - Subscription: "Please select a subscription"

#### 6. **Form Submission**
   - **Console Output:** Upon successful form submission, print the form values to the browser console
   - **Optional:** Display the submitted form data in the template
   - **Success Message:** Show a success alert confirming the form was submitted

#### 7. **Form Display**
   - **Additional Info:** Display form status information (Valid, Touched, Dirty) for debugging purposes
   - **Styling:** Professional, clean design with responsive layout
   - **Visual Feedback:** Clear indication of invalid fields with red borders and error messages

---

## Project Structure

```
Assignment 6/
├── src/
│   ├── app/
│   │   ├── app.component.ts          # Main component logic
│   │   ├── app.component.html        # Component template with form
│   │   └── app.component.css         # Component styling
│   ├── index.html                    # Root HTML file
│   ├── main.ts                       # Application bootstrap
│   └── styles.css                    # Global styles
├── angular.json                      # Angular CLI configuration
├── package.json                      # Project dependencies
├── tsconfig.json                     # TypeScript configuration
├── tsconfig.app.json                 # TypeScript app configuration
└── README.md                         # This file
```

---

## Installation & Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm (Node Package Manager)
- Angular CLI (optional but recommended)

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd "Assignment 6"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:4200`

### Alternative Commands

- **Build for production:**
  ```bash
  npm run build
  ```

- **Run tests:**
  ```bash
  npm test
  ```

- **Watch mode (auto-rebuild on changes):**
  ```bash
  npm run watch
  ```

---

## Key Features Implemented

### 1. **Reactive Forms**
   - Uses Angular's Reactive Forms module for form management
   - FormBuilder for efficient form creation
   - FormGroup for grouping form controls

### 2. **Form Validation**
   - Email field: Required + Email format validation
   - Password field: Required validation
   - Subscription field: Required validation with default "Advanced" value

### 3. **Error Handling**
   - Real-time validation feedback as user interacts with form
   - Conditional display of error messages
   - Visual indicators (red borders) for invalid fields

### 4. **User Experience**
   - Professional styling with gradient background
   - Smooth animations for error messages
   - Responsive design for mobile and desktop
   - Clear visual hierarchy with color-coded alerts (warning/success)

### 5. **Console Logging**
   - Form submission logs entire form object to console
   - Individual field values logged for debugging
   - Warning logged if form submission fails

### 6. **Component Methods**

#### `isFieldInvalid(field: string): boolean`
- Checks if a specific field is invalid and has been touched
- Used to conditionally display error messages

#### `isFormInvalid(): boolean`
- Checks if the entire form is invalid and has been touched
- Used to display the general warning message

#### `onSubmit(): void`
- Handles form submission
- Validates the form
- Logs form values to console
- Sets formValues for template display

#### `getErrorMessage(field: string): string`
- Returns appropriate error message for a field
- Handles different validation errors (required, email format, etc.)

---

## Form Validation Rules

| Field | Type | Required | Validation | Default |
|-------|------|----------|-----------|---------|
| Email | Text | Yes | Valid email format | Empty |
| Subscription | Dropdown | Yes | One of: Basic, Advanced, Pro | Advanced |
| Password | Password | Yes | Not empty | Empty |

---

## Technologies Used

- **Angular 17:** Modern Angular framework with standalone components
- **TypeScript:** Strongly-typed JavaScript for component logic
- **Reactive Forms:** Angular's reactive form approach for state management
- **CSS3:** Modern styling with flexbox and animations
- **Bootstrap Grid System:** Responsive layout (col-xs, col-sm, col-md)

---

## Development Guidelines

### Component Logic (app.component.ts)
- Implements OnInit lifecycle hook
- Uses FormBuilder to create reactive form
- Provides getter methods for template access
- Handles form submission and validation

### Template (app.component.html)
- Conditional rendering with *ngIf
- Form binding with formGroup and formControlName
- Dynamic error messages based on validation state
- Success/warning alerts for user feedback

### Styling (app.component.css)
- Professional color scheme (gradient purple)
- Responsive design with media queries
- Smooth transitions and animations
- Accessibility considerations (focus states)

---

## Testing the Application

1. **Valid Submission:**
   - Enter valid email (e.g., user@example.com)
   - Keep "Advanced" selected
   - Enter any password
   - Click Submit
   - Check browser console for form values

2. **Invalid Email:**
   - Enter "notanemail" (without @ symbol)
   - Tab out of field
   - Error message appears: "Please enter a valid email address"

3. **Empty Fields:**
   - Leave fields empty
   - Click Submit
   - Error message appears: "This field is required"
   - General warning appears at top

4. **Touch Validation:**
   - Click on email field
   - Click outside without entering anything
   - Error message appears (field is marked as touched)

---

## Troubleshooting

### Dependencies Not Installed
```bash
npm install
```

### Port 4200 Already in Use
```bash
ng serve --port 4300
```

### TypeScript Compilation Errors
- Ensure tsconfig.json is properly configured
- Clear node_modules and reinstall: `rm -r node_modules && npm install`

---

## Future Enhancements

- Add password strength indicator
- Implement custom validators
- Add email verification
- Implement form state persistence (localStorage)
- Add loading spinner on submit
- Implement backend API integration
- Add unit tests with Jasmine/Karma

---

## File Descriptions

### `app.component.ts`
Main component that handles:
- Form creation and management
- Validation logic
- Form submission handling
- Error message generation

### `app.component.html`
Template that displays:
- Form inputs and controls
- Error messages and alerts
- Success message on submission
- Form status debug information

### `app.component.css`
Styles for:
- Container and layout
- Form controls and inputs
- Error states and feedback
- Buttons and alerts
- Responsive behavior

### `main.ts`
Application bootstrap file that:
- Initializes the Angular application
- Loads the root AppComponent
- Configures platform services

### `index.html`
Root HTML file that:
- Defines the DOM structure
- References external assets
- Contains the app-root component selector

---

## Author Notes

This assignment demonstrates:
1. **Reactive Forms:** Using FormBuilder and Validators for robust form handling
2. **Validation:** Implementing required and email format validations
3. **Error Handling:** Providing user-friendly error messages
4. **Angular Best Practices:** Standalone components, modern syntax
5. **UX Design:** Professional styling and smooth user experience

---

## Contact & Support

For questions or issues, refer to:
- Angular Documentation: https://angular.io/docs
- Angular Forms Guide: https://angular.io/guide/reactive-forms

---

**Last Updated:** November 10, 2025
**Version:** 1.0.0
