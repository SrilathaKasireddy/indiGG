import express from "express";
import { getAllTournaments, getTournamentById, 
  deleteTournamentById, updateTournamentById,
   createNewTournaments } from 
"./Helper.js";

const router =express.Router();


router.get('/', async function
 (request, response) {
    
    
    const tournaments= await getAllTournaments(request);
    response.send(tournaments);
    })
  
  router.get('/:id', async function (req, res) {
  const {id} = req.params;
  console.log("id is : ", id);
        
  const tournament= await getTournamentById(id);
  console.log(tournament);
  tournament?res.send(tournament):res.status(404).send({msg:"tournament not found"});
    })
  
    router.delete('/:id',async function (req, res) {
      const {id} = req.params;
            
      const result= await deleteTournamentById(id);
      result.deletedCount>0?res.send({msg:"tournament deleted successfully"}):
      res.status(404).send({msg:"item not found"});
        })
  
  router.put('/:id', async function (req, res) {
    const {id} = req.params;
    const data=req.body;
          
    const result= await updateTournamentById(id, data);
    res.send(result);
      })
  
  
  router.post('/',async function (req, res) {
    const data=req.body;
    console.log(data)  
    const result=await createNewTournaments(data);
      res.send(result);
      console.log(result)
    })

    export const tournamentsRouter=router;
  