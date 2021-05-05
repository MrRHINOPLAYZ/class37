class Player{
    constructor (){
this.index=0
    }
getCount(){
    var playerRef=database.ref ('playerCount')
    playerRef.on('value',(data)=>{
        playerCount=data.val()
    })
}
updateCount(count){
    database.ref('/').update({
      playerCount:count  
    })
}
}