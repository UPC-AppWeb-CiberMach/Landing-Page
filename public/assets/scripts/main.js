function AnimatedToggle() {
    let toggle = document.querySelector(".toggle");
    toggle.classList.toggle("active");
}

$.getJSON('public/assets/scripts/Idioma.json', function(json) {
    $(function() {
        $('.translate').click(function(event) {
            event.preventDefault();

            let lang = $(this).attr('data-lang');

            let currentLang = $('[data-current-lang]').attr('data-current-lang');

            if (lang === currentLang) {
                return;
            }

            $('.lang').each(function(index, element) {
                let key = $(this).attr('key');
                let placeholderExist = $(this).attr('placeholder');

                if (placeholderExist) {
                    $(this).attr('placeholder', json[lang][key]);
                } else {
                    $(this).text(json[lang][key]);
                }
            });
            $('[data-current-lang]').attr('data-current-lang', lang);
        });
    });
});
