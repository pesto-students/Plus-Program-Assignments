Coding Assignment Question:

Building upon the existing React application that displays a list of books and the concepts of components, class components, function components, pure components, and higher-order components (HOC), your task is to complete the following additional assignments:

1. Convert the `BookList` component to a class component:
   - Refactor the `BookList` component to be a class component instead of a function component.
   - Implement the `render()` method within the class component and move the existing logic for rendering the book list into the `render()` method.

2. Create a new functional component called `BookDetail`:
   - Create a new functional component named `BookDetail` that renders a single book's details.
   - This component should receive the book details as props and render them using JSX, similar to the structure in the previous task.

3. Convert the `Book` component to a pure component:
   - Convert the `Book` component to a pure component, ensuring that it only re-renders when its props change.
   - Update the `Book` component's class declaration to inherit from `React.PureComponent`.

4. Implement a higher-order component (HOC) called `WithLogging`:
   - Create a higher-order component named `WithLogging` that wraps the `BookList` component.
   - The `WithLogging` HOC should log a message to the console each time the `BookList` component is rendered.
   - You can use the `console.log()` function to log the message.

5. Apply the `WithLogging` HOC to the `BookList` component:
   - Wrap the `BookList` component with the `WithLogging` HOC so that it logs a message on each render.

6. Test the application and observe the console logs:
   - Run the React development server and verify that the book list is rendered correctly.
   - Open the browser's console and observe the logged messages from the `WithLogging` HOC.

By completing these tasks, you will practice converting a function component to a class component, creating a functional component, converting a component to a pure component for performance optimization, and implementing a higher-order component for additional functionality. Test the application to ensure the book list is rendered correctly, and check the console logs to confirm that the `WithLogging` HOC is functioning as expected.

Note: Make sure to include relevant imports, utilize the appropriate React component lifecycle methods if needed, and structure your components in separate files for better organization.
Submission Guidelines: 
Note: Ensure your code is well-structured, properly commented, and follows best practices for code quality and readability, including Redux-specific guidelines.
Best coding practices & guidelines should be followed from here: [React Best Coding practices](https://github.com/imranmd/ReactBestPracticesAndGuidelines/)
Best of luck, and happy coding!