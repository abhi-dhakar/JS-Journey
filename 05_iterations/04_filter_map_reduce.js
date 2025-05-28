//filter 
const arr1 = [1,2,3,4,5,6,7,8]
const result = arr1.filter((item) => (item >= 4 )) // return

console.log(result)
// for each not return value



// map

const result2 = arr1
.map( (item) => {    // map also return
    return item*5;
})
.map( (item) => item+1)
.filter( (item) => item > 20) // chaining
console.log(result2)



// reduce
const reduceResult = arr1.reduce((acc , item) => {
    console.log(`acc = ${acc} and item = ${item}`)
   return acc + item
} ,0)
//console.log(reduceResult);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let publishResult = books.filter((book) => book.publish >= 2000 )
  //console.log(publishResult);

  let editionResult = books.filter((book) => book.edition == 2008)
  console.log(editionResult);

  let bestBook = books.filter( ( book ) => {
    return book.genre == 'Fiction' && book.publish >= 1900
        }
    )

