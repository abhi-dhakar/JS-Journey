   const arr = [1,2,3,4,5,6, true , "abhishek"]
  // console.log(arr[6]);
   
   const newarray = new Array(1,2,3,4)
   
  // console.log(newarray)

   newarray.push(5)

   //console.log(newarray.includes(4))
  // console.log(newarray.indexOf(4))

   const myarray = newarray.join()
  // console.log(myarray)

  // slice, splice

    const Array1 = [1,2,3,4,5,6,7,8]
    console.log("Orignal array ", Array1)

    //slice 
    const Array2 = Array1.slice(1,4)
    console.log("after slice" , Array2)
    console.log("Orignal array ", Array1)

    //splice
    const Array3 = Array1.splice(1,4)
    console.log("after splice" , Array3)
    console.log("Orignal array ", Array1)



    