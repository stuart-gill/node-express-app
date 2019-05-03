import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import models, { sequelize } from "./models";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin("stuartgill")
  };
  next();
});

app.use("/session", routes.session); //must be below "context" line above, otherwise these routes don't know what their context is
app.use("/users", routes.user);
app.use("/messages", routes.message);

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createUsersWithMessages();
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});

//seeds the database
const createUsersWithMessages = async () => {
  await models.User.create(
    {
      id: "7",
      username: "stuartgill",

      messages: [
        {
          id: "first seeded message",
          text: "Just finished this killer app"
        }
      ]
    },
    {
      include: [models.Message]
    }
  );

  await models.User.create(
    {
      id: "9",
      username: "jbuffet",
      messages: [
        {
          id: "second seeded message",
          text: "Plants have feelings too"
        },
        {
          id: "third seeded message",
          text: "What an ignoramous!"
        }
      ]
    },
    {
      include: [models.Message]
    }
  );
};

export default app;
