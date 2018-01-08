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