let currentPlayer="X";
let count=0;
let statu=false;
let arr=Array(9).fill(null);
function checkWinner(){
    if(
        (arr[6]!==null && arr[6]==arr[7] && arr[7]==arr[8]) ||
        (arr[0]!==null &&arr[0]==arr[3] && arr[3]==arr[6]) ||
        (arr[3]!==null &&arr[3]==arr[4] && arr[4]==arr[5]) ||
        (arr[1]!==null &&arr[1]==arr[4] && arr[4]==arr[7]) ||
        (arr[2]!==null &&arr[2]==arr[5] && arr[5]==arr[8]) ||
        (arr[0]!==null &&arr[0]==arr[1] && arr[1]==arr[2]) ||
        (arr[0]!==null &&arr[0]==arr[4] && arr[4]==arr[8]) ||
        (arr[2]!==null &&arr[2]==arr[4] && arr[4]==arr[6])
    )
    {
        statu=true;
        document.write(`WINNER IS ${currentPlayer}`)
    }
}
function handleClick(el){
    count++;
    const id=Number(el.id);
    if(arr[id]!==null) return;
    arr[id]=currentPlayer;
    if(currentPlayer=="X") document.getElementById(`${id}`).style.color="RED"
    el.innerHTML=currentPlayer;
    checkWinner();
    currentPlayer=currentPlayer==="X"?"O":"X";
    if(count==9 && !statu) document.write("ITS A DRAW")
}