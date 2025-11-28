async function getDog(){
    try {
        const res=await fetch("https://dog.ceo/api/breeds/image/random");
        const data=await res.json();

        document.getElementById("dog").src=data.message;
        console.log("Dog Image URL:",data.message);
        
    } catch (error) {
        console.log("error:",error);

    }
}