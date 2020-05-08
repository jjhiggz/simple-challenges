// this function does what you need it to
sortByXthenY = ( arrayOfObjects, keyX, keyY ) => {
  let sort1 = arrayOfObjects.sort((a,b) => a[keyX]-b[keyX])

  let groupings = []
  let distinctValues = []
  sort1.forEach(object => {
    if( !(distinctValues.includes(object[keyX])) ){
      distinctValues = [...distinctValues, object[keyX]]
    }
  })

  arrayOfGroupedObjects = distinctValues.map(value => {
    return sort1.filter(object => value === object[keyX])
  })
  
  arrayOfSortedGroupedObjects = arrayOfGroupedObjects.map(arrayOfObjects => {
    return arrayOfObjects.sort((a,b) => a[keyY] - b[keyY])
  })
  return arrayOfSortedGroupedObjects.flat()
}

//this proves it 
const arrayOfObjects = [
  {
      totalMisses: 0,
      secondsToComplete: 10,
  },
  {
      totalMisses: 2,
      secondsToComplete: 8,
  },
  {
      totalMisses: 0,
      secondsToComplete: 8,
  },
  {
      totalMisses: 4,
      secondsToComplete: 30,
  },
  {
      totalMisses: 5,
      secondsToComplete: 30,
  },
  {
      totalMisses: 4,
      secondsToComplete: 31,
  },

]
console.log(sortByXthenY(arrayOfObjects,'totalMisses','secondsToComplete'))
