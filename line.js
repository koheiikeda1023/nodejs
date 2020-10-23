const https = require("https")
const querystring = require("querystring")

const Token = "m7HYHKferSW2i5vGXppE0Arl1ysynIIpxMr0lN3YGrj"
const content = querystring.stringify({
    message: "俺はできた気がする"
})

const options = {
    hostname: "notify-api.line.me",
    path: "/api/notify",
    method: "POST",
    headers: {
        "Content-type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(content),
        "Authorization": `Bearer ${Token}`
    }
}

// export function hofe () {
//     const request = https.request(options, res => {
//         res.setEncoding("utf8")
//         res.on("data", console.log)
//         res.on("error", console.log)
//     })
    
//     request.write(content)
//     request.end()
//     return "success";
// }
