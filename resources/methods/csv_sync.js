import * as fs from 'fs'

export function readcsvasjson(path) {
    let file = fs.readFileSync(path, {encoding: "utf-8"})
    let f = file.split("\n")
    let keys = f[0].split(", ")
    for (let i = 1; i < f.length; i++) {
        let v = f[i].split(", ")
        console.log(v, keys)
        f[i] = {}
        for (let j = 0; j < keys.length; j++) {
            f[i][keys[j]] = v[j]
        }
    }
    return f
}

console.log(readcsvasjson("test.csv"))