function sendMail(){
  var params = {
    name : document.getElementById("name").value,
    mail : document.getElementById("email").value,
    message : document.getElementById("message").value,
  }

  const serviceId = "service_uiann9q";
  const templateId = "template_6lmwias"

  emailjs.send(serviceId,templateId,params)
  .then(
    res =>{
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    } )
  
}
  
  

