window.onscroll = function changeNavImage() {
    const url = "{{ site.url }}";
    const baseUrl = "{{ site.baseurl }}";
    const imgLight = "{{ site.data.content.en.nav-image-light }}";
    const imgDark = "{{ site.data.content.en.nav-image-dark }}";

    if (window.scrollY >= 100) {
        document.getElementById("nav-logo").src = url + baseUrl + imgDark;
    }
    else {
        document.getElementById("nav-logo").src = url + baseUrl + imgLight;
    }
}