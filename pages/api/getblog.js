// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// below is the route for endpoint below 
// http://localhost:3000/api/getblog?slug=how-to-learn-javascript
import * as fs from 'fs'
export default function handler(req, res) {

  // do baar piche jaane ke liye  ek ../ fir ek bar or ../ slash lagakar do bar piche jaya ja sakta hai
  
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data)=>{
    if(err){
      res.status(500).json({error:"No such blog found"})
    }
    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data));
  })
}
