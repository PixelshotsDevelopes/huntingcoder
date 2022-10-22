// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//route is given below
//http://localhost:3000/api/blogs
import * as fs from 'fs'
export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allblogs = [];
 for (let index = 0; index < data.length; index++) {
  const item = data[index];``
    myfile = await fs.promises.readFile(('blogdata/' + item),"utf-8");
    allblogs.push(JSON.parse(myfile));
 }
 
    res.status(200).json(allblogs)

    // do baar piche jaane ke liye  ek ../ fir ek bar or ../ slash lagakar do bar piche jaya ja sakta hai

    // fs.promises.readdir("blogdata", (err, data)=>{
    //   console.log(data);
    //   let allblogs = [];
    //   data.forEach((item)=>{
    //     console.log(item);
    //     fs.readFile(('blogdata' + item),(d)=>{
    //       allblogs.push(d)
    //     })
    //   })
    //   res.status(200).json(allblogs)
    // })
  }