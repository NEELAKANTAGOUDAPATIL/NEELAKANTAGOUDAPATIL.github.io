function ready() {

    setTimeout(function(){
        document.body.className += ' ' + 'loaded';
    }, 3000);

}

document.addEventListener("DOMContentLoaded", ready);
