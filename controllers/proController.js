import { products, categories, dogs } from '../data/products.js';

const home = (req, res) => {
    // console.log(products)
    const { mobilename } = req.query
    const cellPhone = products ? products.filter((cellPhone) => cellPhone.name.toLowerCase().includes(mobilename.toLowerCase())) : products;
    // console.log(cellPhone);
    // console.log();
    const totalPhone = cellPhone.length;
    res.render('product/home.ejs', { title: "Home", products: cellPhone, count: totalPhone, categories: categories });
};

const product = (req, res) => {
    const id = req.params.id;
    // search product in array
    const product = products.find((product) => product.id == id);
    // console.log(product['id']);
    // console.log(product['name']);
    // console.log(product['price']);
    // console.log(product['url']);
    try {
        return res.render('product/products.ejs', { title: "Product", pro: product });
    } catch (error) {
        return res.status(404).send(error.message)
    }
};

const dogsSection = (req, res) => {
    const { dogname } = req.query;
    // console.log(dogname);
    const mydog = dogname ? dogs.filter((dog) => dog.name.toLowerCase().includes(dogname.toLowerCase())) : dogs;
    // console.log("Search dogs are = ", mydog);
    const dogsCount = mydog.length;
    // console.log("total Dogs Found - ", dogsCount); 

    res.render('product/dogs.ejs', { title: "Dogs", dogs: mydog, count: dogsCount });
};

const buyDogs = (req, res) => {
    const id = req.params.id;
    const product = dogs.find((product) => product.id == id);
    // console.log(product['url']);
    try {
        return res.render('product/buydogs.ejs', { title: "buydogs page", element: product });
    } catch (error) {
        return res.status(404).send(error.message)
    }
};

export {
    home,
    product,
    dogsSection,
    buyDogs
};



