let baseUrl = "http://192.168.0.108:3001"
if (process.env.NODE_ENV === 'production') {
    baseUrl = ""
}
const apiUrls = {
    list: `${baseUrl}/list`,
    search: `${baseUrl}/list/`,
    add: `${baseUrl}/add`,
}
export default apiUrls