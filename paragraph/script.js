const toggleBtn = document.getElementById('toggleBtn');
const paragraph = document.getElementById('paragraph');

toggleBtn.addEventListener('click', function() {
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
        toggleBtn.textContent = 'Hide Paragraph';
    } else {
        paragraph.style.display = 'none';
        toggleBtn.textContent = 'Show Paragraph';
    }
});