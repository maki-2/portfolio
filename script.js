document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
  
      const targetID = this.getAttribute('href');
      const targetSection = document.querySelector(targetID);
  
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  

document.querySelector('.highlighted-2').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({ 
      behavior: 'smooth' 
    });
  });
  