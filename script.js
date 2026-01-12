let lang = "en";

function toggleLanguage() {
    lang = lang === "en" ? "hi" : "en";

    document.querySelectorAll("[data-en]").forEach(el => {
        el.innerText = el.getAttribute("data-" + lang);
    });

    document.querySelector(".lang-btn").innerText =
        lang === "en" ? "हिंदी" : "English";
}