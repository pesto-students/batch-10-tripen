## auth api

/signup ( signupcontroller ) - send user details in req.body
                             - returns { user: { ...userdata, token } } 
/signin ( signincontroller ) - send user details in req. body
                             - returns { user: { ...userdata, token } }

## user api

/ ( getUser, updateUser, deleteUser ) - for logged in user

/ GET ( getUser ) - send token as authorization header ( bearer token ) in req.headers
                  - returns { user: { ...userData } }
/ PUT ( updateUser ) -  send token as authorization header ( bearer token ) in req.headers
                     - returns { user: { ...userData } }
/ DELETE ( deleteUser ) -  send token as authorization header ( bearer token ) in req.headers
                        - returns { user: { ...userData} }