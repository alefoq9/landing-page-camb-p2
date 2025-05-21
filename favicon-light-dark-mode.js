function updateFavicon() {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const favicon = document.querySelector("link[rel='icon']");
    favicon.href = darkMode ? "favicon-dark.png" : "favicon-light.png";
}

// Atualiza o favicon ao carregar a página
updateFavicon();

// Observa mudanças no tema do sistema
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateFavicon);