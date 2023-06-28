Coding Assignment Question:

Expanding on the existing React application that displays a list of books and the concepts of props, state, conditional rendering, handling events, and forms, your task is to complete the following additional assignments:

1. Add a form to add new books:
   - Create a new component called `BookForm` that includes a form with input fields for the title, author, and year of a book.
   - Implement state in the `BookForm` component to store the input values for the book details.
   - Write a submit handler function that is triggered when the form is submitted, which adds a new book object to the existing `books` array in the `BookList` component's state.

2. Implement conditional rendering for an empty book list:
   - Check if the `books` array in the `BookList` component's state is empty.
   - If the array is empty, display a message indicating that the book list is currently empty.
   - If the array contains books, render the book list as before.

3. Add a delete functionality for books:
   - Within the `BookList` component, add a delete button for each book in the book list.
   - Implement an event handler function that removes the corresponding book from the `books` array in the component's state when the delete button is clicked.
   - Update the book list UI to reflect the updated array of books after deletion.

4. Enhance the book details display:
   - Within the `BookDetail` component, add a button that toggles the visibility of additional details for each book, such as a book description or genre.
   - Implement state in the `BookDetail` component to control the visibility of the additional details.
   - Conditionally render the additional details based on the state of visibility.

5. Style the application:
   - Apply CSS styles to the various components to improve the visual presentation of the application.
   - Utilize CSS frameworks (e.g., Bootstrap, Material-UI) or create your custom styles using CSS or CSS-in-JS libraries.

Your task is to complete the implementation of the above functionalities, utilizing the concepts of props, state, conditional rendering, handling events, and forms. Test the application by running the React development server and ensure that the new book form, conditional rendering for an empty book list, delete functionality, and book details toggle are working as expected. Also, verify that the application is styled appropriately.

Note: Make sure to include relevant imports, manage component state appropriately, handle form submission and event handling, and structure your components in separate files for better organization.

Submission Guidelines: 
Note: Ensure your code is well-structured, properly commented, and follows best practices for code quality and readability, including Redux-specific guidelines.
Best coding practices & guidelines should be followed from here: [React Best Coding practices](https://github.com/imranmd/ReactBestPracticesAndGuidelines/)
Best of luck, and happy coding!