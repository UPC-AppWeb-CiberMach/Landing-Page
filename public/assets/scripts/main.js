// Función para alternar la clase "active" (opcional, si tienes alguna animación)
function AnimatedToggle() {
    let toggle = document.querySelector(".toggle");
    toggle.classList.toggle("active");
}

// Cargar archivo JSON con los textos traducidos
$.getJSON('public/assets/scripts/lang.json', function(json) {
    // Manejar el clic en los elementos de la clase "translate"
    $(function() {
        $('.translate').click(function(event) {
            event.preventDefault(); // Prevenir la acción por defecto del enlace

            // Obtener el idioma seleccionado
            let lang = $(this).attr('id');
            let currentLang = $('#languageDropdown').attr('data-current-lang');

            // Verificar si el idioma ya está seleccionado
            if (lang === currentLang) {
                return; // Si el idioma ya está seleccionado, no hacer nada
            }

            // Actualizar los textos según el idioma seleccionado
            $('.lang').each(function(index, element) {
                let key = $(this).attr('key');
                let placeholderExist = $(this).attr('placeholder');

                if (placeholderExist) {
                    $(this).attr('placeholder', json[lang][key]);
                } else {
                    $(this).text(json[lang][key]);
                }
            });

            // Actualizar el idioma actual en el data attribute
            $('#languageDropdown').attr('data-current-lang', lang);
        });
    });
});
