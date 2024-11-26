import React from 'react'
import { useLoaderData, Await } from 'react-router-dom';
import { useEffect, useState } from "react"



function Files() {
  // const { files } = useLoaderData()

  const [files, setFiles] = useState([])

  useEffect(() => {
      fetch("http://localhost:8000/api/files")
          .then((response) => response.json())
          .then(item => setFiles(item))
  }, [])



  return (
    // <div>Hello</div>
    <div className="posts">
      <h1>Files page</h1>
      <ul className="posts__item">
        {files.map((file) =>
          <li className='file_item' key={file.id}>{file.name}</li>
        )}
      </ul>
    </div>

  )
}

export default Files