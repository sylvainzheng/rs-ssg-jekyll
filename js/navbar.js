window.onscroll = function changeNavImage() {
    if (window.scrollY >= 100) {
        document.getElementById("nav-logo").src = "{{ '/img/axone_black.png' | prepend: site.baseurl | prepend: site.url }}";
    }
    else {
        document.getElementById("nav-logo").src = "{{ '/img/axone_white.png' | prepend: site.baseurl | prepend: site.url }}";
    }
}