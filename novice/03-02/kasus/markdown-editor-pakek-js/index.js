const textarea = document.getElementById('input');
const compiledMarkdown = document.getElementById('compiledMarkdown');

textarea.addEventListener('keyup', _.debounce(function (e) {
    console.log(textarea.value);
    compiledMarkdown.innerHTML = marked(textarea.value);
  }, 300));
