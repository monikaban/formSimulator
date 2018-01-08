export default function surveyForm(){
	let qForm = {
		    "nextId": 5007,
		    "header": {
		        "formID": "3518",
		        "formName": "My Survey form",
		        "formCode": "",
		        "formShortCode": "Survey 1",
		        "formDescription": "",
		        "formHelp": ""
		    },
		    "rootQuestions": [
		        5000,
		        5005
		    ],
		    "questions": {
		        "5000": {
		            "id": "5000",
		            "qText": "How satisfied are you with my services? (5 is best)",
		            "conditionOper": "equals",
		            "conditionVal": "Yes",
		            "respType": "RADIO",
		            "help": "",
		            "defaultVal": "Yes",
		            "required": "yes",
		            "vals": [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5"
		            ],
		            "showThis": true,
		            "qResp": "1",
		            "childIds": [
		                5002,
		                5003
		            ]
		        },
		        "5002": {
		            "id": "5002",
		            "qText": "What did you think was bad?",
		            "conditionOper": "equals",
		            "conditionVal": "1",
		            "respType": "TEXT",
		            "help": "",
		            "defaultVal": "Yes",
		            "required": "yes",
		            "vals": [],
		            "showThis": false,
		            "qResp": "",
		            "childIds": []
		        },
		        "5003": {
		            "id": "5003",
		            "qText": "Would you like someone to call you",
		            "conditionOper": "equals",
		            "conditionVal": "1",
		            "respType": "SELECT",
		            "help": "",
		            "defaultVal": "Yes",
		            "required": "yes",
		            "vals": [
		                "Yes",
		                " No"
		            ],
		            "showThis": false,
		            "qResp": "",
		            "childIds": [
		                5004
		            ]
		        },
		        "5004": {
		            "id": "5004",
		            "qText": "Please give us your phone number",
		            "conditionOper": "equals",
		            "conditionVal": "Yes",
		            "respType": "TEXT",
		            "help": "",
		            "defaultVal": "Yes",
		            "required": "yes",
		            "vals": [],
		            "showThis": false,
		            "qResp": "",
		            "childIds": []
		        },
		        "5005": {
		            "id": "5005",
		            "qText": "How did you hear about us?",
		            "conditionOper": "equals",
		            "conditionVal": "Yes",
		            "respType": "SELECT",
		            "help": "",
		            "defaultVal": "Yes",
		            "required": "yes",
		            "vals": [
		                "Friends",
		                " internet",
		                " radio",
		                " Newspaper",
		                "Other"
		            ],
		            "showThis": true,
		            "qResp": "Other",
		            "childIds": [
		                5006
		            ]
		        },
		        "5006": {
		            "id": "5006",
		            "qText": "Please tell us your source of referal",
		            "conditionOper": "equals",
		            "conditionVal": "Other",
		            "respType": "TEXT",
		            "help": "",
		            "defaultVal": "Yes",
		            "required": "yes",
		            "vals": [],
		            "showThis": false,
		            "qResp": "",
		            "childIds": []
		        }
		    }
		};

	return qForm;
}
export  function qFlow(){
	let qForm = {
			"nextId" : 5000,
			"header" : { 
			      "formID": "3518",
			      "formName": "Car insurance form",
			      "formCode": "",
			      "formShortCode": "Car 18",
			      "formDescription" : "",
			      "formHelp":""
			  },
			  "rootQuestions" : ["1000","2000","3000"],
			  "questions" : {
			    "1000" : { "id" : "1000",
			      "qText" : "Do you own a Car?",
		          "conditionOper" : "equals",
		          "conditionVal" : "Yes",
			      "respType" : "RADIO",
			      "help": "",
			      "defaultVal": "Yes",
			      "required": "yes",
			      "vals" : [
			        "No",
			        "Yes"
			      ], 
			      "showThis" : true,
			      "qResp" : "",
			      "childIds" : [1100] 
			    },
			    "1100" : {
			          "id" : "1100",
			          "qText" : "What is the make of your car?",
			          "conditionOper" : "equals",
			          "conditionVal" : "Yes",
			          "respType" : "TEXT",
			          "help": "",
			          "defaultVal": "",
			          "required": "yes",
			          "vals" : [
			            ""
			          ],
				      "showThis" : false,
				      "qResp" : "",
				      "childIds" : [1110,1120]
			      },
			      "1110" :  {
			          "id" : "1110",
			          "qText" : "How many wheels does your car have?",
			          "conditionOper" : "equals",
			          "conditionVal" : "Ford",
			          "respType" : "SELECT",
			          "help": "",
			          "defaultVal": "4",
			          "required": "yes",
			          "vals" : [
			            "4",
			            "6",
			            "8"
			          ],
				      "showThis" : false,
				      "qResp" : "",
			          "childIds" : [1111]
			        },
			        "1111" :  {
			            "id" : "1111",
			            "qText" : "Are there any customizations?",
			            "conditionOper" : "gt",
				        "conditionVal" : "4",
			            "respType" : "SELECT",
			            "help": "",
			            "defaultVal": "No",
			            "required": "yes",
			            "vals" : [
			              "Yes",
			              "Not sure",
			              "No"
			            ],
					      "showThis" : false,
					      "qResp" : "",
			            "childIds" : []
			        },
			        "1120":    {
			              "id" : "1120",
			              "qText" : "Has your car ever been recalled?",
				          "conditionOper" : "equals",
					      "conditionVal" : "Toyota",
			              "respType" : "SELECT",
			              "help": "",
			              "defaultVal": "No",
			              "required": "yes",
			              "vals" : [
			                "Yes",
			                "No"
			              ],
					      "qResp" : "",
				            "childIds" : [],
				      "showThis" : false
			          },
			      "2000":    { "id" : "2000",
			            "qText" : "What is the name of your company?",
			            "respType" : "TEXT",
			            "help": "",
			            "defaultVal": "Yes",
			            "required": "yes",
			            "vals" : [
			              ""
			            ],
					  "showThis" : true,
				      "qResp" : "",
			          "childIds" :[]
			        },
			      "3000" : { "id" : "3000",
			          "qText" : "Which year did you graduate from college?",
			          "respType" : "TEXT",
			          "help": "",
			          "defaultVal": "Yes",
			          "required": "yes",
			          "vals" : [
			            ""
			          ],
				      "showThis" : true,
				      "qResp" : "",
			          "childIds" :[]
			    }
			  }
			};
	
return qForm;
	
}

