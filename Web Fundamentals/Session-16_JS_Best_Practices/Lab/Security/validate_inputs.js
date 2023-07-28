function validateInput(input) {
  if (input === null || input === undefined) {
    throw new Error("Input is required");
  }
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }
  if (input.length < 8) {
    throw new Error("Input must be at least 8 characters long");
  }
}

validateInput("password123");
