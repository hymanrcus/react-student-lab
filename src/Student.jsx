import React from 'react';
import Scores from './Score'

const Student = (props) => {
  return(
    <>
      <div>
        <h1 className="name">{props.name}</h1>
        <p className="bio">{props.bio}</p>
      </div>
      <Scores
        scores={props.scores}
      />
    </>
  )
}

export default Student