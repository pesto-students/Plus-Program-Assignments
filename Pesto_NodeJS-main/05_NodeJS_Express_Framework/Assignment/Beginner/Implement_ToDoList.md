## Express.js Hands-On Assignment: Building a To-Do List App API

**Task Overview:**

You are tasked with building a simple To-Do List web application API using Express.js. The application API should allow users to add, view, update, and delete tasks.

**Requirements:**

1. **Setup:**
   - Initialize a new Node.js project and install the necessary dependencies (Express, body-parser).

2. **Create Routes:**
   - Implement routes for the following actions:
     1. Display the list of tasks (GET `/tasks`).
     2. Add a new task (POST `/tasks`).
     3. View details of a specific task (GET `/tasks/:id`).
     4. Update a task's details (PUT `/tasks/:id`).
     5. Delete a task (DELETE `/tasks/:id`).

3. **Data Management:**
   - Use an array to store the list of tasks.
   - Each task should have properties like `id`, `title`, `description`, and `completed`.

4. **Validation and Error Handling:**
   - Implement basic validation for inputs/Requests.
   - Handle errors gracefully by displaying appropriate error messages.

5. **Middleware:**
   - Use middleware to log request details (request method, URL, etc.).
   - Implement middleware to handle 404 errors (Route/Page Not Found).

**Bonus Challenges (Optional):**

1. **Static Assets:**
   - Serve static CSS and JS files to style and enhance your application.
   
2. **Task Completion Status:**
   - Add the ability to mark tasks as completed or incomplete.
   - Update the UI to visually differentiate between completed and incomplete tasks.

3. **Persistence:**
   - Use a JSON file or a simple database (e.g., SQLite) to store tasks persistently.
   - Load tasks from the file/database on server startup and save updates when tasks change.

4. **Views (HTML):**
   - Create HTML views for listing tasks, viewing task details, and adding/updating tasks.
   - Use basic HTML forms for adding and updating tasks.

**Guidelines:**

- Break down the tasks into smaller steps and tackle them one by one.
- Test your routes and functionality using tools like Postman or cURL.
- Use meaningful variable names and follow coding best practices.
- Document your code and include comments where necessary.
- Push your code to a GitHub repository and share the repository link with your mentor for review.

This revised assignment separates the core API development from the optional bonus challenges, allowing you to focus on building a robust API using Express.js.