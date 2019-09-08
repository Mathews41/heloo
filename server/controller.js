const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    const {email, password} = req.body
    const {session} = req
    const db = req.app.get('db')
    const foundUser = await db.find_user([email])
    if(foundUser[0]){
        return res.status(409).send('you copycat pick another')

    }
    const passwordSalt = bcrypt.genSaltSync(15)
    const passwordHash = bcrypt.hashSync(password, passwordSalt)
    const newUser = await db.register_user([email,passwordHash])
    // const newUserPost = await db.create_new_post([newUser[0].id])
    delete newUser[0].password
    req.session.user = newUser[0]
    console.log(session,'sessions')
    res.status(200).send(newUser[0])

    
}
const login = async (req, res) => {
    const {email,password} = req.body
    // const {session} = req
    const db = req.app.get('db')
    const foundUser = await db.find_user([email])
    if(!foundUser[0]){
        return res.status(403).send('who dis')

    }
    const authedPassword = bcrypt.compareSync(password, foundUser[0].password)
    // const userPost = await db.get_user_post([foundUser[0].id])
    if(authedPassword){
        delete foundUser[0].password
        // req.session.user = userPost[0]
        console.log(foundUser[0],'users')
        
        res.status(200).send(foundUser[0])
    }else {
        res.status(401).send('dont you know your password fool')
    }
    }
    const logout = (req, res) => {

    }
    module.exports = {
        register,
        login,
        logout
    }
