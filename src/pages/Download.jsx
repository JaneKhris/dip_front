import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Download() {
    const {str} = useParams()
    const handleDownload = () => {
        document.location.href = import.meta.env.VITE_PORT + `/storage/${str}`
      }
    
  return (
    <button onClick={handleDownload}>Download</button>
  )
}

export default Download