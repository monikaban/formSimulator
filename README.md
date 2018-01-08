# Form Simulator

This is a Form Configurator app, which simulates the dynamic form generation based on configurations added by user. 

This version of form builder will generate a json configuration for form. In this user can configure dependencies and follow-up questions based on input values in the previous question or field. User can preview it and export this structure as JSON of the form.

 Try it on Sandbox : https://codesandbox.io/s/github/monikaban/formSimulator 
 
 Direct Sandbox link : https://2jo6mz2980.codesandbox.io/
  
 Usage Instructions:
 
 Check out the project in your local system. Go to the src dir and run
 
 > npm install
 
 > npm start
 
 
 To save data using local storage, make changes to src/index.js by setting 'useLocalStorage' flag to true
 
 As a Sample there are two configurations provided. 
 - QFlow      : Questions tree for insurance quotes
 - SurveyForm : Sample user satisfaction survey
 
 To switch between different default configurations, change the qForm variable to (qFlow() / surveyForm()) in src/index.js
 
 
 
