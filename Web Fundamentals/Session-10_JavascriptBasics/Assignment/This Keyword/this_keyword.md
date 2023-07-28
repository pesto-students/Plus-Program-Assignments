**Objective:** The objective of this assignment is to test the understanding of the "this" keyword in object- oriented programming languages like JavaScript. 

**Instructions:** 

Write a program that demonstrates the use of "this" keyword in JavaScript. 

- Create a class named "Person" with the following properties: 
  - Name: string 
  - Age: number 
  - Gender: string 
  - Nationality: string 
- Create a method named "introduce" in the Person class that returns a string containing the person's name, age, gender, and nationality. 
- Create three instances of the Person class and assign values to their properties. 
- Call the introduce method on each instance and print the returned string to the console. 
- Create a subclass named "Student" that inherits from the Person class. 
- Add a new property to the Student class named "subject" of type string. 
- Create a method named "study" in the Student class that returns a string containing the subject that the student is studying. 
- Create an instance of the Student class and assign values to its properties. 
- Call the introduce method on the Student instance and print the returned string to the console. 
- Call the study method on the Student instance and print the returned string to the console. 

Note: In order to access the properties of the current object within a class method, you should use the "this" keyword. 

**Example output:** 

Person instance 1: My name is John, I am 25 years old, I am male, and I am American. Person instance 2: My name is Jane, I am 30 years old, I am female, and I am Canadian. Person instance 3: My name is Bob, I am 20 years old, I am male, and I am Australian. 

Student instance 1: My name is Sarah, I am 18 years old, I am female, and I am British. I am studying Computer Science. 
