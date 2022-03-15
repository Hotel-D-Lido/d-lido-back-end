const bcrypt = require("bcrypt");
const PublicUser = require("../models/public-user.model");

module.exports = class PublicUserController {
  async list(req, res, next) {
    const list = await PublicUser.findAll();
    res.send(list);
  }

  async get(req, res, next) {
    const id = req.params.id;
    const publicUser = await PublicUser.findByPk(id);
    res.send(publicUser);
  }

  async update(req, res, next) {
    const id = req.params.id;

    const {
      nombre,
      apellido_razon_social,
      fecha_nacimiento_constitucion,
      tipo_de_documento,
      codigo_de_documento,
      correo,
      numero_telefono,
      nombre_usuario,
      password,
    } = req.body;

    // TODO: Agregar validaciones
    if (!nombre) res.status(400).send({ message: "Nombre es requerido" });

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    const updateResult = await PublicUser.update(
      {
        nombre,
        apellido_razon_social,
        fecha_nacimiento_constitucion,
        tipo_de_documento,
        codigo_de_documento,
        correo,
        numero_telefono,
        nombre_usuario,
        password: hash,
      },
      {
        where: {
          cliente_id: id,
        },
      }
    );

    res.status(204).send(updateResult);
  }

  async create(req, res, next) {
    const {
      nombre,
      apellido_razon_social,
      fecha_nacimiento_constitucion,
      tipo_de_documento,
      codigo_de_documento,
      correo,
      numero_telefono,
      nombre_usuario,
      password,
    } = req.body;

    // TODO: Agregar validaciones
    if (!nombre) res.status(400).send({ message: "Nombre es requerido" });

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    const publicUser = await PublicUser.create({
      nombre,
      apellido_razon_social,
      fecha_nacimiento_constitucion,
      tipo_de_documento,
      codigo_de_documento,
      correo,
      numero_telefono,
      nombre_usuario,
      password: hash,
    });
    res.status(201).send(publicUser);
  }

  async delete(req, res, next) {
    const id = req.params.id;

    const destroyResult = await PublicUser.destroy({
      where: {
        cliente_id: id,
      },
    });

    // TODO: Agregar validaciones.
    if (destroyResult) {
      return res.sendStatus(204);
    }

    res.status(500);
  }
};
