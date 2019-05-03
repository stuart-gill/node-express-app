import { Router } from "express";
import uuidv4 from "uuid/v4";

const router = Router();

router.get("/", async (req, res) => {
  const users = await req.context.models.User.findAll();
  return res.send(users);
});

router.get("/:userId", async (req, res) => {
  const user = await req.context.models.User.findByPk(req.params.userId);
  return res.send(user);
});

router.post("/", async (req, res) => {
  const id = uuidv4();
  const user = await req.context.models.User.create({
    username: req.body.username,
    id
  });

  return res.send(user);
});

export default router;
