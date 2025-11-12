const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    await prisma.cliente.createMany({
        data: [
            {
                "nome": "Pedro Duarte",
                "email": "pedro@gmail.com",
                "senha": "$2b$10$la/3O.jB6HmAwvKexz9DeO4hdJk.vqaR0oh2gqn22jX.5c1uWNLzi",
                "telefone": "19971348235",
                "endereco": "Rua Itapira, 504, Roseira de Cima, Jaguariuna"
            },
            {
                "nome": "Passberg",
                "email": "Passberg@email.com",
                "senha": "$2b$10$Kg3rP4F/gk45BBIIK.wCU.j0lksJZGeRnqoq9b86/rd/NdjcNGhd2",
                "telefone": "(19) 12548-0854",
                "endereco": "Rua do medo, 1234, São Paulo, SP"
            },
            {
                "nome": "Pedro henrique de oliveira",
                "email": "pedroOliveira@gmail.com",
                "senha": "$2b$10$7vg7TEwNzrjDRJPNHSVjNea/.puLN6AB8ATsNtKrDotww47kWui1q",
                "telefone": "222222222222",
                "endereco": "lalalalalalalal"
            },
            {
                "nome": "helio alves",
                "email": "wlotignewils@example.com",
                "senha": "$2b$10$LDV6q728/6cgMuMGm/jmSOGcATD54BuZdUu2Wf4/vZMhJ52kTuJCe",
                "telefone": "222222222222",
                "endereco": "lalalalalalalal"
            },
            {
                "nome": "Dinho",
                "email": "dinhosenai@gmail.com",
                "senha": "$2b$10$1zUAe1CeaXt4AgKU2vmwSuooy82uXoaPs2agtJVh.Xndo891bi9GC",
                "telefone": "(22)22222-2222",
                "endereco": "lalalalalalalal"
            },
            {
                "nome": "Steffany Souza",
                "email": "Steffanyabsoluta@gmail.com",
                "senha": "$2b$10$6m8mzG4Pueghqp2OooptgejSb3o0MauII2t58lGpALm0PaRiOKCze",
                "telefone": "19999087612",
                "endereco": "Rua das amoreiras"
            },
            {
                "nome": "Luis",
                "email": "luis@email.com",
                "senha": "$2b$10$sgep4oROzuoeuZLYk4IenuTYxq4DQSpTaBdLsIkAA6O/F7yZ2yQ5O",
                "telefone": "(19)99999-9999",
                "endereco": "Rua que só sobe"
            },
            {
                "nome": "joao",
                "email": "joao1@gmail.com",
                "senha": "$2b$10$AUvtDaaZzHc0XdjlJYDJl.Md8CSCoEotBB9t4S68ZVKf5i/QZ56x.",
                "telefone": "12111121111",
                "tipo": "Admin",
                "endereco": "rua dos pobre"
            },
            {
                "nome": "rebeca Limaaaa",
                "email": "rebeca@gmail.com",
                "senha": "$2b$10$lc5Q.bk.u0Vr6SWWGDM/aOLdJQ.vL6Ts75r1ay3jtYinCOyVaCkIi",
                "telefone": "(19) 99999-1597",
                "tipo": "Admin",
                "endereco": "Rua da Consolação",
            },
            {
                "nome": "pedro henrique",
                "email": "pedrohenrique@gmail.com",
                "senha": "$2b$10$dTaizXEkQAnKfG9tfsxjJuzZH4nWw1m8tNmXUZK8Jrh.gaOAZSaPy",
                "telefone": "19999998888",
                "endereco": "floripa"
            }
        ],
    })

    await prisma.produto.createMany({
        data: [
            {
                "nome": "Pão de Forma Artesanal",
                "preco": 7,
                "descricao": "Feito com ingredientes selecionados, perfeito para sanduíches.",
                "qtd_estoque": 40,
                "imagem": "https://amopaocaseiro.com.br/wp-content/uploads/2019/12/pao-de-forma-caseiro_02.jpg"
            },
            {
                "nome": "Pão Francês",
                "preco": 0.8,
                "descricao": "Pão crocante por fora e macio por dentro, ideal para o café da manhã.",
                "qtd_estoque": 10,
                "imagem": "https://http2.mlstatic.com/D_NQ_NP_943531-MLB44632741305_012021-O.webp"
            },
            {
                "nome": "Pão de Milho",
                "preco": 7.5,
                "descricao": "Pão macio com sabor leve de milho, ótimo para lanches.",
                "qtd_estoque": 20,
                "imagem": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlyHXG96ub2OIaffwR4wkrY7n1Vsah_Vwsbyj7z1qdcoo7b7hZ"
            },
            {
                "nome": "Pão de Leite",
                "preco": 6,
                "descricao": "Pão fofinho e levemente adocicado, ideal para o lanche da tarde.",
                "qtd_estoque": 25,
                "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSzqOnLVmrwuABVboJ0riLUVd7KIDFQf4hYwFfdradboaXy-s"
            },
            {
                "nome": "Pão de Alho Assado",
                "preco": 3.5,
                "descricao": "Clássico pão de alho assado, crocante e saboroso.",
                "qtd_estoque": 20,
                "imagem": "https://nacozinhareceitas.com.br/wp-content/uploads/2024/09/pc3a3o-de-alho.jpg.webp"
            },
            {
                "nome": "Enrolado de Salsicha",
                "preco": 5.5,
                "descricao": "Salsicha envolta em massa macia, também conhecido como doguinho.",
                "qtd_estoque": 35,
                "imagem": "https://i.pinimg.com/474x/44/b8/d1/44b8d1fe492cf9c03a3da67e4cda7921.jpg"
            },
            {
                "nome": "Pastel de Forno (Carne ou Frango)",
                "preco": 6.5,
                "descricao": "Pastel assado com recheio saboroso de carne ou frango.",
                "qtd_estoque": 15,
                "imagem": "https://i.pinimg.com/736x/15/02/9a/15029a676681611c2889030f39cbc938.jpg"
            },
            {
                "nome": "Mini Pizza de Calabresa",
                "preco": 7,
                "descricao": "Massa macia com molho, queijo e calabresa fatiada.",
                "qtd_estoque": 20,
                "imagem": "https://receitinhasdemae.com.br/wp-content/uploads/2024/12/maxresdefault-5-500x375.jpg"
            },
            {
                "nome": "Misto Quente Artesanal",
                "preco": 8,
                "descricao": "Pão artesanal com presunto e queijo derretido na chapa.",
                "qtd_estoque": 22,
                "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQD8Z2MICJo9XaB2n_MgXDG1cC8nsawvuSnYqYfkfnVnD5wJt"
            },
            {
                "nome": "Café Expresso (50ml)",
                "preco": 4,
                "descricao": "Café expresso intenso, extraído na hora.",
                "qtd_estoque": 15,
                "imagem": "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2024/06/cafe-expresso-ou-espresso.jpg?quality=70&strip=info&w=414&h=280&crop=1"
            },
            {
                "nome": "Suco Natural (300ml)",
                "preco": 5,
                "descricao": "Suco natural da fruta, sem conservantes.",
                "qtd_estoque": 10,
                "imagem": "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2025/05/07/597x330/1_istock_540519504-34404267.jpg"
            },
            {
                "nome": "Bala Halls",
                "preco": 2.5,
                "descricao": "Bala refrescante para hálito puro e fresco.",
                "qtd_estoque": 1,
                "imagem": "https://supermercadocarioca.com.br/wp-content/uploads/2020/04/halls.png"
            },
            {
                "nome": "Bala de Iogurte",
                "preco": 0.5,
                "descricao": "Bala macia com sabor suave de iogurte.",
                "qtd_estoque": 1,
                "imagem": "https://phygital-files.mercafacil.com/catalogo/uploads/produto/bala_recheio_iogurte_de_morango_dori_yogurte100_pacote_100g_0baa27eb-e366-43ab-9141-06faac16ca44.png"
            },
            {
                "nome": "Tic Tac",
                "preco": 3,
                "descricao": "Balas refrescantes em embalagem prática.",
                "qtd_estoque": 1,
                "imagem": "https://gkpb.com.br/wp-content/uploads/2023/06/tic-tac-menta-fresh2-1.jpeg"
            },
            {
                "nome": "Fatia Hungaras",
                "preco": 3,
                "descricao": "Pao doce delicioso com coco e creme",
                "qtd_estoque": 10,
                "imagem": "https://www.receiteria.com.br/wp-content/uploads/fatias-hungaras-veganas.jpg"
            },
            {
                "nome": "Pão de Calabresa com Queijo",
                "preco": 9,
                "descricao": "Pão recheado com calabresa e queijo, sabor marcante e irresistível.",
                "qtd_estoque": 20,
                "imagem": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSjo-EumQC5sVKX_sH-D-xAlpM5pcOG0kbw2yG3_Lg1EuZbXVqt"
            },
            {
                "nome": "Nutella",
                "preco": 15,
                "descricao": "Um creme de avelã delicioso",
                "qtd_estoque": 30,
                "imagem": "https://superprix.vteximg.com.br/arquivos/ids/167916-600-600/Creme-de-Avela-com-Cacau-Nutella-140g.jpg?v=636093975453830000"
            },
            {
                "nome": "Água Mineral (500ml)",
                "preco": 3,
                "descricao": "Se hidrate em todos os momentos",
                "qtd_estoque": 10,
                "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7lEsflcT3jIjbKL0_rvnsaA_pMSOGda-GsQ&s"
            },
            {
                "nome": "Cappuccino Cremoso (200ml)",
                "preco": 6,
                "descricao": "Bebida cremosa com café, leite e chocolate.",
                "qtd_estoque": 5,
                "imagem": "https://http2.mlstatic.com/D_NQ_NP_820087-MLB81012674488_122024-O.webp"
            },
            {
                "nome": "Chá Quente (200ml)",
                "preco": 3.5,
                "descricao": "Chá quente, ideal para relaxar a qualquer hora.",
                "qtd_estoque": 3,
                "imagem": "https://png.pngtree.com/background/20250430/original/pngtree-hot-tea-drink-with-lemon-and-seasonings-picture-image_15562807.jpg"
            },
            {
                "nome": "Esfirra de Carne",
                "preco": 6,
                "descricao": "Esfirra macia e recheada com carne temperada no ponto certo.",
                "qtd_estoque": 1,
                "imagem": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSXRAvDP1iKVsUt2wxouZZsZpSa9-OcsVPUQiFYeBWpXLO1OgTF"
            },
            {
                "nome": "Trident",
                "preco": 2.5,
                "descricao": "Goma de mascar com sabores variados e refrescantes.",
                "qtd_estoque": 4,
                "imagem": "https://down-br.img.susercontent.com/file/sg-11134201-7rceb-lt55l0h4mz1ddb"
            },
            {
                "nome": "Mentos",
                "preco": 3,
                "descricao": "Pastilha mastigável com sabores frutados ou menta.",
                "qtd_estoque": 5,
                "imagem": "https://samsclub.vtexassets.com/arquivos/ids/214065/7896262304467_1.jpg?v=638894740749470000"
            },
            {
                "nome": "Café (200ml)",
                "preco": 3,
                "descricao": "Café coado tradicional, quente e encorpado.",
                "qtd_estoque": 7,
                "imagem": "https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/BCCT2IECNVFLJIIKA5MNCIWUMI.jpeg?auth=30fde307e2725ce5773028e57824191dc3f834c4db12c9e73c59a3f38b744dee&width=1280&height=720"
            },
            {
                "nome": "Empada de Frango",
                "preco": 5,
                "descricao": "Empada tradicional recheada com frango desfiado e temperado.",
                "qtd_estoque": 45,
                "imagem": "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17493753906845599e91cf4_75_75.jpeg"
            },
            {
                "nome": "Coxinha de Morango",
                "preco": 10.5,
                "descricao": "Uma explosão de sabores, sendo macia por fora e azedinha por dentro",
                "qtd_estoque": 15,
                "imagem": "https://receitadelicia.com.br/wordpress/wp-content/files/receitadelicia.com.br/2024/07/coxinha-de-morango-delicia-inusitada-de-inovar-o-paladar-1.webp"
            },
            {
                "nome": "Pão de Queijo",
                "preco": 4.5,
                "descricao": "Crocante por fora e macio por dentro, muito bom para tomar com um cafézinho.",
                "qtd_estoque": 25,
                "imagem": "https://cdn.casaeculinaria.com/wp-content/uploads/2023/01/26110706/Pao-de-queijo-1.webp"
            },
            {
                "nome": "Torta Salgada de Frango",
                "preco": 6.5,
                "descricao": "Fatia de torta caseira recheada com frango cremoso.",
                "qtd_estoque": 45,
                "imagem": "https://blog.gsuplementos.com.br/wp-content/uploads/2022/10/torta-de-frango-fit.jpg"
            },
            {
                "nome": "Chá Gelado (300ml)",
                "preco": 17,
                "descricao": "Refrescante",
                "qtd_estoque": 10,
                "imagem": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2023/10/30/759785217-cha-gelado-simples.jpg"
            },
            {
                "nome": "Achocolatado\n",
                "preco": 4,
                "descricao": "(Nescau,Toddy)",
                "qtd_estoque": 10,
                "imagem": "https://images.mrcook.app/recipe-image/0190dd43-d264-747a-8f5f-326d0cb3c32b?cacheKey=U3VuLCAxMiBKYW4gMjAyNSAwMzozODoyNCBHTVQ="
            }
        ],
    })

    await prisma.pedido.createMany({
        data: [
            { "cliente_id": 1 },
            { "cliente_id": 1 },
            { "cliente_id": 2 },
            { "cliente_id": 4 },
            { "cliente_id": 2 },
            { "cliente_id": 3 },
            { "cliente_id": 10 },
            { "cliente_id": 1 },
            { "cliente_id": 2 },
            { "cliente_id": 3 },
            { "cliente_id": 4 },
            { "cliente_id": 5 },
            { "cliente_id": 6 },
            { "cliente_id": 7 },
            { "cliente_id": 8 },
            { "cliente_id": 9 }
        ],
    })

    await prisma.item_Pedido.createMany({
        data: [
            {
                "item_id": 1,
                "pedido_id": 2,
                "produto_id": 1,
                "data_venda": "2025-10-07T19:15:03.011Z",
                "quantidade": 5,
                "preco_unitario": 7,
                "forma_pagamento": "Cartão",
                "valor_total": 28
            },
            {
                "item_id": 4,
                "pedido_id": 2,
                "produto_id": 20,
                "data_venda": "2025-10-07T19:23:07.745Z",
                "quantidade": 2,
                "preco_unitario": 3.5,
                "forma_pagamento": "Dinheiro",
                "valor_total": 7
            }
        ],
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })