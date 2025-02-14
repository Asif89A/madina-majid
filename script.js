// Fetch live prayer timings
async function fetchPrayerTimings() {
    const city = "Purandawade";
    const country = "India";
    const method = 2; // Islamic University of Karachi (Hanafi)

    try {
        const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}`);
        const data = await response.json();
        const timings = data.data.timings;

        document.getElementById("prayer-timings").innerHTML = `
            <div>Fajr: ${timings.Fajr}</div>
            <div>Dhuhr: ${timings.Dhuhr}</div>
            <div>Asr: ${timings.Asr}</div>
            <div>Maghrib: ${timings.Maghrib}</div>
            <div>Isha: ${timings.Isha}</div>
        `;
    } catch (error) {
        console.error("Error fetching prayer times:", error);
        document.getElementById("prayer-timings").innerHTML = `<p class="text-red-500">Failed to load prayer timings.</p>`;
    }
}

// GSAP Animations
document.addEventListener("DOMContentLoaded", () => {
    fetchPrayerTimings();

    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: 50, duration: 1.2, delay: 0.3 });
    gsap.from(".hero a", { opacity: 0, scale: 0.8, duration: 1.5, delay: 0.6 });

    gsap.utils.toArray(".section").forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
});

// Random Islamic Quotes
const quotes = ["The best among you are those who learn the Quran and teach it.", "Speak a good word or remain silent."];
document.getElementById("islamic-quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
