// This is my attempt at a secondary sort. I was helping a friend with a project, and this was the solution I helped him come up with

// In his circumstance he had to return scores for a scoreboard on a trivia app he made. He wanted the return to primarily sort by number of incorrect answers (from least to greatest) then to sort secondarily based off of the time that it took to complete the trivia. Thiswas the result I came up with 

sortByKeyXThenByKeyY = ( arrayOfObjects, keyX, keyY ) => {
  const sort1 = arrayOfObjects.sort((a,b) => a[keyX]-b[keyX])

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
    return arrayOfObjects.sort( (a,b) => a[keyY] - b[keyY] )
  })
  return arrayOfSortedGroupedObjects.flat()
}

//this is just some test data
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
console.log(sortByKeyXThenByKeyY(arrayOfObjects,'totalMisses','secondsToComplete'))
