import { Router } from "express"
import * as apiController from "../controllers/apiController"

const router = Router()

router.get("/ping", apiController.ping)

router.get("/random")

router.get("/nome/:nome", apiController.nome)

// inserir uma frase
router.post("/frases", apiController.createPhrase)
// buscar todas as frases
router.get("/frases", apiController.listPhrases)

//pegar frase aleatoria
router.get("frase/aleatoria", apiController.randomPhrase)

//buscar frase especifica
router.get("/frase/:id", apiController.getPhrase)
// atualizar dados da frase
router.put("/frase/:id", apiController.updatePhrase)
//deletar frase
router.delete("/frase/:id", apiController.deletePhrase)

export default router

// error cors => {
// bloqueia a requisicao de uma url para outra diferente
// }
