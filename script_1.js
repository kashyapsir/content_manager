// JavaScript to allow content editing
document.getElementById('content').addEventListener('click', function() {
    let content = prompt('Edit the content:', this.innerHTML);
    if (content !== null) {
        this.innerHTML = content;
    }
});

document.getElementById('content2').addEventListener('click', function() {
    let content = prompt('Edit the content:', this.innerHTML);
    if (content !== null) {
        this.innerHTML = content;
    }
});