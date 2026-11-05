
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.getElementById("send").addEventListener("click",()=>{
  document.getElementById("note").textContent="Thanks! This demo form is ready to connect to your real email, CRM, WhatsApp or backend.";
});
