function updateClock(zone, id) {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: zone }));
    const s = now.getSeconds() * 6;
    const m = now.getMinutes() * 6 + s / 60;
    const h = (now.getHours() % 12) * 30 + m / 12;

    document.getElementById(`sec-${id}`).style.transform = `rotate(${s}deg)`;
    document.getElementById(`min-${id}`).style.transform = `rotate(${m}deg)`;
    document.getElementById(`hour-${id}`).style.transform = `rotate(${h}deg)`;
}

setInterval(() => {
    updateClock("Europe/Berlin", "berlin");
    updateClock("America/New_York", "nyc");
}, 1000);