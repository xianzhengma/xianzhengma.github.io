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

    const base = 'assets/pub/2026/physis-lang/';
    const demos = [
        ['collision', 'contact and collision'],
        ['wetting', 'wetting and deformation'],
        ['tearing', 'tearing under tension'],
        ['shadows', 'motion and shadows'],
        ['compression', 'deformation under load']
    ];
    let current = 0;

    video.addEventListener('ended', function () {
        current = (current + 1) % demos.length;
        const [name, description] = demos[current];
        video.src = base + name + '.mp4';
        video.poster = base + name + '.jpg';
        video.setAttribute('aria-label', 'Physis-Lang demo: ' + description);
        video.load();
        const playback = video.play();
        if (playback) playback.catch(function () {});
    });
});
