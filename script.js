<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>


document.addEventListener("DOMContentLoaded", function () {
  const ctaFrame = document.querySelector(".call-to-action");
  const closeButton = document.querySelector(".close-button");
  
  gsap.set(ctaFrame, {
    scale: 0,
    transformOrigin: "100% 100%",
    opacity: 0
  });

  gsap.to(ctaFrame, {
    scale: 1,
    opacity: 1,
    duration: 0.6,
    ease: "power2.out"
  });
  
  const elements = [
    ".cta-subheading",
    ".cta-heading",
    ".cta-paragraph",
    ".find-out-more",
    ".book-a-call",
    ".footer",
    ".close-button"
  ];

  gsap.set(elements, { opacity: 0, y: 30 });

  gsap.to(elements, {
    opacity: 1,
    y: 0,
    duration: 0.25,
    ease: "power2.out",
    stagger: 0.05, 
    delay: 0.3, 
  });

  closeButton.addEventListener("click", function () {
    const tl = gsap.timeline();

    tl.to(elements.reverse(), {
      opacity: 0,
      y: 30,
      duration: 0.1,
      ease: "power2.in",
      stagger: 0.05,
     
    });
  
    tl.to(ctaFrame, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: function () {
        ctaFrame.style.display = "none";
      }
    });
  });
  
  	document.querySelector(".fb-link")?.addEventListener("click", function () {
          let url = encodeURIComponent(window.location.href);
          let facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
          window.open(facebookUrl, "_blank");
      });
      
     document.querySelector(".linkedin-link")?.addEventListener("click", function () {
          let url = encodeURIComponent(window.location.href);
          let linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
          window.open(linkedInUrl, "_blank");
      });
      
       document.querySelector(".x-link")?.addEventListener("click", function () {
          let url = encodeURIComponent(window.location.href);
          let tweetText = encodeURIComponent("Check this out! ");
          let twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${url}`;
          window.open(twitterUrl, "_blank");
      });
      
      document.addEventListener("DOMContentLoaded", function () {
      document.querySelector(".insta-link")?.addEventListener("click", function () {
          let url = window.location.href;
          let instagramAppUrl = "instagram://direct";
      
          window.location.href = instagramAppUrl;
          setTimeout(() => {
              navigator.clipboard.writeText(url).then(() => {
                  alert("Instagram app not found. Link copied! Paste it in your Story.");
              });
          }, 2000);
      });
  });


});

