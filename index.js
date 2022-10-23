const btndaily = document.querySelector('#btndaily');
const btnmonthly=document.querySelector('#btnmonthly');
const btnweekly = document.querySelector('#btnweekly');

const hours = document.querySelectorAll('.hours');
const time = document.querySelectorAll('.time');
const title = document.querySelectorAll('#title');



//API on variable so is easier to pass the URL to the fetch 
const url ='https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json';


//function to pass to button listener to fetch information from API and shows it on the web
//Daily function
function daily(){
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        //this forEach to pass through every item on the array 
        data.forEach((element, i) => {
            title[i].innerHTML = data[i].title 
            hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs'
            time[i].innerHTML = 'Last Daily - ' + data[i].timeframes.daily.previous + 'hrs'
        })
     
    })
    .catch(error => console.error(error));

}
//Daily Weekly
function weekly(){
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        //this forEach to pass through every item on the array 
        data.forEach((element, i) => {
            title[i].innerHTML = data[i].title 
            hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs'
            time[i].innerHTML = 'Last Weekly - ' + data[i].timeframes.weekly.previous + 'hrs'
        })
    })
    .catch(error => console.error(error));

}
//Daily Monthly
function monthly(){
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        //this forEach to pass through every item on the array 
        data.forEach((element, i) => {
            title[i].innerHTML = data[i].title 
            hours[i].innerHTML = data[i].timeframes.monthly.current + 'hrs'
            time[i].innerHTML = 'Last Monthly - ' + data[i].timeframes.monthly.previous + 'hrs'
        })
    })
    .catch(error => console.error(error));

}

//btn Daily
btndaily.addEventListener('click', () => {
    btndaily.classList.add('active')
    btnweekly.classList.remove('active')
    btnmonthly.classList.remove('active')

    daily()
})

//btn Weekly
btnweekly.addEventListener('click', () => {
    btnweekly.classList.add('active')
    btndaily.classList.remove('active')
    btnmonthly.classList.remove('active')

    weekly()
})

//btn Monthly
btnmonthly.addEventListener('click', () => {
    btnmonthly.classList.add('active')
    btnweekly.classList.remove('active')
    btndaily.classList.remove('active')

    monthly()
})









