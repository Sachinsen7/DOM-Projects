let addFriend = document.querySelector('#add')
let remove = document.querySelector('#remove')

let friends = document.querySelector(".friends")

var check = 0;

addFriend.addEventListener('click', function(){
    if (check == 0) {
        addFriend.innerHTML = 'Friends'
        addFriend.style.backgroundColor = "silver"
        addFriend.style.color = "black"
        console.log("click Ho Gya");
        friends.innerHTML = "51 friends"
        check = 1
    } else {
        addFriend.innerHTML = "Add Friend"
        addFriend.style.backgroundColor = "#125B9A"
        addFriend.style.color = "white"
        friends.innerHTML = "50 friends"
        check = 0
    }
    
})