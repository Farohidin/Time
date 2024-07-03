const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sek = document.querySelector('.s'),
    hourNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes');


function clock() {
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours()

    sek.style.transform = "rotate(" + seconds * 6 + "deg)"
    min.style.transform = `rotate(${minutes * 6}deg)`
    hour.style.transform = `rotate(${hours * 30}deg)`
    setTimeout(() => { clock() }, 1000);

    hourNum.innerHTML = hours < 10 ? '0' + hours : hours
    minNum.innerHTML = minutes < 10 ? '0' + minutes : minutes
}

clock()



const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem');



tabsItem.forEach((tab, i) => {
    tab.addEventListener('click', (e) => {
        e.preventDefault()
        tabsItem.forEach((tabs, j) => {
            tabs.classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        });
        tab.classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
})



const stopWatch = document.querySelector('.stopwatch__btn'),
    chas = document.querySelector('.stopwatch__hours'),
    minut = document.querySelector('.stopwatch__minutes'),
    seck = document.querySelector('.stopwatch__seconds');


stopWatch.addEventListener('click', () => {
    if (stopWatch.innerHTML == 'start') {
        secundamer()
        stopWatch.innerHTML = 'stop'
    } else if (stopWatch.innerHTML == 'stop') {
        clearTimeout(timer);
        stopWatch.innerHTML = 'clear'
    } else if (stopWatch.innerHTML == 'clear') {
        stopWatch.innerHTML = 'start'
        chas.innerHTML = 0
        minut.innerHTML = 0
        seck.innerHTML = 0
    }
})

function secundamer() {
    timer = setTimeout(() => {
        seck.innerHTML++
        secundamer()
    }, 1000);

    if (seck.innerHTML == 59) {
        minut.innerHTML++
        seck.innerHTML = 0
    } else if (minut.innerHTML == 59) {
        chas.innerHTML++
        minut.innerHTML = 0
    } else if (chas.innerHTML == 59) {
        clearTimeout(timer)
    }
}












// new Date()  Komputerdagi vaqtni olib beradi
// getHours() - soatni olib beradi
// getMinutes() - minutni olib beradi
// getSeconds() - secundni olib beradi


// for (let i = 0; i < tabsItem.length; i++) {
//     tabsItem[i].addEventListener('click', (e) => {
//         e.preventDefault()
//         for (let j = 0; j < tabsItem.length; j++) {
//             tabsContentItem[j].classList.remove('active')
//             tabsItem[j].classList.remove('active')
//         }
//         tabsContentItem[i].classList.add('active')
//         tabsItem[i].classList.add('active')
//     })
// }