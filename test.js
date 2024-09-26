
function dumpResponse(){
    console.log(this.responseText);
  }
  
  var request = new XMLHttpRequest();
  // Set the event handler
  request.onload = dumpResponse;
  // Initialize the request
  request.open('get', 'https://www.google.com', true)
  // Fire away!
  request.send()
