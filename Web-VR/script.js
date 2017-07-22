// get recent_items data -> /api/recent
function getRecentItems(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.response);
        }
    }
    xhttp.open("GET", "http://localhost:5000/api/recent");
    xhttp.send();
}
