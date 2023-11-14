const back = document.getElementById('back');
back.addEventListener('click', () => {
    if (window.history.length > 1) {
        window.history.back();
    }
});

const next = document.getElementById('next');
next.addEventListener('click', () => {
    if (window.history.length > 1) {
        window.history.forward();
    }
});

try {
    const get_info = document.getElementById('get_info');
    if (get_info) {
        get_info.addEventListener('click', () => {
            const printInfo = {
                'width': window.screen.width,
                'availWidth': window.screen.availWidth,
                'height': window.screen.height,
                'availHeight': window.screen.availHeight,
            };

            printHtml(printInfo);
        });
    }
} catch (e) {
    console.log(e);
}


const reload = document.getElementById('reload');
reload.addEventListener('click', () => {
    window.location.reload();
});

function getCurrentTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minute = minute < 10 ? '0' + minute : minute;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minute}:${seconds}`;
}

const timerId = setInterval(() => {
    let currentTime = getCurrentTime();
    let timer = document.getElementById('timer');
    if (timer) {
        timer.textContent = currentTime;
    }
}, 1000);

const timerStop = document.getElementById('timer__stop');
if (timerStop) {
    timerStop.addEventListener('click', () => {
        clearInterval(timerId);
    });
}

const openWindow = document.getElementById('open_window');
if (openWindow) {
    openWindow.addEventListener('click', () => {
        let size = prompt('Input number with format 200x200', '200x200');
        const pattern = /^[1-9]\d{0,2}x[1-9]\d{0,2}$/;
        if (pattern.test(size)) {
            const [width, height] = size.split('x').map(item => parseInt(item));
            if (width >= 1 && width <= 999 && height >= 1 && height <= 999) {
                const top = Math.round((window.screen.availHeight / 2) - height / 2);
                const left = Math.round((window.screen.availWidth / 2) - width / 2);
                window.open('', 'testTab', `width=${width} height=${height} top=${top} left=${left}`);
            } else {
                alert('Size should be in range 1-999');
            }
        } else {
            alert('Invalid format!');
        }
    });
}