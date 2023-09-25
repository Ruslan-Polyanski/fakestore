import { cookie } from '../cookie';

const getToken = async (name: string, pass: string) => {
  const response = await fetch('https://fakestoreapi.com/auth/login', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: name,
        password: pass
      })
  })

  if(response.ok) {
    const res = await response.json();
    const userInfo = JSON.stringify({
        username: name,
        password: pass, 
        token: res.token,
        status: true,
      })
    cookie.set('user', userInfo)
  }
}

const getAuth = async () => {
  const result: any = cookie.get('user'); // Доработать типы!!!
 
  if(result){
    const name: string = result.username;
    const pass: string = result.password;
    await getToken(name, pass)
  }

}

export { getToken, getAuth }

// username: mor_2314
// password: 83r5^_