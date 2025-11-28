async function getMeme(){
    try {
        const res=await fetch("https://meme-api.com/gimme");
        const data=await res.json();

        document.getElementById("meme").src=data.url;
        console.log("Meme Image URL:",data.url);
    } catch (error) {
        console.log("error:",error);
        
    }
}


getMeme();