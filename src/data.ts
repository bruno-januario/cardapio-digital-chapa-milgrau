export interface Product {
    name: string,
    description: string,
    picture: string, /* Caminho para a imagem */
    price?: number
}

export interface Soup extends Product {
    priceP: 11,
    priceM: 14,
    priceG: 16,
    priceGG: 23
}

export const fastFood: Product[] = [
    {
        name: 'X-Tudo',
        description: 'Pão, carne, queijo, presunto, bacon, ovo, tomate, alface, milho, ervilha, batata palha, queijo ralado, ketchup, maionese, molho verde e mostarda.',
        picture: '/images/xtudo.png',
        price: 12
    },
    {
        name: 'X-Picanha',
        description: 'Pão, carne de picanha, queijo, presunto, bacon, ovo, tomate, alface, milho, ervilha, batata palha, queijo ralado, ketchup, maionese, molho verde e mostarda.',
        picture: '/images/xpicanha.png',
        price: 18
    },
    {
        name: 'X-Bacon',
        description: 'Pão, carne, queijo, presunto, 4x mais bacon que o X-Tudo, ovo, tomate, alface, milho, ervilha, batata palha, queijo ralado, ketchup, maionese, molho verde e mostarda.',
        picture: '/images/xbacon.png',
        price: 20
    },
    {
        name: 'X-Duplo',
        description: 'Pão, 2 carnes, 2 queijos, 2 presuntos, 2x mais bacon que o X-Tudo, tomate, alface, milho, ervilha, batata palha, queijo ralado, ketchup, maionese, molho verde e mostarda.',
        picture: '/images/xduplo.png',
        price: 20
    },
    {
        name: 'Hot-Dog Linguiça',
        description: 'Pão, molho e caldo, linguiça, alface, milho, ervilha, ovo de codorna, azeitona, batata palha, queijo ralado, ketchup, maionese, molho verde e mostarda.',
        picture: '/images/xtudo.png',
        price: 12
    },
    {
        name: 'Hot-Dog Salsicha',
        description: 'Pão, molho e caldo, 2 salsichas, alface, milho, ervilha, ovo de codorna, azeitona, batata palha, queijo ralado, ketchup, maionese, molho verde e mostarda.',
        picture: '/images/xtudo.png',
        price: 12
    },
    {
        name: 'Hambúrguer (Kids)',
        description: 'Pão, carne, queijo, presunto, batata palha e ketchup.',
        picture: '/images/xduplo.png',
        price: 9
    }
]

export const soapFood: Soup[] = [
    {
        name: 'Mocotó',
        description: 'Mocotó, batata, cenoura, linguiça, bacon, azeitona e temperos.',
        picture: '/images/mocoto.png',
        priceP: 11,
        priceM: 14,
        priceG: 16,
        priceGG: 23
    },
    {
        name: 'Angu à baiana',
        description: 'Angu, língua, coração, linguiça, bacon e temperos.',
        picture: '/images/anguabaiana.png',
        priceP: 11,
        priceM: 14,
        priceG: 16,
        priceGG: 23
    },
    {
        name: 'Estrogonofe',
        description: 'Frango, creme de leite, ketchup, mostarda e temperos.',
        picture: '/images/estrogonofe.png',
        priceP: 11,
        priceM: 14,
        priceG: 16,
        priceGG: 23
    },
    {
        name: 'Sopa de Ervilha',
        description: 'Ervilha, bacon, linguiça e temperos.',
        picture: '/images/sopadeervilha.png',
        priceP: 11,
        priceM: 14,
        priceG: 16,
        priceGG: 23
    }
]

export const beverages: Product[] = [
    {
        name: 'Guaracamp (natural, maracujá e açaí)',
        description: 'Refresco de guaraná carioca.',
        picture: 'images/guaracamp.png',
        price: 2
    },
    {
        name: 'Refri Lata (sabores variados)',
        description: 'Refrigerantes em lata (Coca-Cola normal/zero e Fanta Uva/Laranja).',
        picture: 'images/refrilata.png',
        price: 6
    },
    {
        name: 'Refri 2L Sukita Uva',
        description: 'Refrigerante 2L Sukita sabor uva.',
        picture: 'images/sukitadoislitros.png',
        price: 11
    },
    {
        name: 'Refri 2L Guaraná Antarctica',
        description: 'Refrigerante 2L Guaraná Antarctica.',
        picture: 'images/guaranadoislitros.png',
        price: 14
    },
    {
        name: 'Refri 2L Coca-Cola',
        description: 'Refrigerante 2L Coca-Cola normal.',
        picture: 'images/cocadoislitros.png',
        price: 16
    },
    {
        name: 'Cerveja Latão Brahma e Antarctica',
        description: 'Cervejas latão (473 ml) das marcas Brahma e Antarctica.',
        picture: 'images/brahmaeantarctica.png',
        price: 8
    },
    {
        name: 'Cerveja Latão Império',
        description: 'Cerveja latão (473 ml) da marca Império.',
        picture: 'images/cocadoislitros.png',
        price: 7
    },
    {
        name: 'Água mineral sem gás',
        description: 'Água mineral sem gás de marcas diversas (500/510 ml).',
        picture: 'images/aguamineral.png',
        price: 2
    }
]