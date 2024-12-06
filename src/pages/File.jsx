import React from 'react'
import { useLoaderData } from 'react-router-dom'

function File() {
  const handleDownload = () => {
    fetch(import.meta.env.VITE_PORT + '/preview/')
      .then(res => res.blob())
      .then(item => {
        console.log(item)
        const file = new File([item], "newfile.pdf", { type: item.type, lastModified: Date.now() })
        console.log(file)
  })
      // .then(item => {
      //   console.log(typeof(item))
      //   // var img = document.createElement('img');
      //   // img.src = btoa(item);
      //   // document.body.appendChild(img);
      // })
  }




  return (
    <>
      File
      <button onClick={handleDownload}>Download</button>
      <a href="http://localhost:8000/api/download/" download="UnleashedKraken.pdf">Скачать</a>
      <a href="http://localhost:8000/api/preview/" download="UnleashedKraken.pdf">Смотреть</a>

    </>
  )
}

export default File