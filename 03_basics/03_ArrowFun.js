//This keyword and Arrow function...

const user={
    Username:"Pratyush",
    price:999,
    welcomemessage:function(){
        console.log(`${this.Username}, Welcome to website`);
    }
}

user.welcomemessage()
user.Username="Jimmy"
user.welcomemessage()