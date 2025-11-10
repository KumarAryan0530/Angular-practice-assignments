# Angular Assignment Project

This Angular project demonstrates the following functionality:

## Features Implemented

1. ✅ **Display Details Button**: A button that toggles the visibility of the secret paragraph
2. ✅ **Secret Paragraph**: Displays "Secret Password = tuna" with styling
3. ✅ **Toggle Functionality**: Click the button to show/hide the paragraph
4. ✅ **Click Logging**: All button clicks are logged with:
   - Incrementing click numbers (1, 2, 3, etc.)
   - Timestamps showing when each click occurred
5. ✅ **Styling on 5th Click**: Starting from the 5th log item, all future items display with:
   - Blue background (via `ngStyle`)
   - White text color (via `ngClass`)

## Project Structure

```
src/
├── app/
│   ├── app.component.ts       # Main component with click logic
│   ├── app.component.html     # Template with button and logging display
│   ├── app.component.css      # Component-specific styles
├── main.ts                    # Application bootstrap
├── index.html                 # Main HTML file
└── styles.css                 # Global styles

tsconfig.json                  # TypeScript configuration
angular.json                   # Angular CLI configuration
package.json                   # Dependencies and scripts
```

## Installation

```bash
npm install
```

## Running the Project

```bash
npm start
```

The application will be available at `http://localhost:4200`

## How to Use

1. Click the "Display Details" button to reveal/hide the secret password
2. Each click is automatically logged with a number and timestamp
3. Starting from the 5th click, the log entries will have a blue background with white text
4. The application uses Angular's built-in directives:
   - `*ngIf` for conditional display
   - `*ngFor` for rendering the click log array
   - `[ngStyle]` for dynamic styling based on log index
   - `[ngClass]` for conditional CSS classes
