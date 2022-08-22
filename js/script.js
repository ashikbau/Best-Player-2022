const playerArray =[];

function display(playerProduct){
    // console.log(playerProduct);
    const playerCartlist = document.getElementById('player-cart');
    playerCartlist.innerHTML = "";
    for(let i = 0;i < playerProduct.length; i++){
        // console.log(playerArray[i].playerName);
        const player = playerArray[i].playerName;
        const tr = document.createElement('tr');
        tr.innerHTML =`
        <th>${i+1}</th>
        <td>${player}>             
    <td>Messi</td>`;


    playerCartlist.appendChild(tr);
    } 
    if(playerProduct.length > 5 ){
        alert('Player can not more than five');
    }

}

function addToPlayerList(element){
    // console.log(element.parentNode.children[0].innerText);
    // console.log(element.parentNode.children[1]);
    const playerName = element.parentNode.children[0].innerText;
    // console.log(playerName);
    
    const playerobj = {
        playerName : playerName
    }
    playerArray.push(playerobj);
    // console.log(playerobj);
    // console.log(playerArray);
    // console.log(playerArray.length);
    document.getElementById('player-cart').innerText = playerArray.length;
    display(playerArray);
}