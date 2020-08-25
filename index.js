var input = document.getElementById("mail");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   
       var search = document.getElementById("mail").value;
       var name = search.split(' ').join('');
       fetch("https://api.github.com/users/"+name)
       .then((result) => {
         result.json()
       .then((data) => {
         var life = data.html_url;
        
         document.getElementById("link").href=data.html_url;
         document.getElementById("link").click();
        
       })
      });
      

  }
});