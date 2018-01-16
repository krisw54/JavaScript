function getJSON(url)
{
    let AJAX_req = new XMLHttpRequest();
    AJAX_req.open("GET", url, true);
	
    AJAX_req.onreadystatechange = function(){
        if (AJAX_req.readyState == 4 && 
            AJAX_req.status == 200){
            //AJAX_req.responseText holds data transferred
            let response = JSON.parse(AJAX_req.responseText);
            processData(response);
        }
    }
    AJAX_req.send(); 
}

getJSON("person.txt");


function processData(data){
    let stuff = data;  
   console.log(stuff);
    
}


console.log(stuff);
