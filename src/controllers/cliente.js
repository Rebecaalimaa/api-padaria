const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const { createHash } = require('../middlewares/auth'); 
const create = async (req, res) => {
    try {
        let { nome, email, senha, telefone, endereco} = req.body;
        const senhaHash = await createHash(senha);
        const cliente = await prisma.cliente.create({
            data: {
                nome,
                email,
                senha: senhaHash,
                telefone,
                endereco
            }
        });

        return res.status(201).json(cliente);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};


const read = async (req, res) => {
    const cliente = await prisma.cliente.findMany();
    res.json(cliente);
}


const readOne = async (req, res) => {
    try {
        const cliente = await prisma.cliente.findUnique({
            where: {
                cliente_id: Number(req.params.id)
            }
        });
        return res.json(cliente);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    const { senhaAtual, novaSenha, nome, telefone, endereco } = req.body;
    const id = Number(req.params.id);

    try {
        // Buscar cliente atual
        const cliente = await prisma.cliente.findUnique({
            where: { cliente_id: id },
        });

        if (!cliente) {
            return res.status(404).json({ error: 'Cliente não encontrado.' });
        }

        // --- 🧩 Caso o cliente queira alterar a senha ---
        if (senhaAtual && novaSenha) {
            const senhaCorreta = await bcrypt.compare(senhaAtual, cliente.senha);
            if (!senhaCorreta) {
                return res.status(400).json({ error: 'Senha atual incorreta.' });
            }

            const senhaHash = await createHash(novaSenha);

            await prisma.cliente.update({
                where: { cliente_id: id },
                data: { senha: senhaHash },
            });

            return res.json({ message: 'Senha alterada com sucesso!' });
        }

        const clienteAtualizado = await prisma.cliente.update({
            where: { cliente_id: id },
            data: { nome, telefone, endereco },
        });

        return res.status(202).json(clienteAtualizado);
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
};

module.exports = {
    update,
};

const remove = async (req, res) => {
    try {
        await prisma.cliente.delete({
            where: {
                cliente_id: Number(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
};