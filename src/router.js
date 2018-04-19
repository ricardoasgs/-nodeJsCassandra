import express from "express";
import {
  initKeyspace,
  initTable,
  select,
  selectAll,
  insert, 
  update,
  deletar
} from "./controller";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Ok");
  });

  router.get("/initTable", initTable);

  router.get("/initKeyspace", initKeyspace);

  router.get("/consultar", selectAll);
  
  router.get("/consultar/:nome", select);
  
  router.post("/cadastrar", insert);
  
  router.put("/atualizar", update);

  router.delete("/deletar", deletar);

  export default router;