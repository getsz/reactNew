const urls = {
    "production": "",
    "dev": "http://127.0.0.1:8080/jg/lpageconn/"
}

const host = process.env.NODE_ENV === "production" ? urls.production : urls.dev;

export default host;