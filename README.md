
# flexpath-using-hooks-and-working-with-data-exercises

## [Getting Started]

- include gifs here
- Include relevant steps to run exercise files or start the app
- "Open the file located at exercise-repo-name/whatever in VS Code"

- Also, include instructions on how to open their terminal in 

- WHILE DOING THIS, LOOK OUT FOR ANY POTENTIAL WINDOWS FILE PATH ISSUES in exercises


## Exercise overview

Give quick overview about context of exercises and their intention


## Specific exercises listed in numbered order

Add disclaimer if exercises are stored inside of specific files as comments

Also, for a plain text reference, theres always the `EXERCISE-INSTRUCTIONS` files to pop open

To answer questions that don't require coding, please create a file in the repo named 
[exercise_number_answer].txt.

For example, if in one of the exercise repos question 13 just asked a question to explain a programming concept, store your answer inside of a new file named exercise_13_answer.txt.

## Testing / Verification

Include relevant details here about where solution files are stored

&nbsp;
---

### Running the Vite Frontend App

Navigate inside of `my-react-app` by using the change directory command:
`cd my-react-app`

Then, you can start the Vite development server by running:
`npm run dev`

This will start the Vite development server. 

You can view your app at http://localhost:5501.

The project structure should look like this:
`
my-react-app/
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
└── node_modules/
`

Exercise instructions are in the file named `EXERCISE-INSTRUCTIONS.txt` inside
of the `my-react-app` directory.


For any components you write, please create them inside of `src/components` and
import them into `App.jsx` when asked.

For any React.Context answers you write, please create them 
inside of `src/context` and import them into `App.jsx` when asked.

For any Custom Hook answers you write, please create them 
inside of `src/hooks` and import them into `App.jsx` when asked.

For any Higher Order Component answers you write, please create them 
inside of `src/hoc` and import them into `App.jsx` when asked.

For any Page Component answers you write, please create them 
inside of `src/pages` and import them into `App.jsx` when asked.


### Summary of React Concepts Covered in These Exercises

1. **React Components**:
    
    - Building functional components.
    - Using JSX to describe the UI structure.
2. **React State Management**:
    
    - Managing state with `useState`.
    - Handling derived state.
    - Using `useEffect` for side effects, such as fetching data.
    - Custom hooks to streamline code.
    - Error boundaries for catching and displaying errors gracefully.
3. **Routing with React Router**:
    
    - Setting up routing using `react-router-dom`.
    - Declaring routes with `Route` and using `Link` for navigation.
    - Using URL parameters with `useParams`.
    - Handling 404 pages with custom components.
    - Using `useNavigate` for programmatic navigation.
4. **Event Handling**:
    
    - Handling events such as form submissions and button clicks.
    - Using React's synthetic event system for consistent event handling.
5. **Fetching Data and Error Handling**:
    
    - Fetching data using async/await and promises.
    - Handling loading states and errors effectively.
    - Using a mock API to simulate real-world data fetching.
6. **Performance Optimization**:
    
    - Using hooks like `useCallback` and `useMemo` for optimization.
    - Techniques to avoid unnecessary re-renders.
7. **Custom Hooks**:
    
    - Creating and using custom hooks to simplify repetitive logic.
    - Centralizing data-fetching logic.
