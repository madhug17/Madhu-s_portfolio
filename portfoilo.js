(function(){ emailjs.init("YOUR_PUBLIC_KEY"); })();

// Navbar toggle for mobile
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click',()=>{navLinks.classList.toggle('active');});

// Smooth scroll
document.getElementById('exploreBtn').addEventListener('click', () => {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const serviceID = "YOUR_SERVICE_ID";
  const templateID = "YOUR_TEMPLATE_ID";
  emailjs.sendForm(serviceID, templateID, this)
    .then(()=>{ alert("Message sent successfully!"); this.reset(); })
    .catch(()=>{ alert("Failed to send message."); });
});

// Scroll reveal
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{ threshold:0.2 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));
