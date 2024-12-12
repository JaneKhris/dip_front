import React, { useEffect } from 'react'

function TooltipError(props) {

  useEffect(() => {
  }, [])

  return (
    <div className='notification'>
      <div>{props.field}</div>
      <button onClick={props.handleOk}>Ok</button>
    </div>
  )
}

export default TooltipError