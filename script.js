 // function to get innerText
    function getInnerText(id){
        const element = document.getElementById(id);
        const elementValue = element.innerText;
        const elementValueNumber = parseInt(elementValue);
        return elementValueNumber;
    }

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
        // console.log(name, hotlineNumber);
        alert(`Calling ${name} ${hotlineNumber}...`);

        coinsCount.innerText = currentCoins - 20;

       let historyContainer = document.getElementById("history-container");
        historyContainer.innerText = ""
        const div = document.createElement("div");
        div.innerHTML = `
          <div>
            <div>
            <h3>${name}</h3>
            <h4>${hotlineNumber}</h4>
            </div>
            </div>
        `
        historyContainer.appendChild(div);
    })
}