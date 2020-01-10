const isAuthenticated = auth => {
   // Change this to true/false to toggle manual login/logout
   console.log(auth)
   return true
}

// TODO:
function login() {
   isAuthenticated(true)
}
function logout() {
   isAuthenticated(false)
}

export default isAuthenticated

export { login, logout }
