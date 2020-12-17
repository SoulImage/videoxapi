// Various variables
	var videoHalfWay = 0;
	var currentTime;
	var durationTime;
	

	// Actor Variables
	var name = "Joe Smoe";
	var email = "joe@smoe.com";
	var firstPlayDone = false;
	

	// Video reference
	var video1 = document.getElementById('video1');
	

	// Interaction loaded
	function pageLoaded(){
		// Pause video
		video1.pause();
		// Connecting to LRS
		var conf = {
		  "endpoint" : "https://cloud.scorm.com/lrs/ZK5IC0NDVA/sandbox/",
		  "auth" : "Basic " + toBase64('jeffbatt@gmail.com:DevLearn17'),
		};
		ADL.XAPIWrapper.changeConfig(conf);
	

		// Show prompt
		$('#namePrompt').modal('show')
	}
	

// Video play
	video1.onplaying = function(){
		var videoPlay = {  
		    "actor": {  
		        "mbox": "mailto:"+email,  
		        "name": name,  
		        "objectType": "Agent"  
		    },  
		    "verb": {  
		        "id": "http://adlnet.gov/expapi/verbs/initialized",  
		        "display": {"en-US": "initialized"}  
		    },  
		    "object": {  
		        "id": "http://learningdojo.net/xapi/video1",  
		        "definition": {  
		            "name": {"en-US": "Video 1"},  
		            "description": {"en-US": "the video"}  
		        },  
		        "objectType": "Activity"  
		    }  
		};
	

		ADL.XAPIWrapper.sendStatement(videoPlay); 
	}


// Getting User
	function saveName(){
		name = document.getElementById('nameEntered').value;
		console.log(name);
	}
	

	function saveEmail(){
		email = document.getElementById('userEmail').value;
		console.log(email)
	}
	

	function playVideo(){
		video1.play();
	}

