const apiMethods = {
    methods: {
        apiGet(url, data) {
            return new Promise((resolve, reject) => {
                axios.get(url, data).then((response) => {
                    resolve(response.data)
                }, (response) => {
                    reject(response)
                    console.log(response)
                    bus.$message({
                        message: '请求超时，请检查网络',
                        type: 'warning'
                    })
                })
            })
        },
        apiPost(url, data) {
            return new Promise((resolve, reject) => {
                axios.post(url, data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((response) => {
                    resolve(response.data)
                }).catch((response) => {
                    console.log('f', response)
                    resolve(response)
                    bus.$message({
                        message: '请求超时，请检查网络',
                        type: 'warning'
                    })
                })
            })
        }
    }
}

export default apiMethods