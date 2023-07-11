import asyncHandler from 'express-async-handler'

import appUser from '../models/appUserModel.js'



// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const postAppUser = asyncHandler(async (req, res) => {

  const { name, email, subject, message} = req.body


  const user = await appUser.create({
    name,
    email,
    subject,
    message,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      subject: user.subject,
      message: user.message,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})


// @desc    Get app users
// @route   get /api/appUsers
// @access  Public
const getAppUsers = asyncHandler(async (req, res) => {
  const users = await appUser.find({})
  if(users){
    res.status(200).json({
      message: "App users fetched successfully",
      users: users
    })
  }else{
    res.status(400)
    throw new Error('Get request failed')
}
})


export {
  postAppUser,
  getAppUsers,

}



