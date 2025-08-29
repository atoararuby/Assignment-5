
let historyContainer = document.getElementById("history-container");

// heart icon increment
 let heartCount = document.getElementById("heart-count");
 let heartIcons = document.querySelectorAll(".heart-icon"); 
 for(let Icon of heartIcons){
    Icon.addEventListener('click', function(){
        let currentCount =  Number(heartCount.innerText);
        heartCount.innerText = currentCount + 1;
    })}

// call button
let coinsCount = document.getElementById("coins")
let callBtns = document.querySelectorAll(".callBtn")
for(let btn of callBtns){
    btn.addEventListener('click', function(e){

        let currentCoins = Number(coinsCount.innerText);
         if(currentCoins <20){
            alert('You have not enough coins. You need more than 20 coins to call')
            return;
        }

        let parent = e.target.parentNode.parentNode;
        let name = parent.children[1].innerText;
        // console.log(parent.children);
        let hotlineNumber = parent.children[3].innerText;

        const dateTime= new Date().toLocaleTimeString()

        // console.log(name, hotlineNumber);
        alert(`Calling ${name} ${hotlineNumber}...`);

        coinsCount.innerText = currentCoins - 20;

        
        const div = document.createElement("div");
        div.innerHTML = `
          <div class='flex flex-col sm:flex-row  sm:items-center gap-2 justify-between mt-5 rounded-lg shadow-sm w-full bg-[#FAFAFA] sm:px-3 px-2 py-3'>
            <div class="flex flex-col gap-2 w-full">
            <h3 class='text-xl font-semibold py-1'>${name}</h3>
            <h4 class="text-sm text-gray-600">${hotlineNumber}</h4>
            </div>

            <div class='text-[13px] mt-1 sm:mt-0'>
            ${dateTime}
            </div>
            </div>
        `
        historyContainer.appendChild(div);
    })
}



document.getElementById('clear-btn').addEventListener('click',function () {
    historyContainer.innerHTML=''
})




const copyBtn=document.querySelectorAll('.copy-btn')

let copyCount=document.getElementById('copy-count')

let copyCountNum=parseInt(copyCount.innerText)

for (const btn of copyBtn) {
    btn.addEventListener('click',function(){
        const hotlineNumberCpy=btn.closest('.card').querySelector('.hotline-number').innerText

        navigator.clipboard.writeText(hotlineNumberCpy)
        alert("Copied: " + hotlineNumberCpy)
         
        copyCount.innerText=copyCountNum += 1
        
    })
}
