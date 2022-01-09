const joke = document.querySelector('#joke');
const btn = document.querySelector('#btn');
const loader = document.querySelector('.loader');


const displayJoke = async () => {
    loader.classList.add('loader-active');
    const jokeText = await getJoke();
    console.log(jokeText);
    joke.innerHTML = jokeText;
    loader.classList.remove('loader-active');
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
