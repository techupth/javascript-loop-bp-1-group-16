// Exercise #5: Orders Analysis 1 (For Loop)

let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
  {
    id: 6,
    customerName: "Birdie Shepland",
    productName: "Tomato Paste",
    productPrice: 5845,
    productQuantity: 65,
    creditCardType: "visa-electron",
  },
  {
    id: 7,
    customerName: "Willyt Helks",
    productName: "Asparagus - Green, Fresh",
    productPrice: 89253,
    productQuantity: 26,
    creditCardType: "laser",
  },
  {
    id: 8,
    customerName: "Bill Champion",
    productName: "Wine - Red, Harrow Estates, Cab",
    productPrice: 922100,
    productQuantity: 40,
    creditCardType: "china-unionpay",
  },
  {
    id: 9,
    customerName: "Cris Druce",
    productName: "Bar Mix - Lemon",
    productPrice: 83104,
    productQuantity: 6,
    creditCardType: "jcb",
  },
  {
    id: 10,
    customerName: "Darnell O'Currine",
    productName: "Lime Cordial - Roses",
    productPrice: 99041,
    productQuantity: 75,
    creditCardType: "visa-electron",
  },
];


let currentPurchasedAmount;
let maxPurchasedAmount;
let maxPurchasedId;

// Start coding here
maxPurchasedAmount = 0;

for (let i=0; i<orders.length; i++) {
  currentPurchasedAmount = orders[i]['productPrice']*orders[i]['productQuantity'];
  if (currentPurchasedAmount > maxPurchasedAmount) {
    maxPurchasedAmount = currentPurchasedAmount;
    maxPurchasedId = orders[i]['id'];
  }
}

console.log(`Order id: ${maxPurchasedId}, Total price: ${maxPurchasedAmount}`)

/*
orders เก็บข้อมูลเป็น Array ที่บรรจุ Object ที่แสดงรายการคำสั่งซื้อสินค้า
แต่ละ Object จะมี Property ดังนี้
Key id เก็บข้อมูลลำดับของรายการเป็น Number
Key CustomerName เก็บข้อมูลชื่อของลูกค้าเป็น String
Key productName เก็บข้อมูลชื่อของสินค้าที่ซื้อเป็น String
Key productPrice เก็บข้อมูลราคาสินค้าต่อชิ้นเป็น Number
Key productQuantity เก็บจำนวนของสินค้าที่ซื้อเป็น Number
Key creditCardType เก็บประเภทของบัตรเครดิตเป็น String

ให้ใช้ For Loop เพื่อหารายการที่มียอดซื้อสินค้ารวมมากที่สุด
เมื่อหาได้แล้วให้ทำการแสดงผลค่าออกมาดูทางหน้าจอด้วย console.log() 
ตามรูปแบบนี้

"Order id: <id-number>, Total price: <total-price-amount>";
<id-number> คือ เลข Id ของรายการนั้น
<total-price-amount> คือ ราคารวมของสินค้าทั้งหมดในรายการนั้น
*/