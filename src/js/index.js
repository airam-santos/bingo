
/*
const createCard=function(){
    const balls=createBalls();
    const card=[];
    for(let i=0;i<15;i++){
        card.push(balls.slice(0));
        _.pull(balls, balls.slice(0));
    }
    return card;
}
*/
const createCard=(items=15)=>{
    let balls= _.shuffle(_.range(1, 90));
    return balls.splice(0,15);
}
const showCard=function(element,card){
    for(let i=0;i<card.length;i++){
        const div = document.createElement('div');
        div.className = 'number';
        div.textContent = card[i];
        element.appendChild(div);
    }
}
const newNumber=()=>{
    let balls= _.shuffle(_.range(1, 90));
    const panel = document.querySelector('.panel');
    const number=balls[0];
    panel.textContent= 'number';
}



const playerCard = document.querySelector('.playerCard');
const playerBalls=createCard();
showCard(playerCard, playerBalls);
const computerCard = document.querySelector('.computerCard');
const computerBalls=createCard();
showCard(computerCard,computerBalls);