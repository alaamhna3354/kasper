// Start Header
window.addEventListener('click', function (e) {
    if (document.getElementById('toggle-menu').contains(e.target)) {
        document.getElementById('ul_links').classList.toggle('show');
    } else {

    }
});
document.getElementById('over-lay').onclick = (function () {
    document.getElementById('ul_links').classList.remove('show');
});
// animation width of skills
let sectionSlills = document.getElementById('skills');
let spans = document.querySelectorAll('.prog span');

window.onscroll = function () {
    if (window.scrollY >= sectionSlills.offsetTop) {
        spans.forEach((span) => {
            span.style.width = span.dataset.progress;
            span.classList.remove('zero')
        });

    }

};