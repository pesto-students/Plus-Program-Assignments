## MongoDB Assignment: Building a Movie Database

In this assignment, you will create a movie database using MongoDB. 
The database should include collections for movies, directors, and actors. 
Each movie should have details such as title, release year, genre, director, and a list of actors. 
Each director should have details such as name, nationality, and a list of movies they directed. 
Each actor should have details such as name, nationality, and a list of movies they acted in.

**Requirements:**

1. Create a new database named "MovieDB" in MongoDB.
2. Create three collections named "movies," "directors," and "actors."
3. Design the appropriate schema for each collection and insert sample data into each collection.
4. The "movies" collection should include at least 10 movie documents with relevant details (e.g., title, release year, genre, director, and actors).
5. The "directors" collection should include at least 5 director documents with relevant details (e.g., name, nationality, and movies directed).
6. The "actors" collection should include at least 8 actor documents with relevant details (e.g., name, nationality, and movies acted in).
7. Implement appropriate relationships between the collections. For example, each movie should have a reference to its director and a list of actor references. Each director should have a list of movie references they directed. Each actor should have a list of movie references they acted in.
8. Write MongoDB queries to perform the following tasks:
   a) Find all movies released in a specific year.
   b) Find all movies in a specific genre.
   c) Find all movies directed by a specific director.
   d) Find all movies that a specific actor acted in.
   e) Find all directors from a specific nationality.
   f) Find all actors from a specific nationality.

**Submission Requirements:**

1. Document your database schema design, including the relationships between collections.
2. Provide the MongoDB queries used to insert sample data into each collection.
3. Write the MongoDB queries for the tasks (a) to (f) mentioned above.
4. Export the MongoDB queries as a separate .txt or .js file.
5. Zip all the necessary files and submit them.

**Additional Challenge (Optional):**

Implement indexes for the relevant fields to optimize the performance of your queries.

**Note:**

Feel free to use any movie data you like for this assignment. You can also use fictional data if you prefer. Make sure to follow the best practices for MongoDB schema design and indexing to create a well-organized and efficient movie database.