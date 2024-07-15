const products = [
  // Sneakers
  {
    image: 'sneakers1.jpg',
    description: 'Comfortable and stylish sneakers for everyday wear.',
    tags: ['Sneakers', 'Casual', 'Sporty'],
    price: 1499,
  },
  {
    image: 'sneakers2.jpg',
    description: 'Durable and trendy sneakers for active lifestyles.',
    tags: ['Sneakers', 'Active', 'Trendy'],
    price: 1599,
  },
  {
    image: 'sneakers3.jpg',
    description: 'Classic sneakers with a modern twist.',
    tags: ['Sneakers', 'Classic', 'Modern'],
    price: 1799,
  },
  // Boots
  {
    image: 'boots1.jpg',
    description: 'Durable boots perfect for any season.',
    tags: ['Boots', 'Classic', 'Edgy'],
    price: 1699,
  },
  {
    image: 'boots2.jpg',
    description: 'Stylish boots for all weather conditions.',
    tags: ['Boots', 'Stylish', 'Weather-resistant'],
    price: 1899,
  },
  {
    image: 'boots3.jpg',
    description: 'Comfortable and rugged boots for outdoor adventures.',
    tags: ['Boots', 'Comfortable', 'Rugged'],
    price: 1799,
  },
  // Heels
  {
    image: 'heels1.jpg',
    description: 'Elegant heels for a night out.',
    tags: ['Heels', 'Trendy', 'Formal'],
    price: 1499,
  },
  {
    image: 'heels2.jpg',
    description: 'Chic and stylish heels for any occasion.',
    tags: ['Heels', 'Chic', 'Stylish'],
    price: 1599,
  },
  {
    image: 'heels3.jpg',
    description: 'Comfortable heels with a touch of elegance.',
    tags: ['Heels', 'Comfortable', 'Elegant'],
    price: 1699,
  },
  // Flats
  {
    image: 'flats1.jpg',
    description: 'Versatile flats that go with any outfit.',
    tags: ['Flats', 'Comfortable', 'Casual'],
    price: 1399,
  },
  {
    image: 'flats2.jpg',
    description: 'Stylish flats for a chic look.',
    tags: ['Flats', 'Stylish', 'Chic'],
    price: 1499,
  },
  {
    image: 'flats3.jpg',
    description: 'Classic flats with modern design elements.',
    tags: ['Flats', 'Classic', 'Modern'],
    price: 1599,
  },
  // Dresses
  {
    image: 'dress1.jpg',
    description: 'A flowy dress for a casual day out.',
    tags: ['Dress', 'Bohemian', 'Casual'],
    price: 1799,
  },
  {
    image: 'dress2.jpg',
    description: 'Elegant dress for special occasions.',
    tags: ['Dress', 'Elegant', 'Special'],
    price: 1999,
  },
  {
    image: 'dress3.jpg',
    description: 'Comfortable and stylish dress for everyday wear.',
    tags: ['Dress', 'Comfortable', 'Stylish'],
    price: 1899,
  },
  {
    image: 'athleisure1.jpg',
    description: 'Comfortable athleisure jeans for a casual day out.',
    tags: ['Athleisure', 'Jeans', 'Casual'],
    price: 1600,
  },
  {
    image: 'athleisure2.jpg',
    description: 'Stylish athleisure jumpsuit for active lifestyles.',
    tags: ['Athleisure', 'Jumpsuit', 'Active'],
    price: 1850,
  },
  {
    image: 'athleisure3.jpg',
    description: 'Modern athleisure wear perfect for any occasion.',
    tags: ['Athleisure', 'Trendy', 'Comfortable'],
    price: 1750,
  },
  {
    image: 'jeans1.jpg',
    description: 'Classic blue jeans for everyday wear.',
    tags: ['Jeans', 'Casual', 'Classic'],
    price: 1500,
  },
  {
    image: 'jeans2.jpg',
    description: 'Trendy ripped jeans for a modern look.',
    tags: ['Jeans', 'Trendy', 'Modern'],
    price: 1800,
  },
  {
    image: 'jumpsuit1.jpg',
    description: 'Chic jumpsuit for a stylish look.',
    tags: ['Jumpsuit', 'Chic', 'Stylish'],
    price: 2000,
  },
  {
    image: 'jumpsuit2.jpg',
    description: 'Comfortable jumpsuit for everyday wear.',
    tags: ['Jumpsuit', 'Comfortable', 'Everyday'],
    price: 1900,
  },
  {
    image: 'jumpsuit3.jpg',
    description: 'Trendy jumpsuit for a fashionable statement.',
    tags: ['Jumpsuit', 'Trendy', 'Fashionable'],
    price: 1950,
  },
  {
    image: 'sunglasses1.jpg',
    description: 'Stylish sunglasses for a chic look.',
    tags: ['Sunglasses', 'Stylish', 'Chic'],
    price: 1299,
  },
  {
    image: 'sunglasses2.jpg',
    description: 'Trendy sunglasses with UV protection.',
    tags: ['Sunglasses', 'Trendy', 'UV Protection'],
    price: 1399,
  },
  {
    image: 'sunglasses3.jpg',
    description: 'Classic sunglasses with a modern touch.',
    tags: ['Sunglasses', 'Classic', 'Modern'],
    price: 1499,
  },
  // Hats
  {
    image: 'hat1.jpg',
    description: 'Casual hat for everyday wear.',
    tags: ['Hat', 'Casual', 'Comfortable'],
    price: 899,
  },
  {
    image: 'hat2.jpg',
    description: 'Stylish hat for a trendy look.',
    tags: ['Hat', 'Stylish', 'Trendy'],
    price: 999,
  },
  {
    image: 'hat3.jpg',
    description: 'Classic hat with a modern design.',
    tags: ['Hat', 'Classic', 'Modern'],
    price: 1099,
  },
  // Handbags
  {
    image: 'bag1.jpg',
    description: 'Elegant handbag for special occasions.',
    tags: ['Handbag', 'Elegant', 'designer'],
    price: 1999,
  },
  {
    image: 'bag2.jpg',
    description: 'Stylish handbag for everyday use.',
    tags: ['Handbag', 'Stylish', 'designer'],
    price: 1899,
  },
  {
    image: 'bag3.jpg',
    description: 'Chic handbag with ample storage.',
    tags: ['Handbag', 'designer', 'Storage'],
    price: 1799,
  },
  // Necklaces
  {
    image: 'necklace1.jpg',
    description: 'Elegant necklace for special occasions.',
    tags: ['Necklace', 'Elegant', 'Special','statement'],
    price: 1499,
  },
  {
    image: 'necklace2.jpg',
    description: 'Trendy necklace with a unique design.',
    tags: ['Necklace', 'statement', 'Unique','statement'],
    price: 1599,
  },
  {
    image: 'necklace3.jpg',
    description: 'Classic necklace with modern elements.',
    tags: ['Necklace', 'Classic', 'Modern','statement'],
    price: 1699,
  }
];


export default products;
