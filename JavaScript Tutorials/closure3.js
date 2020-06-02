function counter(initial, delta){
    return{
        up(){
            initial +=delta
            console.log(initial)
        },
        down(){
            initial -=delta
            console.log(initial)
        }
    }
}

count = counter(10,2)
count.up()
count.up()
count.down()
