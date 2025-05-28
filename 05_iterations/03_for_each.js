// for each loop

const arr1 = [10,11,12,13,14,15]

// arr1.forEach( function (val){  // callback function
//     console.log(val)
// })

// arr1.forEach( (item) => {
//     console.log(item)
// })

// function printme(item){
//     console.log(item)
// }

// arr1.forEach(printme)

  arr1.forEach((item , index ,arr1) => {
    console.log(item , index , arr1)
  })


  const mycoding = [
        {
            languageName: "javascript",
            languagefilename: "js"
        },
        {
            languageName: "C++",
            languagefilename: "cpp"
        },
        {
            languageName: "python",
            languagefilename: "py"
        }
  ]

  mycoding.forEach((item) => {
    console.log(item.languageName)
  })

