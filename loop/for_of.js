let arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);

    if (num == 3) {
        console.log("Number is 3");
        break;
    }
}
