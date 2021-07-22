const chirps = chirpStore.GetChirps()
let chirpArr: any [] = []

Object.keys.(chirps).map(key =>
    chirpArr.push({id: key, name:
    chirps[key].name,msg:
chirps[key].msg}))

chirpsArr.pop()