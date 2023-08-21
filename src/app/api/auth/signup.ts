import { error } from "console";
import connectMongo from "../../../lib/conn";
import Users from "../../../../model/Schema";
import {hash} from "bcryptjs"
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req : NextApiRequest, res:NextApiResponse){
    connectMongo().catch(error => res.json({error:"Connnection failed..!"}))



    if(req.method == "POST"){
        if(!req.body) return res.status(404).json({error:"Dont have form data"});
        const {firstname, lastname, email, password} = req.body;

        //check duplicate users

        const checkexisiting = await Users.findOne({email});
        if(checkexisiting) return res.status(422).json({message: "User alreasy Exists..!"})


        Users.create({firstname, lastname, email, password : await hash(password, 12)}, function(err:any,data:any){
            if(err) return res.status(400).json({err})
            res.status(201).json({status:true, user: data})
        })


    }else{
        res.status(500).json({message: "HTTP method not valid only POST method valid"})
    }
}