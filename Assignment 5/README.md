# User Activity Management

An Angular application for managing active and inactive users with toggle functionality.

## Features

- **Display Active Users**: View all users currently marked as active
- **Display Inactive Users**: View all users currently marked as inactive
- **Toggle User Status**: 
  - Click "Set to Inactive" button to mark an active user as inactive
  - Click "Set to Active" button to mark an inactive user as active
- **Real-time Updates**: User lists update immediately when status changes
- **Responsive Design**: Beautiful UI with smooth animations and hover effects

## Project Structure

```
src/
├── app/
│   ├── app.component.ts       # Main component logic
│   ├── app.component.html     # Template with active/inactive sections
│   ├── app.component.scss     # Component styling
│   └── app.module.ts          # App module configuration
├── main.ts                     # Bootstrap file
├── index.html                  # HTML entry point
├── styles.scss                 # Global styles
└── test.ts                     # Test configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v17 or higher)

### Installation

1. Navigate to the project directory:
   ```bash
   cd Assignment\ 5
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

### Building for Production

To build the application for production:

```bash
npm run build
```

## How to Use

1. **View Users**: The application displays two sections:
   - **Active Users**: Lists all users with an active status
   - **Inactive Users**: Lists all users with an inactive status

2. **Change User Status**:
   - Click "Set to Inactive" on an active user to mark them as inactive
   - Click "Set to Active" on an inactive user to mark them as active

3. **Real-time Updates**: Users automatically move between sections when their status changes

## Sample Data

The application comes with 4 sample users:

| User | Initial Status |
|------|----------------|
| Max  | Active         |
| Anna | Active         |
| Chris| Inactive       |
| Manu | Inactive       |

## Code Overview

### User Interface

**app.component.ts** - Component class that manages:
- User data array with interface definitions
- Active/Inactive user filtering
- Status toggle functionality

**app.component.html** - Template that displays:
- Active users section with list and toggle buttons
- Inactive users section with list and toggle buttons
- Empty state messages

**app.component.scss** - Styling includes:
- Modern card-based design
- Color-coded buttons (green for activate, red for deactivate)
- Hover effects and smooth transitions
- Responsive layout

## Technologies Used

- **Angular 17**: Frontend framework
- **TypeScript**: Programming language
- **SCSS**: Styling preprocessor
- **RxJS**: Reactive programming library

## API Reference

### User Interface

```typescript
interface User {
  id: number;           // Unique identifier
  name: string;         // User name
  isActive: boolean;    // Current status (true = active, false = inactive)
}
```

### Component Methods

- `loadUsers()`: Initializes the user list with sample data
- `toggleUserStatus(user: User)`: Toggles a user's active/inactive status
- `activeUsers` (getter): Returns filtered list of active users
- `inactiveUsers` (getter): Returns filtered list of inactive users

## Styling Highlights

- **Container**: Centered layout with gradient background
- **User Cards**: Light gray background with hover animations
- **Buttons**:
  - Green (#28a745): Set to Active
  - Red (#dc3545): Set to Inactive
- **Transitions**: Smooth animations on hover and click

## Troubleshooting

### Dependencies Not Installed
If you see module not found errors, run:
```bash
npm install
```

### Port 4200 Already in Use
To use a different port:
```bash
ng serve --port 4300
```

### Build Errors
Clear the dist folder and rebuild:
```bash
rm -r dist
npm run build
```

## Development Server

The development server includes:
- Hot module replacement (HMR)
- Live reloading on file changes
- Browser dev tools integration

## Future Enhancements

- Add user creation and deletion
- Persist user data to a backend API
- Add search and filter functionality
- Implement user roles and permissions
- Add authentication and authorization

## License

This project is open source and available for educational purposes.

## Author

Created as Assignment 5 for Angular Development Course

---

**Note**: This is a learning project. Modify the user data and styling as needed for your requirements.
