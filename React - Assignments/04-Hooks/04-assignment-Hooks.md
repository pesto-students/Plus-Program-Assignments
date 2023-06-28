Coding Assignment Question:

Building upon the existing React application that displays a list of books, your task is to incorporate Hooks and explore the concepts of useState, useEffect, useMemo, useContext, and custom hooks. Complete the following tasks:

1. Refactor the `BookList` component using functional components and useState:
   - Convert the `BookList` component from a class component to a functional component.
   - Utilize the useState hook to manage the `books` state within the `BookList` component.
   - Update the component to use the new `books` state.

2. Implement a useEffect hook for loading initial data:
   - Create a new functional component called `BookDataLoader`.
   - Within the `BookDataLoader` component, use the useEffect hook to simulate fetching book data.
   - Inside the useEffect hook, update the `books` state in the `BookList` component with a list of initial book objects.

3. Create a custom hook for handling book filtering:
   - Create a custom hook called `useBookFilter` that takes the `books` state as input and returns a filtered book list based on a given search term.
   - Implement the book filtering logic within the custom hook using the useMemo hook to memoize the filtered list and optimize performance.

4. Implement useContext for theme management:
   - Create a new context called `ThemeContext` that provides a theme value (e.g., "light" or "dark") to its child components.
   - Wrap the root component of your application with the `ThemeContext.Provider` component, providing the theme value as a prop.
   - Implement a `ThemeSwitcher` component that allows users to switch between different themes.
   - Use the useContext hook within the `BookList` component to access the theme value and apply appropriate styles.

5. Implement a custom hook for handling book sorting:
   - Create a custom hook called `useBookSorter` that takes the `books` state as input and returns a sorted book list based on a given sorting criteria.
   - Implement the book sorting logic within the custom hook using the useMemo hook to memoize the sorted list and optimize performance.

Your task is to complete the implementation of the above functionalities, utilizing Hooks such as useState, useEffect, useMemo, and useContext. Additionally, create custom hooks to handle book filtering and sorting. Test the application by running the React development server and ensure that the book list is properly rendered, initial data is loaded, book filtering and sorting are functioning correctly, and the theme is applied as expected.

Note: Make sure to include relevant imports, manage component state using hooks, handle context and memoization appropriately, and structure your components and custom hooks in separate files for better organization.


Submission Guidelines: 
Note: Ensure your code is well-structured, properly commented, and follows best practices for code quality and readability, including Redux-specific guidelines.
Best coding practices & guidelines should be followed from here: [React Best Coding practices](https://github.com/imranmd/ReactBestPracticesAndGuidelines/)
Best of luck, and happy coding!