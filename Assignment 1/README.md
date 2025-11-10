# Angular Alerts Demo

Problem statement (exact text):

"1. Create two new Components (manually or with CLI): WarningAlert and SuccessAlert
2. Output them beneath each other in the AppComponent
3. Output a warning or success message in the Components
4. Style the Components appropriately (maybe some red/green text?)

Use external or internal templates and styles!

Feel free to create more components, nest them into each other or play around with different types of selectors!"

--------------------------------------------------

Files created under this folder:

- `package.json` — project manifest (use `npm install` to install deps)
- `tsconfig.json`, `angular.json` — minimal configs
- `src/` — source files including `app/` with the two components

How to run (on your machine):

1) From PowerShell open the project root:

```powershell
cd "C:\Users\Aryan.Kumar\Desktop\Assignment 3"
```

2) Install dependencies:

```powershell
npm install
```

3) Serve the app (Angular CLI required). If you don't have the CLI installed globally either install it or use npx:

```powershell
npx ng serve --open
# or if you installed the CLI globally:
ng serve --open
```

Open http://localhost:4200 if the browser doesn't open automatically.

Notes:
- This is a minimal scaffold to satisfy the assignment; if `npx ng serve` complains about missing config or missing node_modules, run `npm install` first.
- If you prefer I can instead create a static-build flow that doesn't require Angular CLI — tell me and I will add it.
