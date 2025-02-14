AOS.init();

function donate() {
    alert("UPI ID: madinamasjid@upi\nThank you for your support!");
}

document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

gsap.from("h1", {duration: 1, y: -50, opacity: 0});
gsap.from("section", {duration: 1, y: 30, opacity: 0, stagger: 0.3});
