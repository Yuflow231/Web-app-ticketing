

export function getLanguage() {
    let lang = localStorage.getItem("language");

    // if none found set it do the default value, being english
    if (!lang) {
        lang = "en";
        localStorage.setItem("language", lang);
    }

    return lang;
}

export function setLanguage(lang) {
    localStorage.setItem("language", lang);
}
