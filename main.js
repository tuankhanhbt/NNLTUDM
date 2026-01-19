//cau 1
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}
//cau 2
  const products = [
    new Product(1, "iPhone 15 Pro", 35000000, 10, "Electronics", true),
    new Product(2, "MacBook Pro M3", 52000000, 5, "Electronics", true),
    new Product(3, "AirPods Pro", 6000000, 0, "Accessories", true),
    new Product(4, "Apple Watch", 12000000, 7, "Accessories", true),
    new Product(5, "iPad Air", 18000000, 3, "Electronics", false),
    new Product(6, "Magic Mouse", 2500000, 12, "Accessories", true)
  ];
  
  console.log("Danh sách products:", products);
//cau 3
  const nameAndPrice = products.map(p => ({
    name: p.name,
    price: p.price
  }));
  console.log("Name & Price:", nameAndPrice);
  
//cau 4
  const inStockProducts = products.filter(p => p.quantity > 0);
  console.log("Sản phẩm còn hàng:", inStockProducts);
  
//cau 5
  const hasExpensiveProduct = products.some(p => p.price > 30000000);
  console.log("Có sản phẩm > 30 triệu:", hasExpensiveProduct);
  
//cau 6
  const allAccessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);
  
  console.log("Accessories đều đang bán:", allAccessoriesAvailable);
  
//cau 7
  const totalInventoryValue = products.reduce(
    (total, p) => total + p.price * p.quantity,
    0
  );
  console.log("Tổng giá trị kho:", totalInventoryValue);
  
//cau 8
  console.log("Danh sách sản phẩm:");
  for (const product of products) {
    const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${product.name} - ${product.category} - ${status}`);
  }
  
//cau 9
  console.log("Thuộc tính của product đầu tiên:");
  for (const key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
  }
  
//cau 10
  const sellingAndInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
  
  console.log("Sản phẩm đang bán & còn hàng:", sellingAndInStockNames);
  