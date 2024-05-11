import axios from "axios";

export function captcha(access: string) {
    axios.post('http://localhost:3000/user/refresh',{
        token: access,
    }).then((res) => {
        //刷新 access token
        localStorage.setItem('access',res.data.access);
    }).catch((err) => {
        console.log(err)
    })
}