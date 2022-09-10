import React from 'react'

function Links(props) {
  return (
    <div id='links'>
      <h3><strong>Links</strong></h3>
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  )
}

export default Links;