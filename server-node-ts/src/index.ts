// ../src/index.ts
import express, { Router, Request, Response, NextFunction } from 'express';
// import router from './router/Auth';

import user from "./router/user";
const app = express();

app.use(express.json());	// request body를 express에서 json으로 받아 온다.

app.use('/user', user);

//
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.send('Hi! This is my first express server. My name is Woojinss.');
// });	// 문구 수정!!

app.listen('8000', () => {
  console.log(`
    #############################################
        🛡️ Server listening on port: 8000 🛡️
    #############################################    
    `)
})
