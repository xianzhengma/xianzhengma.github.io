$(function () {
    $('.lazy').Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        visibleOnly: true,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        }
    })
    $('[data-toggle="tooltip"]').tooltip()
})

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('physis-demo-video');
    if (!video) return;

    const options = document.querySelectorAll('.physis-demo-option');
    options.forEach(function (option) {
        option.addEventListener('click', function () {
            if (option.getAttribute('aria-pressed') === 'true') return;

            video.pause();
            video.src = option.dataset.src;
            video.poster = option.dataset.poster;
            video.setAttribute('aria-label', option.dataset.label);
            video.load();
            video.play().catch(function () {});

            options.forEach(function (button) {
                button.setAttribute('aria-pressed', String(button === option));
            });
        });
    });
});
