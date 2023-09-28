//Exercise 6 : Orders Analysis 2 (For Loop)

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

let birdiePurchasedAmount;

// Start coding here
for (let i=0; i<orders.length; i++) {
  if (orders[i]['customerName'] === "Birdie Shepland") {
    birdiePurchasedAmount = orders[i]['productPrice']*orders[i]['productQuantity'];
  }
}

console.log(`Total price is ${birdiePurchasedAmount}`);

/*
ให้ใช้ For Loop และ Array orders จากข้อก่อนหน้า 
เพื่อหาว่าลูกค้าที่ชื่อ "Birdie Shepland" จ่ายเงินซื้อสินค้าไปทั้งหมดเท่าไหร่
เมื่อหาได้แล้วให้ทำการแสดงผลค่าออกมาดูทางหน้าจอด้วย console.log() ตามรูปแบบนี้

"Total price is <birdie-purchase-amount>";
<birdie-purchase-amount> คือ จำนวนเงินทั้งหมดที่ Birdie จ่ายไป
*/
