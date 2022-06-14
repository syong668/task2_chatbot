AOS.init();

// 方案選擇
const caseBtn = document.querySelectorAll(".caseBtn")
const peopleCount = document.querySelector("#peopleCount")
const priceCount = document.querySelector("#priceCount")
const peopleCountPlus = document.querySelector("#peopleCountPlus")
const priceCountPlus = document.querySelector("#priceCountPlus")
let peopleNum = 10000
let priceNum = 600
let priceNumPlus = 1600

//問答區
const qaTitle = document.querySelectorAll(".qaTitle")
const qaContent = document.querySelectorAll(".qaContent")
const qaToggle = document.querySelectorAll(".qa-toggle")


$(document).ready(()=>{

    // top
    $("#toTop").on("click",(e)=>{
        e.preventDefault();
        $("html,body").animate({scrollTop: 0}, 700 );
    })

    // 方案費用選擇
    for( let i=0; i<$(".caseBtn").length; i++) {
        
        let selectTag = $($(".caseBtn")[i]).text();
        $($(".caseBtn")[i]).on("click", ()=> {
            $(".caseBtn").removeClass("btn-active-primary")
            if( selectTag == "10000位" ) {
                peopleNum = 10000
                priceNum = 600
                priceNumPlus = 1600
                $($(".caseBtn")[i]).addClass("btn-active-primary")
            }else if( selectTag == "15000位"){
                peopleNum = 15000
                priceNum = 1200
                priceNumPlus = 2000
                $($(".caseBtn")[i]).addClass("btn-active-primary")
            }else if( selectTag == "20000位" ) {
                peopleNum = 20000
                priceNum = 1500
                priceNumPlus = 2500
                $($(".caseBtn")[i]).addClass("btn-active-primary")
            }else if ( selectTag == "25000位" ) {
                peopleNum = 25000
                priceNum = 1700
                priceNumPlus = 3000
                $($(".caseBtn")[i]).addClass("btn-active-primary")
            }else if ( selectTag == ">25000位" ) {
                peopleNum = ">25000"
                priceNum = "洽客服"
                priceNumPlus = "洽客服"
                $($(".caseBtn")[i]).addClass("btn-active-primary")
            }

            $("#peopleCount,#peopleCountPlus").html(`${peopleNum}<span class="fs-12">&nbsp;位</span>`)
            $("#priceCount").html(`${priceNum}<span class="fs-12">&nbsp;TWD</span>`)
            $("#priceCountPlus").html(`${priceNumPlus}<span class="fs-12">&nbsp;TWD</span>`)
        })

        
    }

    // 問答區 摺疊選單
    for (let i = 0; i < $(".qaTitle").length; i++) {
        $($(".qaTitle")[i]).on("click", ()=>{
            $($(".qaContent")[i]).slideToggle("fast")
            $($(".qaTitle")[i]).toggleClass("text-primary text-bold")
            if ( $($(".qa-toggle")[i]).text() == "+") {
                $($(".qa-toggle")[i]).text("–")
            }else {
                $($(".qa-toggle")[i]).text("+")
            }
        })
    }


})