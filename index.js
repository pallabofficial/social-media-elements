// console.log("fuck");

// let friendStatusses = document.querySelectorAll(".friend-status");
// let addRemoveButtons = document.querySelectorAll(".btn");


// addRemoveButtons.forEach((addRemoveButton, index) => {
//     let flag = 0;

//     addRemoveButton.addEventListener("click", () => {
//         document.querySelector("body").style.backgroundColor = "black";
//         if (flag === 0) {
//             friendStatuses[index].innerHTML = "friend";
//             addRemoveButton.innerHTML = "remove";
//             addRemoveButton.style.backgroundColor = "white";
//             addRemoveButton.style.color = "black";
//             flag = 1;
//         }
//     });
// });

let friendStatus = document.querySelector("#friend-1");
let friendButton = document.querySelector("#btn-1");
let flag = 0;
friendButton.addEventListener("click", ()=>{
    if(flag===0){
        friendStatus.innerHTML = "friend";
        friendButton.innerHTML = "remove";
        friendButton.style.color = "black";
        friendButton.style.backgroundColor = "white";
        friendButton.style.border = "1px solid black";
        flag=1;
    }
    else{
        friendStatus.innerHTML = "stranger";
        friendButton.innerHTML = "Add Friend";
        friendButton.style.color = "white";
        friendButton.style.backgroundColor = "rgb(73, 73, 226)";
        friendButton.style.border = "none";
        flag=0;
    }
    
})
