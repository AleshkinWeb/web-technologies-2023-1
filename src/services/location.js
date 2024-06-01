const url = new URL(window.location.href)

const location = {
    index: () => {
        window.location.href = url.origin + '/web-technologies-2023-1/index.html'
    },
    login: () => {
        window.location.href = url.origin + '/web-technologies-2023-1/login.html'
    },
    reg: () => {
        window.location.href = url.origin + '/web-technologies-2023-1/reg.html'
    },
    user: () => {
        window.location.href = url.origin + '/web-technologies-2023-1/user.html'
    }
}

export default location