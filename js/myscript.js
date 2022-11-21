
function myFunction(elementID) {
    
    var x = document.getElementById(elementID);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
  
function showBrowser(browser) {
    
    var chrome = document.getElementById('chrome');
    var safari = document.getElementById('safari');
    var edge = document.getElementById('edge');

    switch (browser){

        case "chrome":
            chrome.style.display = "block";
            safari.style.display = "none";
            edge.style.display = "none";
            break;
        case "safari":
            chrome.style.display = "none";
            safari.style.display = "block";
            edge.style.display = "none";
            break;
        case "edge": 
            chrome.style.display = "none";
            safari.style.display = "none";
            edge.style.display = "block";
            break;
    }
   
    
}