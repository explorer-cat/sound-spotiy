import express, { Router } from "express";
import { User } from "../module/user";

const router: Router = express.Router();

/**
 * @title 로그인 요청
 */
const user = new User('x','y','z');

router.get('/v1/users/login',(req,res,next) => {
    console.log('user',user)
})

export default router;
