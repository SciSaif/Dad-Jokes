const joke = document.querySelector('#joke');
const btn = document.querySelector('#btn');
const loader = document.querySelector('.loader');
const dadJokes = document.querySelector('.dad-jokes');
const chuckNorris = document.querySelector('.chuck-norris');
const jokeArena = document.querySelector('.joke-arena');
const root = document.documentElement;
const secondPage = document.querySelector('.second-page');
const thirdPage = document.querySelector('.third-page');
const typeSelect = document.querySelector('#type');
const typeSelectBox = document.querySelector('.type-select-box');

let page = "Joke Arena";
let type = typeSelect.value;

const colors = [
    {"primary" :"#2a9d8f",
     "dark-primary": "#264653",
     "tertiary" : "#e9c46a", 
     "secondary" : "#f4a261",
     "dark-secondary" : "#e76f51"},

     {"primary" :"#457b9d",
     "dark-primary": "#1d3557",
     "tertiary" : "#a8dadc", 
     "secondary" : "#f1faee",
     "dark-secondary" : "#e63946"}];

const switchTheme  = (theme) => {
    root.style.setProperty('--primary', colors[theme].primary);
    root.style.setProperty('--dark-primary', colors[theme]["dark-primary"]);
    root.style.setProperty('--tertiary', colors[theme].tertiary);
    root.style.setProperty('--secondary', colors[theme].secondary);
    root.style.setProperty('--dark-secondary', colors[theme]["dark-secondary"]);
}

const getChuckJoke = async () => {
    try{
        const config = {headers: {accept: 'application/json',
        'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        'x-rapidapi-key': 'cd8fccb11cmshce49708fdfb89aap1aaf3bjsn4dce7cf0af34'}};
        const res = await axios.get('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', config);
        return res.data.value;
    } catch(e) {
        return "Sorry! We are having trouble fetching jokes for ya :(";
    }
}

const getDadJoke = async () => {
    try{
        const config = {headers: {Accept: 'application/json'}};
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch(e) {
        return "Sorry! We are having trouble fetching jokes for ya :(";
    }
}

const getRandomJoke = async () => {
    try{
        const res = await axios.get(`https://v2.jokeapi.dev/joke/${type}?type=single`);
        return res.data.joke
    } catch(e) {
        return "Sorry! We are having trouble fetching jokes for ya :(";
    }
}


const displayJoke = async () => {
    loader.classList.add('loader-active');
    let jokeText = "d";
    if(page == "Joke Arena"){
        jokeText = await getRandomJoke();
    }else if(page == "Dad Jokes"){
        jokeText = await getDadJoke();
    }else {
        jokeText = await getChuckJoke();
    }
    joke.innerHTML = jokeText;
    loader.classList.remove('loader-active');
}






  

displayJoke();

btn.addEventListener('click', ()=> {
    displayJoke();
})

typeSelect.addEventListener('change', () => {
    type = typeSelect.value;
})


secondPage.addEventListener('click', ()=> {
    if(secondPage.innerHTML == "Dad Jokes") {
        dadJokes.classList.remove('hidden');
        chuckNorris.classList.add('hidden');
        jokeArena.classList.add('hidden');
        typeSelectBox.classList.add('hidden');
        secondPage.innerHTML = page;
        page = "Dad Jokes";
        switchTheme(1);
    }else if(secondPage.innerHTML == "Joke Arena"){
        dadJokes.classList.add('hidden');
        chuckNorris.classList.add('hidden');
        jokeArena.classList.remove('hidden');
        typeSelectBox.classList.remove('hidden');
        secondPage.innerHTML = page;
        page = "Joke Arena";
        switchTheme(0);
    }else {
        dadJokes.classList.add('hidden');
        chuckNorris.classList.remove('hidden');
        jokeArena.classList.add('hidden');
        typeSelectBox.classList.add('hidden');
        secondPage.innerHTML = page;
        page = "Chuck Norris Jokes";
        switchTheme(0);
    }
    displayJoke();
    
});

thirdPage.addEventListener('click', ()=> {
    if(thirdPage.innerHTML == "Dad Jokes") {
        dadJokes.classList.remove('hidden');
        chuckNorris.classList.add('hidden');
        jokeArena.classList.add('hidden');
        typeSelectBox.classList.add('hidden');
        thirdPage.innerHTML = page;
        page = "Dad Jokes";
        switchTheme(1);
    }else if(thirdPage.innerHTML == "Joke Arena"){
        dadJokes.classList.add('hidden');
        chuckNorris.classList.add('hidden');
        jokeArena.classList.remove('hidden');
        typeSelectBox.classList.remove('hidden');
        thirdPage.innerHTML = page;
        page = "Joke Arena";
        switchTheme(0);
    }else {
        dadJokes.classList.add('hidden');
        chuckNorris.classList.remove('hidden');
        jokeArena.classList.add('hidden');
        typeSelectBox.classList.add('hidden');
        thirdPage.innerHTML = page;
        page = "Chuck Norris Jokes";
        switchTheme(0);
    }
    displayJoke();
    
});