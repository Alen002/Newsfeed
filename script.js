let database = [
    {
        username: 'Sofie',
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



function validate() {
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    database.forEach((user) => {
        if (user.username === username && user.password === password) {
            value = 1;
        } 
    })
    console.log(value)
    loginMessage(value); // Callback 
} 

function loginMessage() {
    if (value > 0 ) {
        alert('Login successful');
    } else {
        alert('Login NOT successful');
    }
}




