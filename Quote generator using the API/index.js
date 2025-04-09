
//QUOTE GENERATOR

const randomQuote = document.getElementById("randomQuote");
const newQuote = document.getElementById("newQuote");
const author = document.getElementById("author");


const fetchQuote = async()=>{
    try{
        const response = await fetch("https://api.quotable.io/random")
        const data = response.json();

        randomQuote.textContent = data[0].q;
        author.textContent = `- ${data[0].a}`;

        randomQuote.style.color = "blue"
        randomQuote.style.fontSize = "20px"
        randomQuote.style.display = "block";
        author.style.display = "block";
    }catch(error){
        console.error("Error fetching quote:", error);
        randomQuote.textContent = "I'M HAVING ERRORS WHILE CATCHING THE QUOTE NIGGER";
        randomQuote.style.color = "red";
    }
}

newQuote.addEventListener("click", fetchQuote)
