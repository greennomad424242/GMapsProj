

(function() { 
 
  var link = document.getElementsByTagName("a")[0];
    
   link.onclick = function(e){

       var xhr = new XMLHttpRequest();
       // handle the "onreadystate change"
      //   xhr.readyState
       //  if 0 = uninitialized
       //     1 = loading
       //     2 = loaded
       //     3 = interactive (server is in the proces of sending)
       //     4 = have access to the server's response 
       
       xhr.onreadystatechange = function(){
       
           if ((xhr.readyState == 4) && (xhr.status == 200  || xhr.status == 304)){
             xhr.responseText;
               
            var body = document.getElementsByTagName('body')[0];   
            var heading = xhr.responseXML.getElementsByTagName("heading")[0].firstChild.nodeValue;
            var h2 = document.createElement("h2");
            var h2Text = document.createTextNode(heading);
            h2.appendChild(h2Text);
            
            var list = document.createElement("ul");
            var items = xhr.responseXML.getElementsByTagName("items")[0];
             items = items.getElementsByTagName("item");
               
            for (var i=0; i<items.length ; i++ ){
                var item = items[i].firstChild.nodeValue;
                var li = document.createElement("li");
                var liText = document.createTextNode(item);   
                li.appendChild(liText);                   
                list.appendChild(li);
            }   
               
               
            body.appendChild(h2);
            body.appendChild(list);                       
            body.removeChild(link);
               
           }    
       };
       
       
       
      //open the request
       xhr.open('GET', "files/ajax.xml", true);
       //send the request
       
       xhr.send(null)
       
       
       
       return false;
   };

 
 
})();

