const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        req.body.valor_total = req.body.preco_unitario * req.body.quantidade;

        const item = await prisma.item_Pedido.create({
            data: req.body
        });
        return res.status(201).json(item);
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
};

const read = async (req, res) => {
    const item = await prisma.item_Pedido.findMany();
    return res.json(item);
};

const readOne = async (req, res) => {
    try {
        const item = await prisma.item_Pedido.findUnique({
            where: {
                item_id: Number(req.params.id)
            }
        });
        return res.json(item);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const item = await prisma.item_Pedido.update({
            where: {
                item_id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(item);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        await prisma.item_Pedido.delete({
            where: {
                item_id: Number(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
};