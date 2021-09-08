function getMissingNo(a, n) {
  let total = Math.floor(((n + 1) * (n + 2)) / 2);
  for (let i = 0; i < n; i++) total -= a[i];
  return total;
}

// Driver Code

let arr = [1, 2, 4, 5, 6];
let n = arr.length;
console.log(n);
let miss = getMissingNo(arr, n);
console.log(miss);


/* find all missing numbers from unsorted unordered array

function findAllMissing(a){
    let diff=a[0];
    let n=a.length;

    let temp=[];

    for( let i=0; i<n; i++){
        if(a[i] -i != diff){
            while(diff < a[i]-i){
                temp.push(i+diff);
                diff++
            }
        }
    }
    console.log(temp)
}

findAllMissing([6,7,9,11]);

*/
