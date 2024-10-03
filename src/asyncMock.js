const products = [
    {
        id: 1,
        title: 'River Plate Titular 24/25',
        price: '15000',
        category: 'Liga argentina',
        description: 'Talles: S,M,L,XL,XXL',
        image: 'https://tiendariver.vtexassets.com/arquivos/ids/170986/HT3679_1.png?v=638453369418300000',
    },
    {
        id: 2,
        title: 'Boca Juniors Titular 24/25',
        price: '15000',
        category: 'Liga argentina',
        description: 'Talles: S,M,L,XL,XXL',
        image: 'https://tiendariver.vtexassets.com/arquivos/ids/170986/HT3679_1.png?v=638453369418300000',
    },
    {
        id: 3,
        title: 'Real Madrid Titular 24/25',
        price: '15000',
        category: 'Liga española',
        description: 'Talles: S,M,L,XL,XXL',
        image: 'https://tiendariver.vtexassets.com/arquivos/ids/170986/HT3679_1.png?v=638453369418300000',
    },
    {
        id: 4,
        title: 'Barcelona Titular 24/25',
        price: '15000',
        category: 'Liga española',
        description: 'Talles: S,M,L,XL,XXL',
        image: 'https://tiendariver.vtexassets.com/arquivos/ids/170986/HT3679_1.png?v=638453369418300000',
    },
];

export const getProducts = new Promise ((resolve) => {
    setTimeout (() => {
        resolve (products);
    }, 3000);
});

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};

export const getCategory = (category) => {
    return products.filter((product) => product.category === category);
};