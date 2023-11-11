const back = document.getElementById('back');
back.addEventListener('click', ()=>{
    if(window.history.length > 1){
        window.history.back();
    }
});

const next = document.getElementById('next');
next.addEventListener('click', ()=>{
    if(window.history.length > 1){
        window.history.forward();
    }
});

try {
    const get_info = document.getElementById('get_info');
    if(get_info){
        get_info.addEventListener('click', ()=>{
            const printInfo = {
                'width': window.screen.width,
                'availWidth': window.screen.availWidth,
                'height': window.screen.height,
                'availHeight': window.screen.availHeight,
            };

            printHtml(printInfo);
        });
    }
}catch (e){
    console.log(e);
}


const reload = document.getElementById('reload');
reload.addEventListener('click', ()=>{
    window.location.reload();
});