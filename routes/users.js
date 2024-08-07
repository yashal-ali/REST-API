import express, { Router } from 'express'
import {USERDATA}from './../data/user.js'
import {v4 as uuidv4} from 'uuid'

const router=express.Router()

router.get('/',(req,res)=>{
    console.log('hello')
    res.send(USERDATA)
})

router.post('/',(req,res)=>{
    const user = req.body
    const userId=uuidv4()
    const userWithId={
        ...user,id:userId
    }
    USERDATA.push(userWithId)
    res.send ('post route reached')
})

router.get('/:id',(req,res)=>{
    
    const { id }=req.params
    console.log('id', id)
    const userFound=USERDATA.find((user)=>user.id===id)
    console.log('id', userFound)
    res.send(userFound)
})
// router.delete('/',(req,res,id)=>{
//    const deleteUser=USERDATA.find(id)
//    USERDATA.pop(deleteUser)

// })
export default router