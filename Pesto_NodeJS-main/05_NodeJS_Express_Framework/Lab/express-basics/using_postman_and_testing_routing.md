To install Postman and test the endpoints in the above Express application, follow these steps:

1. Install Postman:
   - Go to the Postman website: https://www.postman.com/
   - Click on the "Download the App" button.
   - Select the appropriate version for your operating system (Windows, macOS, or Linux) and follow the installation instructions.

2. Start your Express server:
   - Make sure you have the `app.js` file with the above Express code ready.
   - Open a terminal or command prompt, navigate to the directory containing `app.js`, and run the following command to start the server:
   ```
   node app.js
   ```

3. Open Postman:
   - After installing Postman, launch the application.

4. Test the Endpoints:

   a. Test the `GET` endpoint (`/avengers`):
      - Set the HTTP method to GET.
      - Enter the URL: `http://localhost:3000/avengers`
      - Click the "Send" button to send the GET request.
      - Postman will show the response with the list of Avengers.

   b. Test the `GET` endpoint with query param `id` (`/avengers/:id`):
      - Set the HTTP method to GET.
      - Enter the URL with the desired `id` parameter (e.g., `http://localhost:3000/avengers/2`).
      - Click the "Send" button to send the GET request.
      - Postman will show the response with the specific Avenger details.

   c. Test the `POST` endpoint (`/avengers`):
      - Set the HTTP method to POST.
      - Enter the URL: `http://localhost:3000/avengers`
      - Go to the "Body" tab, select "raw", and choose "JSON" from the dropdown.
      - Enter the request body JSON:
      ```json
      {
        "id": 4,
        "name": "Hulk"
      }
      ```
      - Click the "Send" button to send the POST request.
      - Postman will show the response with the newly created Avenger details.

   d. Test the `PUT` endpoint (`/avengers/:id`):
      - Set the HTTP method to PUT.
      - Enter the URL with the desired `id` parameter (e.g., `http://localhost:3000/avengers/2`).
      - Go to the "Body" tab, select "raw", and choose "JSON" from the dropdown.
      - Enter the request body JSON:
      ```json
      {
        "name": "Steve Rogers"
      }
      ```
      - Click the "Send" button to send the PUT request.
      - Postman will show the response with the updated Avenger details.

   e. Test the `DELETE` endpoint (`/avengers/:id`):
      - Set the HTTP method to DELETE.
      - Enter the URL with the desired `id` parameter (e.g., `http://localhost:3000/avengers/3`).
      - Click the "Send" button to send the DELETE request.
      - Postman will show the response with a status code of 204 (No Content) indicating a successful deletion.

That's it! You have now installed Postman and successfully tested the endpoints in your Express application.