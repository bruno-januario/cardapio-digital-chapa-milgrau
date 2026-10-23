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
        picture: '/images/fast-food/xtudo.webp',
        price: 12
    },
    {
        name: 'X-Picanha',
        description: 'Pão, carne de picanha, queijo, presunto, bacon, ovo, tomate, alface, milho, ervilha, batata palha, queijo ralado, ketchup, maionese, molho verde e mostarda.',
        picture: '/images/fast-food/xpicanha.webp',
        price: 18
    },
    {
        name: 'X-Bacon',
        description: 'Pão, carne, queijo, presunto, 4x mais bacon que o X-Tudo, ovo, tomate, alface, milho, ervilha, batata palha, queijo ralado, ketchup, maionese, molho verde e mostarda.',
        picture: '/images/fast-food/xbacon.webp',
        price: 20
    },
    {
        name: 'X-Duplo',
        description: 'Pão, 2 carnes, 2 queijos, 2 presuntos, 2x mais bacon que o X-Tudo, tomate, alface, milho, ervilha, batata palha, queijo ralado, ketchup, maionese, molho verde e mostarda.',
        picture: '/images/fast-food/xduplo.webp',
        price: 20
    },
    {
        name: 'Hot-Dog Linguiça',
        description: 'Pão, molho e caldo, linguiça, alface, milho, ervilha, ovo de codorna, azeitona, batata palha, queijo ralado, ketchup, maionese, molho verde e mostarda.',
        picture: '/images/fast-food/hotdoglinguica.webp',
        price: 12
    },
    {
        name: 'Hot-Dog Salsicha',
        description: 'Pão, molho e caldo, 2 salsichas, alface, milho, ervilha, ovo de codorna, azeitona, batata palha, queijo ralado, ketchup, maionese, molho verde e mostarda.',
        picture: '/images/fast-food/hotdogsalsicha.webp',
        price: 12
    },
    {
        name: 'Hambúrguer (Kids)',
        description: 'Pão, carne, queijo, presunto, batata palha e ketchup.',
        picture: '/images/fast-food/hamburguerkids.webp',
        price: 9
    }
]

export const soapFood: Soup[] = [
    {
        name: 'Mocotó',
        description: 'Mocotó, batata, cenoura, linguiça, bacon, azeitona e temperos.',
        picture: '/images/soups/mocoto.webp',
        priceP: 11,
        priceM: 14,
        priceG: 16,
        priceGG: 23
    },
    {
        name: 'Angu à baiana',
        description: 'Angu, língua, coração, linguiça, bacon e temperos.',
        picture: '/images/soups/anguabaiana.webp',
        priceP: 11,
        priceM: 14,
        priceG: 16,
        priceGG: 23
    },
    {
        name: 'Estrogonofe',
        description: 'Frango, creme de leite, ketchup, mostarda e temperos.',
        picture: '/images/soups/estrogonofe.webp',
        priceP: 11,
        priceM: 14,
        priceG: 16,
        priceGG: 23
    },
    {
        name: 'Sopa de Ervilha',
        description: 'Ervilha, bacon, linguiça e temperos.',
        picture: '/images/soups/sopadeervilha.webp',
        priceP: 11,
        priceM: 14,
        priceG: 16,
        priceGG: 23
    }
]

export const beverages: Product[] = [
    {
        name: 'Guaracamp',
        description: 'Refresco de guaraná carioca (sabores natural, maracujá e açaí).',
        picture: '/images/beverages/guaracamp.webp',
        price: 2
    },
    {
        name: 'Refri Lata',
        description: 'Refrigerante em lata (Coca-Cola normal/zero e Fanta uva/laranja).',
        picture: '/images/beverages/refrilata.webp',
        price: 6
    },
    {
        name: 'Refri 2L Sukita Uva',
        description: 'Refrigerante 2L Sukita sabor uva.',
        picture: '/images/beverages/sukitadoislitros.webp',
        price: 11
    },
    {
        name: 'Refri 2L Guaraná Antarctica',
        description: 'Refrigerante 2L Guaraná Antarctica.',
        picture: '/images/beverages/guaranadoislitros.webp',
        price: 14
    },
    {
        name: 'Refri 2L Coca-Cola',
        description: 'Refrigerante 2L Coca-Cola normal.',
        picture: '/images/beverages/cocadoislitros.webp',
        price: 16
    },
    {
        name: 'Latão Brahma',
        description: 'Cerveja latão (473 ml) das marca Brahma.',
        picture: '/images/beverages/brahma.webp',
        price: 8
    },
    {
        name: 'Latão Antarctica',
        description: 'Cerveja latão (473 ml) da marca Antarctica.',
        picture: '/images/beverages/antarctica.webp',
        price: 8
    },
    {
        name: 'Latão Império',
        description: 'Cerveja latão (473 ml) da marca Império.',
        picture: '/images/beverages/imperio.webp',
        price: 7
    },
    {
        name: 'Água mineral sem gás',
        description: 'Água mineral sem gás de marcas diversas (500/510 ml).',
        picture: '/images/beverages/aguamineral.webp',
        price: 2
    }
]