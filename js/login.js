document.getElementById("ingresar").onclick = function () {

     
    var username = document.getElementById('usuario').value;
    var clave = document.getElementById('password').value;


    var urllogin = 'https://api-parcial.crangarita.repl.co/login';
    var data = {user: username, password: clave};
    
    fetch(urllogin, {
      method: 'POST', 
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
                        if(response.login){
                          window.location.href="tabla.html";
                          console.log('Success:', response);
                          localStorage.setItem("user", response.codigo);
                          window.location.href="tabla.html";
                        }else{
                          alert("Los datos son invalidos");
                        
                        }
                      });
}
if(localStorage.getItem("user")!=null) {
  window.location.href="tabla.html";
}