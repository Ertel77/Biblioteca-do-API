import express from "express";
import sequelize from "./config/database.js";
import errorHandler from "./middlewares/errorHandler.js";
import livrosRoutes from "./routes/livros.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/livros", livrosRoutes);

app.use(errorHandler);

sequelize
  .sync()
  .then(() => {
    console.log(" Banco sincronizado com sucesso!");
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" Erro ao conectar no banco:", err);
  });
