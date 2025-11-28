async function getFace(){
    try {
        const res=await fetch("https://randomuser.me/api/");
        const data=await res.json();

        document.getElementById("meme").src=data.results[0].picture.large;
        console.log("Face Image URL:",data.results[0].picture.large);
    } catch (error) {
        console.log("error:",error);
        
    }
}