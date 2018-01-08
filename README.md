# formSimulator

This is a Form Configurator app, which simulates the dynamic form generation based on the inputs configured by the user. 
This version of form builder will generate a form for users to fill out and allow the user to preview it and export this structure as JSON. 

  
 Installation Instructions:
 
 Check out the project in your local system. Go to the src dir and run
 
 > npm install
 
 > npm start
 
 
 To save data using local storage, make changes to src/index.js by setting 'useLocalStorage' flag to true
 
 To switch between different default configurations (Question Form / Survey Form), change the qForm variable to (qFlow() / surveyForm()) in src/index.js
 
 