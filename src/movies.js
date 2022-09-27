// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors = moviesArray.map((eachDirector) => {
        return eachDirector.director
    })
    return allDirectors
}
       
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let movieSpielberg = moviesArray.filter((eachMovie) => {
        if (eachMovie.director === "Steven Spielberg") {
            return true
        } else {
            return false
        }
    }) 
    console.log(movieSpielberg)


    

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let avgAllMovies = moviesArray.reduce((acc, eachMovie) => {
        if (eachMovie.score === undefined) {
            return acc
        } else if (moviesArray === []) {
            return 0
        } else {
        let finalAvg = Number(eachMovie.score)
        return acc + finalAvg
    }
}, 0)
let totalAvg = avgAllMovies / moviesArray.length
return Number(totalAvg.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let allDramas = moviesArray.map((eachMovieDrama) => {
        return eachMovieDrama.genre
    })

    console.log(allDramas)


    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let cloneArr = structuredClone(moviesArray)

    let orderedMovies = cloneArr.sort((elem2, elem1) => {
        if (elem2.year > elem1.year) {
            return 1
        } else if (elem2.year < elem1.year) {
            return -1
        } else {
            return 0
        }
    })

    return orderedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let cloneArr = structuredClone(moviesArray)

    let firstMovies = cloneArr.sort((elem2, elem1) => {
        if (elem2.title > elem1.title) {
            return 1
        } else if (elem2.title < elem1.title) {
            return -1
        } else {
            return 0
        }
    })
    let onlyTitle = firstMovies.map((eachTitle) => {
        return eachTitle.title
    })
    return onlyTitle.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


