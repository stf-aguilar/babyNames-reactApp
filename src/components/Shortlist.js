import React from 'react'

export default ({data, favourites}) => {
  const namesList = favourites.map(favourite => {
    const { name, sex } = data[favourite]
    return (
      <li key={favourite} className={sex}>{name}</li>
    )
  })
  return (
    <div className="favourites">
      <h4>Click on a name to shortlist it...</h4>
      {namesList}
    </div>
  )

}
