/*Send Message from contacts form */
//funkciqta koqto izprashta avtomatichniq mail
function sendMessage(){
  Email.send({
  SecureToken: "4e140a34-eb49-44cd-a5b3-0e80349090a4", /*secures the password */
  Host : "smtp.elasticemail.com", 
  Username : "snkrs.therapyyy@gmail.com", /*the username for the email */
  Password : "F5C701F125474EA8DF8B5B6CED17C6988819", /*the password for the email (useing elasticemail in order to be more secure)*/
  To : 'snkrs.therapyyy@gmail.com', /*to whom shold the email be send to */
  From : "snkrs.therapyyy@gmail.com", /*From whoose name should the email be send */
  Subject : `New Message From ${document.getElementById("name").value}` ,
  Body : `New Message!
  <br> Name: ${document.getElementById("name").value}
  <br> Email: ${document.getElementById("email").value}
  <br> Phone: ${document.getElementById("phone").value}
  <br> Message: ${document.getElementById("message").value}`
}).then(
message => alert("Message sent!")
);
}