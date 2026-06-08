for (let i = 0; i <=10; i++) {
    // console.log(i); 
}

for (let i = 0; i <=10; i++) {
    let element =i;
    if (element == 5) {
        // console.log("Element is 5");
    }
    // console.log(element);
}

for (let i = 1; i <=10; i++) {
    let element =i;
    // console.log(`outer loop start ${element}`);
    for (let j = 1; j <=10; j++) {
        let element2 = j;
//   console.log(i + '*' + j + '=' + element*element2);
    }}


    // ***************************break and continue***********************

for (let i = 1; i <=10; i++) {
    if (i == 5) {
        //  console.log("DETECTED 5");
        break;
    }
        // console.log(i);
}

for (let i = 1; i <=10; i++) {
    if (i == 5) {
         console.log("DETECTED 5");
        continue;
    }
        console.log(i);
}