import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

let prisma = new PrismaClient()

export default async function handler(req, res) {
  	if (req.method === 'POST') {
	    const hpassword = bcrypt.hashSync(req.body.fpassword, '$2a$10$CwTycUXWue0Thq9StjUM0u') 
  		const newUser = await prisma.user.create({
	  		data: {
				secret:   hpassword,
	    		name: 	  req.body.fname +" "+req.body.lname,
	    		email:    req.body.email,
	    		phone:    req.body.fmobile,
	  		},
		})
		res.send("<html><head><title>Desai Gold - User Created Successfully</title></head><body style='color:black;background:white'><h2 style='text-align:center'>User Created Successfully ...</h2></body></html>");

  } else {
  	res.send("<html><head><title>Desai Gold - Method Not Alloweded</title></head><body style='color:black;background:white'></body></html>")
  }
}