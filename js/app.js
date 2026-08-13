
document.addEventListener("DOMContentLoaded", function(){
  const btn=document.querySelector(".navbar-toggler");
  const menu=document.querySelector(".navbar-collapse");
  if(btn && menu){btn.addEventListener("click",()=>menu.classList.toggle("open"));}
  const form=document.getElementById("contactForm");
  if(form){
    form.addEventListener("submit",function(e){
      e.preventDefault();
      const msg=document.getElementById("msg");
      if(msg){msg.textContent="Mensaje registrado como demostración. En una versión con servidor se enviaría al correo institucional.";}
      form.reset();
    });
  }
});
