$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

    const yesBtn = document.querySelector('#yesBtn');

    yesBtn.addEventListener('click',function () {
        alert('Muy bien, así se responde amorcito, ya nos vemos prontito ❤')
    });

    const noBtn = document.querySelector('#noBtn');

    noBtn.addEventListener('mouseover', function () {
        const randomX =parseInt(Math.random()*500);
        const randomY =parseInt(Math.random()*500);
        noBtn.style.setProperty('top',randomY+'%');
        noBtn.style.setProperty('left',randomX+'%');
        noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
    })

})