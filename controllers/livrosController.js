import Livro from "../models/Livro.js";

export const listarLivros = async (req, res, next) => {
  try {
    const livros = await Livro.findAll();
    res.status(200).json(livros);
  } catch (err) {
    next(err);
  }
};

export const buscarLivro = async (req, res, next) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado" });
    res.status(200).json(livro);
  } catch (err) {
    next(err);
  }
};

export const criarLivro = async (req, res, next) => {
  try {
    const { titulo, autor, anoPublicacao, descricao } = req.body;
    if (!titulo || !autor || !anoPublicacao) {
      return res
        .status(400)
        .json({ erro: "Campos obrigatórios não preenchidos" });
    }
    const livro = await Livro.create({
      titulo,
      autor,
      anoPublicacao,
      descricao,
    });
    res.status(201).json(livro);
  } catch (err) {
    next(err);
  }
};

export const atualizarLivro = async (req, res, next) => {
  try {
    const { titulo, autor, anoPublicacao, descricao } = req.body;
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado" });

    await livro.update({ titulo, autor, anoPublicacao, descricao });
    res.status(200).json(livro);
  } catch (err) {
    next(err);
  }
};

export const removerLivro = async (req, res, next) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado" });

    await livro.destroy();
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
