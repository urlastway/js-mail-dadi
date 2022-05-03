//Insert user email
const list = document.querySelector(".list");
const mail = String(prompt("Inserisci la tua mail per la verifica"));
console.log(list)
//Verificated lists
const userList = ["test", "burger@gmail.com", "salsiccia@gmail.com", "ciccione@gmail.com"]
//Controll the access list
for(let i = 0; i < 1; i++) {
    if (userList.includes(mail)) {
        //Write the approved massagge
        list.innerText = "verificated";
    }
    else{
        console.log("user is not verificated");
    }
}
//Generate a random namber for user from 1 to 6
const userNumber = Math.floor((Math.random() * 6) + 1);
console.log(userNumber);
//Generate a random namber for PC from 1 to 6
const pcNumber = Math.floor((Math.random() * 6) + 1);
console.log(pcNumber);
//Check the biggest number and check the winner

    if (userNumber < pcNumber){
        console.log("hai perso");
    }

    else if (userNumber > pcNumber){
        console.log("hai vinto");
    }
    else {
        console.log("pari");
    }
