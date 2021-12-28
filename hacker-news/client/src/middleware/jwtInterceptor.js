const checkTokenExpirationMiddleware = store => next => action => {
    const token =
       JSON.parse(localStorage.getItem("token"));
    if (jwtDecode(token).exp < Date.now() / 1000) {
       next(action);
       localStorage.clear();
    }
    next(action);
 };