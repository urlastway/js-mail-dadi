//Insert user email
const list = document.querySelector(".list");
//

const winner = document.querySelector(".winner");
const user__number = document.querySelector(".user__number");
const pc__number = document.querySelector(".pc__number");

const mail = String(prompt("Inserisci la tua mail per la verifica"));
console.log(list)

//Verificated list
const userList = ["test", "burger@gmail.com", "salsiccia@gmail.com", "ciccione@gmail.com"]
//

const btn = document.getElementById("btn");

//Controll the access list

for(let i = 0; i < 1; i++) {
    
    if (userList.includes(mail)) {
        //Write the approved massagge
        list.innerText = "verificated";
              
        btn.addEventListener("click", 
        function(){
        //Generate a random namber for user from 1 to 6
        const userNumber = Math.floor((Math.random() * 6) + 1);
        console.log(userNumber);
        user__number.innerText = userNumber;
        
        //Generate a random namber for PC from 1 to 6
        const pcNumber = Math.floor((Math.random() * 6) + 1);
        console.log(pcNumber);
        pc__number.innerText = pcNumber;
        //Check the biggest number and check the winner

        if (userNumber < pcNumber){
            winner.innerText = "hai perso";
        }

        else if (userNumber > pcNumber){
            winner.innerText = "hai vinto";
        }
        else {
            winner.innerText = "pari";
        }
    });
    }
    else{
        list.innerText = "user is not verificated";
        btn.addEventListener("click", 
        function(){
            winner.innerText = "You can not generate numbers becouse you are not verificated";
        });
    }
}