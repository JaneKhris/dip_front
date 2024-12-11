import React, { useEffect } from 'react'

function TooltipError(props) {

  useEffect(() => {


  }, [])


  return (
    <div className='tooltipp-error'>
      <div>{props.field} error!</div>
      <button onClick={props.handleOk}>Ok</button>
    </div>
  )
}

export default TooltipError