import jwt from 'jsonwebtoken';

async function loginRequest() {
    try {
      await fetch('http://localhost/htdocdev/ritab/src/server/registerlogin/TestJWT2withchatgtp/jwtcreate.php', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((respose) => {
          if (respose.ok) {
            return respose.json()
          }
          throw new Error('error')
        })
        .then((data) => {
          if (data.status) {
            localStorage.setItem('token', data.status)
            navigate('/')
          } else {
            //set error
          }
        })
    } catch (error) {
      console.log(error.message)
    }
  }


const token = '';// get token from response or local storage
const secretKey = "secret_key";

try {
  const decodedToken = jwt.verify(token, secretKey);
  // token is valid, do something with decoded data
} catch (err) {
  // token is invalid, handle error
}
