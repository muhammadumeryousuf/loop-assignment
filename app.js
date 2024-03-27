// // // // // //                 //  "Loop Assignment stats here"

// // // // // // // // Q no1
// // // // // // // let num = 5
// // // // // // // for(let i = 0; i<5 ; i++){
// // // // // // //     console.log("Hello world");
// // // // // // // }
// // // // // // // Qno3
// // // // // // // const userInput = +prompt('enter table number')
// // // // // // // const times = +prompt('How many time do you want?')

// // // // // // // for (let i = 1; i <= times; i++) {
// // // // // // //     console.log(`${userInput} * ${i} = ${userInput*i}`);
// // // // // // // }
// // // // // // // Q no2
// // // // // // for (let i = 1; i <= 100; i++) {
// // // // // //         console.log(i);
// // // // // //         for (let j = 1; j <= 10; j++) {
// // // // // //             console.log(`${i} * ${j} = ${i*j}`);
// // // // // //         }
// // // // // //     }

// // // // // // Qno 2
// // // // // // for (var input = 1; input <= 10; input++) {
// // // // // //     console.log(input);
// // // // // //    }

// // // // // // Qno 17
// // // // // for (var i = 0; i <= 20; i++) {
// // // // //     if (i % 2 === 0) {
// // // // //         console.log(i + ' is even');
// // // // //     } else {
// // // // //         console.log(i + ' is odd');
// // // // //     }
// // // // // }

// // // // // Qno 15

// // // // function multiplyAll(arr) {
// // // //     let product = 1;
// // // //     // Only change code below this line
// // // //     for (let i = 0; i < arr.length; i++) {
// // // //       console.log(arr[i]);
// // // //     }
// // // //     // Only change code above this line
// // // //     return product;
// // // //   }
  
// // // //   multiplyAll([[1,2],[3,4],[5,6,7]]);








// // // // Q no 12
// // // // let i=5
// // // // for(i=5;i<=100;i=i+5 )
// // // // {
// // // // console.log(i)
// // // // }
// // // //i++
// // // //i=i+1.



// // // // Qno 9
// // // function largestElement(arr) {
// // // 	let largestNum = arr[0];
// // // 	for (let i = 1; i < arr.length; i++) {
// // // 		if (arr[i] > largestNum) {
// // // 			largestNum = arr[i];
// // // 		}
// // // 	}
// // // 	return largestNum;
// // // }

// // // const num1 = [24, 53, 78, 91, 12];
// // // const result = largestElement(num1);

// // // console.log("The largest element in the array is:" + result);


// // // Qno 10
// // // the smallest number
// // const arr = [24, 53, 78, 91, 12]
// // const min = Math.min(...arr)
// // console.log(min)


// // Qno11
// // Function to find the smallest and largest number
// function smallestAndLargest(arr) {
//     if (arr.length === 0) {
//        return null; // Empty array case
//     }
 
//     let smallest = arr[0];
//     let largest = arr[0];
 
//     for (let i = 1; i < arr.length; i++) {
//        if (arr[i] < smallest) {
//           smallest = arr[i];
//        } else if (arr[i] > largest) {
//           largest = arr[i];
//        }
//     }
 
//     return { smallest, largest };
//  }
 
//  const nums = [24, 53, 78, 91, 12]
//  ;
//  const result = smallestAndLargest(nums);
//  console.log("Smallest:", result.smallest);
//  console.log("Largest:", result.largest);