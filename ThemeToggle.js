function Toggle() {
    if (document.getElementById("theme-button").innerText == '🌑') {
        document.getElementById("theme-button").innerText = '🌞';
        window.localStorage.setItem("isDark", 1);
    } else {
        document.getElementById("theme-button").innerText = '🌑';
        window.localStorage.setItem("isDark", 0);
    }

    document.querySelector("html").classList.toggle("dark");
}


if (parseInt(window.localStorage.getItem("isDark")) == 1) {
    document.querySelector("html").classList.toggle("dark");
    document.getElementById("theme-button").innerText = '🌞';
} else {
    document.getElementById("theme-button").innerText = '🌑';
}
