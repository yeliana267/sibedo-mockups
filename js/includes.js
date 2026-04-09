document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");

  includes.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    try {
      const response = await fetch(file);
      if (!response.ok) {
        throw new Error(`No se pudo cargar ${file} (${response.status})`);
      }
      const html = await response.text();
      el.innerHTML = html;
    } catch (error) {
      console.error("Error al cargar partial:", error);
      el.innerHTML = `<!-- Error: no se pudo cargar ${file} -->`;
    }
  });
});
