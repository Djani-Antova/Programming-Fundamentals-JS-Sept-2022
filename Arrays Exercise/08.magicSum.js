function magicSum(array, n) {

    let l = array.length;

    for (let i = 0; i < l; i++) {

        for (let j = i + 1; j < l; j++) {
            let currentSum = array[i] + array[j];
            if (currentSum === n) {
       
                console.log(`${array[i]} ${array[j]}`);
            }            
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)
