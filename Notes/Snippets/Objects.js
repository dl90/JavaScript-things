/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
let facebookProfile = {
    name: "Don",
    friends: 0,
    messages: ["abc","def","ghi","dont use facebook"],
    
    addPost: function postMessage(message) {
        message = String(message);
        facebookProfile.messages.push(message);
    },
    deletePost: function deleteMessage(index) {
        if (index >= 0 && index <= this.messages.length) {
            facebookProfile.messages.pop(index);
        } else {
            console.error("Nice try, doesnt exist.");
        }   
    },
    addFriend: function addFriend() {
        while (this.friends === 0) {
            facebookProfile.friends = facebookProfile.friends + 1;
        }
    },
    removeFriend: function removeFriend() {
        if (friends > 0) {
            facebookProfile.friends = facebookProfile.friends - 1;
        } else {
            console.log("You have no friends to remove...");
        }
        
    }

};

console.log(facebookProfile.messages);
facebookProfile.addPost(32323);
console.log(facebookProfile.messages);
facebookProfile.deletePost(7);
console.log(facebookProfile.messages);
