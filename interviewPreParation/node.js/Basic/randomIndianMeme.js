async function getFace(){
    try {
        const res=await fetch("https://inshorts.deta.dev/news?category=all");
        const data=await res.json();

        document.getElementById("meme").src=data.data[0].imageUrl;
        console.log("Indian Meme Image URL:",data.data[0].imageUrl);
        
    } catch (error) {
        console.log("error:",error);
        
    }
}

getFace();