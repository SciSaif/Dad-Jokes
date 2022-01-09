const joke = document.querySelector('#joke');
const btn = document.querySelector('#btn');


const displayJoke = async () => {
    const jokeText = await getJoke();
    console.log(jokeText);
    joke.innerHTML = jokeText;
}

const getJoke = async () => {
    try{

        const config = {headers: {Accept: 'application/json'}};
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch(e) {
        return "Sorry! We are having trouble fetching jokes for ya :(";
    }
}

displayJoke();

btn.addEventListener('click', ()=> {
    displayJoke();
})
