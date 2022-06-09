
// 方案選擇
const caseBtn = document.querySelectorAll(".caseBtn")
const peopleCount = document.querySelector("#peopleCount")
const priceCount = document.querySelector("#priceCount")
const peopleCountPlus = document.querySelector("#peopleCountPlus")
const priceCountPlus = document.querySelector("#priceCountPlus")
let peopleNum = 10000
let priceNum = 600
let priceNumPlus = 1600
caseBtn.forEach((el) => {
    el.addEventListener('click',() => {
        caseBtn.forEach((el) => {el.classList.remove("btn-active-primary")})
        if(el.innerText == "10000位"){
            peopleNum = 10000
            priceNum = 600
            priceNumPlus = 1600
            el.classList.add("btn-active-primary")
            
        }else if(el.innerText == "15000位") {
            peopleNum = 15000
            priceNum = 1200
            priceNumPlus = 2000
            el.classList.add("btn-active-primary")

        }else if(el.innerText == "20000位") {
            peopleNum = 20000
            priceNum = 1500
            priceNumPlus = 2500
            el.classList.add("btn-active-primary")

        }else if(el.innerText == "25000位") {
            peopleNum = 25000
            priceNum = 1700
            priceNumPlus = 3000
            el.classList.add("btn-active-primary")

        }else if(el.innerText == ">25000位") {
            peopleNum = 25000
            priceNum = "洽客服"
            priceNumPlus = "洽客服"
            el.classList.add("btn-active-primary")
        }

        peopleCount.innerHTML = `${peopleNum}<span class="fs-12">&nbsp;位</span>`
        priceCount.innerHTML = `${priceNum}<span class="fs-12">&nbsp;TWD</span>`
        peopleCountPlus.innerHTML = `${peopleNum}<span class="fs-12">&nbsp;位</span>`
        priceCountPlus.innerHTML = `${priceNumPlus}<span class="fs-12">&nbsp;TWD</span>`
    })

})


//問答區
const qaTitle = document.querySelectorAll(".qaTitle")
const qaContent = document.querySelectorAll(".qaContent")
const qaToggle = document.querySelectorAll(".qa-toggle")
qaTitle.forEach((el,key) => {
    el.addEventListener('click', () => {
        qaContent[key].classList.toggle("quContentToggle");
        qaTitle[key].classList.toggle("text-primary")
        if( qaContent[key].getAttribute("class").indexOf("quContentToggle") >-1 ) {
            qaToggle[key].innerText = "–"
        }else {
            qaToggle[key].innerText = "+"
        }
    })
})