let database = [
    {
        username: 'Sofi',
        password: 'open'
    },
    {
        username: 'Naoki',
        password: 'japan'
    },
];

let newsfeed = [
    {
        username: "Alex", 
        timeline: "My journey never ends",
    }, 
    {
        username: "Bob", 
        timeline: "Japan is beautiful"
    },
];

//let username = prompt('Please enter your name');
//let password = prompt('Please enter your password');

//function logIn(username, password) {

//}

function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    

    database.forEach((user) => {
        if(username == user.username && password == user.password) {
            alert('Successful');
            window.location = 'welcome.html'; 
            return false;
        } 
    })
   

}