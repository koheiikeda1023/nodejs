const https = require("https")
const querystring = require("querystring")
const axios = require("axios");

const Token = "m7HYHKferSW2i5vGXppE0Arl1ysynIIpxMr0lN3YGrj"
const content = querystring.stringify({
    message: "俺はできた気がする"
})

const notify = {
    method: 'post',
    url: 'https://notify-api.line.me/api/notify',
    headers: {
      Authorization: `Bearer ${Token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: content,
}

exports.notify = () => {

}