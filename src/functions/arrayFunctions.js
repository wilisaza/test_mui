export const keyExists = (obj, key) => {
  if (obj[key] == undefined) {
    return false
  } else {
    return true
  }
}

export const valKeys = (obj, key, err) => {
  let countError = 0
  for (let i in key) {
    if (!keyExists(obj, key[i])) {
      countError++
      err[countError] = `No ${key[i]}`
    }
  }
  if (!countError) {
    return true
  } else {
    return false
  }
}
