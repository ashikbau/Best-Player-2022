const playerArray =[];
const clickedAmount=[];

function display(playerProduct){
    // console.log(playerProduct);
    const playerCartlist = document.getElementById('player-cart');
    // playerCartlist.innerHTML = "";
    // console.log(playerProduct);

    if(playerProduct.length <= 5 ){
        for(let i = 0;i < playerProduct.length; i++){
            // console.log(playerArray[i].playerName);
            const player = playerArray[i].playerName;
            const tr = document.createElement('tr');
            tr.innerHTML =`
            <th>${i+1}</th>
            <td>${player}             
            </td>`;
    
    
        playerCartlist.appendChild(tr);
        
        // }
    }
   

}


    else {
        alert('Player can not more than five');
        console.log('player can not be more than five')
       
    }
    

}
// for button 

//     for(let i = 0;i < playerArray.length; i++){
//         // console.log(playerArray[i].playerName);
//         if(playerArray.length < 5){
//         playerArray.push();

//     }
// }











function addToPlayerList(element,id){
    clickedAmount.push('click')
    // console.log(element,id)
    // console.log(element.parentNode.children[0].innerText);
    // console.log(element.parentNode.children[1]);
    if(clickedAmount.length>5){
        document.getElementById(id).disabled=true

    }
   
   
    const playerName = element.parentNode.children[0].innerText;
//    console.log(id)
    // console.log(playerName);
    
    const playerobj = {
        playerName : playerName
    }
    if(playerArray.length < 5){
        playerArray.push(playerobj);
        document.getElementById('total-products').innerHTML= playerArray.length;
    }
    else{
        return
    }
    
    // console.log(playerobj);
    // console.log(playerArray);
    // console.log(playerArray.length);
    document.getElementById('player-cart').innerText = playerArray.length;
    display(playerArray);
    // if(playerArray.length ===isNaN){
    //     alert ('enter a valid number');
    // }
}

// Budget Calculation part start
document.getElementById('player-cart').addEventListener('click',function(){
    // console.log('player cart clicked');
})


document.getElementById('player-expense').addEventListener('click',function(){
   
    
    const playerAmount = getTextElementValueById('total-products');
    setTextElementValueById('total-products',playerAmount);

    const playerExpencesValue = getInputFieldValuebyId('player-field');
    const playerTotalExpences = playerExpencesValue * playerAmount;
    const playerTotalExpenseFieldValue = getTextElementValueById('playerTotal-expense');
    setTextElementValueById('playerTotal-expense',playerTotalExpences);
   
})
document.getElementById('calculate-field').addEventListener('click',function(){
//   
const playerAmount = getTextElementValueById('total-products');
    setTextElementValueById('total-products',playerAmount);

    const playerExpenseValue = getInputFieldValuebyId('player-field');
   const managerExpenseValue = getInputFieldValuebyId('manager-field');
   const coachExpenseValue = getInputFieldValuebyId('coach-field');

   const totalExpenseValue =( playerExpenseValue * playerAmount ) + managerExpenseValue + coachExpenseValue;
   const finalTotalValue = getTextElementValueById('final-total');
   setTextElementValueById('final-total',totalExpenseValue);

})




