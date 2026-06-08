// if 

if (true) {
    // console.log("This is true")

}

// *******************************checkblance********************************
let balance = 1000;

if (balance > 500) {
    // console.log("You have enough balance")
}else{
    // console.log("You don't have enough balance")
}

//********************************nesting*************************************

const balance1 = 1000;

if (balance1 > 500) {

   if (balance1 > 800) {
    // console.log("You have a lot of balance")
   }
   }else{
    // console.log("You don't have enough balance")
   }

//    *******************************else if***************************************

const balance2 = 1000;
if (balance2 > 1001) {
    console.log("You have a lot of balance")
} else if (balance2 > 500) {
    console.log("You don't have enough balance")
} else {
    console.log("You have a very low balance")
}
