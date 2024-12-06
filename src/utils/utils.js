export function getSize(sizeInBytes) {
    if (sizeInBytes < 10**5) {
        return `${(sizeInBytes/10**3).toFixed(2)} KB`
    }
    else {
        return `${(sizeInBytes/10**6).toFixed(2)} MB`
    }

}