export function onSearchGenresList(data) {
  let genres = localStorage.getItem('genres');
  if (!genres) {
    return
  }
  genres = JSON.parse(genres);
  
  let newData = { ...data }
  newData.results = data.results.map(elem => {
   
    let genreID = elem.genre_ids.map(item => {

      let tmp = genres.find(genr => genr.id === item )
      return tmp.name
    })

    if (genreID.length <= 3) {
            genreID = genreID.join(', ').split(',')
        }
        if (genreID.length >= 3) {
            genreID = genreID.slice(0, 2)
            genreID.push(' Other')
        }
        
        if (genreID.length === 0) {

            genreID = ["No genre"]
    }
    
    elem.genre_ids = genreID

    return elem
  })
  
  return newData;
}

export function onSearchYear(data) {
  let newYear = {...data}
  newYear.results = newYear.results.map(elem => {
    if (elem.release_date) {
      elem.release_date =  elem.release_date.split('-')[0];
    } else {
     elem.release_date = 'No date'
    }
 return elem
  })
return newYear

}