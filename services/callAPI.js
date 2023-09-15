function CallAPI() {
    return axios({
        method: 'get',
        url: `https://shop.cyberlearn.vn/api/Product`
    })

}
function getSP(id) {
    return axios({
        method: 'get',
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`
    })
}