const User = require('../modals/userSchema')


const register = async (req, res) => {
   

  const user = await User.create({...req.body})
  const token = user.createJWT()
  res.json({ user: { name: user.name }, token })
}


const login = async (req, res) => {
    const { email, password } = req.body
  
    if (!email || !password) {
      throw console.log('error');
    }
    const user = await User.findOne({ email })
    if (!user) {
      throw new console.log('eroor');
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
      throw new console.log("errrror");
    }
    // compare password
    const token = user.createJWT()
    res.json({ user: { name: user.name }, token })
  }


module.exports={register,login}