const db = require("../config/db");
const { verifyPostExist } = require("../querys");

const verifyPostExistMiddleware = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (id) {
      const values = [id];
      const query_result = await db.query(verifyPostExist, values);
      const post = query_result.rows[0];

      if (!post) {
        return res.status(400).json({
          status: "Bad Request",
          message: "El ID no existe",
        });
      } else {
        req.data = {
          postExist: true,
          post,
        };
        next();
      }
    } else {
      return res.status(400).json({
        status: "Bad Request",
        message: "El ID es requerido",
      });
    }
  } catch (error) {
    next(error);
  }
};

const insertPostMiddleware = async (req, res, next) => {
  const { titulo, url, descripcion } = req.body;

  try {
    if (!titulo || !url || !descripcion) {
      return res.status(400).json({
        status: "Bad Request",
        message: "Debe ingresar los parametros",
      });
    
    }
    next();
  }
    catch (error){
      next(error);
    }
};
module.exports = {
  verifyPostExistMiddleware,
  insertPostMiddleware,
};
