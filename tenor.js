$(document).ready(function(){
    var apikey = "AIzaSyBANqQvc-SYODFJ11C2bzfDAHcQOvRBCa4";
    var lmt = 8;
    $(".btn").click(function(){
        $(".searched_content").empty();
        var term =$(".text").val();
        var url =  `https://tenor.googleapis.com/v2/search?q=${term}&key=AIzaSyCnGfe6h0cxViWMV4h9cdEanXNiWXjwaJk&client_key=AIzaSyCnGfe6h0cxViWMV4h9cdEanXNiWXjwaJk&limit=8`
            console.log(url);
     var xmlhttp = new XMLHttpRequest();
     xmlhttp.open("GET", url, true);
     xmlhttp.responseType = 'json'
     xmlhttp.send();
     xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
        var myArr = xmlhttp.response.results;
        console.log(myArr);
           var i=0;
           myArr.forEach(function(myArr){
            if(i<8){
            var src = myArr.media_formats.tinygif.url
            $(".searched_content").append("<img class='pic' src="+src+">")
            i++;}
           });
       }
       }
    })
  })