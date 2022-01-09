const joke = document.querySelector('#joke');
const btn = document.querySelector('#btn');
const loader = document.querySelector('.loader');
const switchPage = document.querySelector('.switch-Page');
const headerMain1 = document.querySelector('.header-main');
const headerMain2 = document.querySelector('.header-main2');

let page = "dad jokes";


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
    

const displayJoke = async () => {
    loader.classList.add('loader-active');
    let jokeText = "d";
    if(page == "dad jokes"){
        jokeText = await getDadJoke();
    }else {
        jokeText = await getChuckJoke();
        console.log(jokeText);
    }
    joke.innerHTML = jokeText;
    loader.classList.remove('loader-active');
}




  

displayJoke();
// getJoke2();

btn.addEventListener('click', ()=> {
    displayJoke();
})


switchPage.addEventListener('click', ()=> {
    if(page == "dad jokes") {
        page = "chuck jokes";
        headerMain1.classList.add('hidden');
        headerMain2.classList.remove('hidden');
        switchPage.innerHTML = "Dad Jokes";
    }else {
        page = "dad jokes";
        headerMain2.classList.add('hidden');
        headerMain1.classList.remove('hidden');
        switchPage.innerHTML = "Chuck Norris Jokes";
    }
    displayJoke();
    
});