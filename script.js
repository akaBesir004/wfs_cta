document.addEventListener("DOMContentLoaded", function () {
    if (typeof gsap === "undefined") return;

    const ctaFrame = document.querySelector(".call-to-action");
    const closeButton = document.querySelector(".close-button");
    const fbLink = document.querySelector(".fb-link");
    const linkedinLink = document.querySelector(".linkedin-link");
    const xLink = document.querySelector(".x-link");
    const instaLink = document.querySelector(".insta-link");

    if (!ctaFrame) return;

    gsap.set(ctaFrame, { scale: 0, transformOrigin: "100% 100%", opacity: 0 });
    gsap.to(ctaFrame, { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" });

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
    gsap.to(elements, { opacity: 1, y: 0, duration: 0.25, ease: "power2.out", stagger: 0.05, delay: 0.3 });

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            const tl = gsap.timeline();
            tl.to(elements.reverse(), { opacity: 0, y: 30, duration: 0.1, ease: "power2.in", stagger: 0.05 });
            tl.to(ctaFrame, { scale: 0, opacity: 0, duration: 0.5, ease: "power2.in", onComplete: () => ctaFrame.style.display = "none" });
        });
    }

    fbLink?.addEventListener("click", () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, "_blank"));
    linkedinLink?.addEventListener("click", () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, "_blank"));
    xLink?.addEventListener("click", () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent("Check this out! ")}&url=${encodeURIComponent(window.location.href)}`, "_blank"));

    instaLink?.addEventListener("click", function () {
        let url = window.location.href;
        let instagramAppUrl = "instagram://direct";
        window.location.href = instagramAppUrl;
        setTimeout(() => navigator.clipboard.writeText(url).then(() => alert("Instagram app not found. Link copied! Paste it in your Story.")), 2000);
    });
});
