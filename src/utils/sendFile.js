function sendFile(url,file) {
    const data = new FormData()
  
    data.append('document', file)
  
    return fetch(url, {
      method: 'POST',
      body: data,
    })
  }