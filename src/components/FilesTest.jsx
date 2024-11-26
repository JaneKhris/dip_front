import { useEffect, useState } from "react"


function FilesTest() {

    const [files, setFiles] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/files")
            .then((response) => response.json())
            .then(item => setFiles(item))
    }, [])

  return (
    <div>{files.map((file) => 
    <div key={file.id}>{file.name}</div>
    )}</div>
  )
}

export default FilesTest