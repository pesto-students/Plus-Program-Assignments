In this assignment, you will use a timer to animate the movement of a heart image to the location where the mouse clicks, as shown below.

![](Aspose.Words.1cd312a9-b0d8-462f-9b68-a9330b9ded66.001.png)

The index.html file displays a webpage with the heart image. When the user clicks anywhere in the page, the startAnimation() function is called. startAnimation() determines where the user clicked and calls moveImage() with the clicked (x, y) coordinate. moveImage() moves the heart 1 pixel in the direction of the given (x, y) coordinates.

Make the following JavaScript modifications using clearInterval() and setInterval() where appropriate: 

1. In startAnimation(), add an if statement that stops the timer with the ID timerId if timerId is not null. 
1. After the if statement in startAnimation() that stops the timer, start a timer that calls moveImage(clickX, clickY) every 10 milliseconds. Save the timer ID in the timerId variable. 
1. Add an if statement in moveImage() that stops the timer with the ID timerId if (imgX, imgY) is equal to (centerX, centerY). Also set timerId to null. 

After the modifications are complete, the user should be able to click anywhere in the browser, and the heart will slowly move to the clicked location. If the user clicks on a new location before the heart arrives at the last location, the heart will adjust course and move to the new location.
