import { Request, Response } from "express";

class User {
    public x : string;
    protected z : string;
    private y : string;

    constructor(x : string, y : string, z : string) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

     userInfo(req: Request, res: Response, callback : (data : object) => void) {
        let response : object = {success : true};
      //  return new Promise((resolve,reject) => {
         callback(response);
       // })

    }
}



export { User };
