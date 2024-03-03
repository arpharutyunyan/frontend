var close = document.querySelector('#message button');
if (close) {
    close.addEventListener('click', function () {
        document.querySelector('#message').style.display = 'none';
        window.history.replaceState(null, null, '/books')
    })
}