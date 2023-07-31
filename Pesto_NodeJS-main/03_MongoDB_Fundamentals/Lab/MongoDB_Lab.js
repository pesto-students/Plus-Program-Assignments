// Step 1: Create a new database called "my_database"
use my_database

// Step 2: Create a collection called "my_collection" in the "my_database" database
db.createCollection("my_collection")

// Step 3: Insert documents into the "my_collection" collection
db.my_collection.insertMany([
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 40 }
])

// Step 4: Find all documents in the "my_collection" collection
db.my_collection.find()

// Step 5: Find documents where the age is greater than 30
db.my_collection.find({ age: { $gt: 30 } })

// Step 6: Update a document in the "my_collection" collection
db.my_collection.updateOne({ name: "John" }, { $set: { age: 35 } })

// Step 7: Upsert a document - Update if exists, otherwise insert a new document
db.my_collection.updateOne({ name: "Alex" }, { $set: { age: 28 } }, { upsert: true })

// Step 8: Delete a document from the "my_collection" collection
db.my_collection.deleteOne({ name: "Bob" })

// Step 9: Show all documents in the "my_collection" collection after the operations
db.my_collection.find()
