function toggleInfo() {
    var infoContent = document.getElementById('infoContent');
    if (infoContent.style.maxHeight) {
        infoContent.style.maxHeight = null;
    } else {
        infoContent.style.maxHeight = infoContent.scrollHeight + "px";
    }
}