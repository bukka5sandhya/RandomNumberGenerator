In this project, let's build a Random Number Generator by applying the concepts we have learned till now.

Refer to the image below:

![image](https://github.com/bukka5sandhya/RandomNumberGenerator/assets/133884532/ca092ecf-1e82-43e6-9a4e-15cef6a3301a)

https://assets.ccbp.in/frontend/content/react-js/random-number-generator-output-v2.gif

Design Files

Click to view

Extra Small (Size < 576px) and Small (Size >= 576px)

Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)

Set Up Instructions

Click to view

Download dependencies by running npm install

Start up the app using npm start

Completion Instructions

Functionality to be added

The app must have the following functionalities

Initially, the number displayed should be 0

When Generate button is clicked, a random number should be generated in the range of 0 to 100 and displayed

Implementation Files

Use these files to complete the implementation:

src/components/RandomNumberGenerator/index.js

src/components/RandomNumberGenerator/index.css

Quick Tips

Click to view

You can use Math.random() function to get a random number (float value) in range 0 to less than 1 (0 <= randomNumber < 1)

 Math.random()

 You can use Math.ceil() function to round a number up to the next largest integer

 console.log(Math.ceil(95.906698007537561)); // 96

 You can use the box-shadow CSS property to apply the box-shadow effect to containers

  box-shadow: 0px 4px 16px 0px 


  ![image](https://github.com/bukka5sandhya/RandomNumberGenerator/assets/133884532/2c836214-936a-4563-a4b3-b7bf61385a34)

  You can use the cursor CSS property to specify the mouse cursor to be displayed when pointing over an element

  cursor: pointer;
  
  ![image](https://github.com/bukka5sandhya/RandomNumberGenerator/assets/133884532/04be2ec1-b407-4fe0-aa9c-989012714119)

 You can use the below outline CSS property for buttons and input elements to remove the highlighting when the elements are clicked

  outline: none;

Resources

Image URLs

https://assets.ccbp.in/frontend/react-js/random-no-generator-bg.png

Colors

Hex: #ffffff

Hex: #e4ebf3

Hex: #eaebed

Hex: #0b69ff

Hex: #333333

Font-families

Roboto

Things to Keep in Mind

All components you implement should go in the src/components directory.

Don't change the component folder names as those are the files being imported into the tests.

Do not remove the pre-filled code

Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.

