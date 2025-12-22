function getAnimalData(){
    //ten 10 random people
    fetch("https://randomuser.me/api/?results=10")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    
    })
}

