// Exercise #3: Min Numbers
let numbers = [100, 20, 3, 1000];
let minNumber = 0;

// Start coding here
minNumber = Infinity;
for (let i=0; i<numbers.length; i++) {
    if (numbers[i] < minNumber) {
        minNumber = numbers[i];
    }
}

console.log(minNumber);

/*ให้ numbers เป็น Array ที่ประกอบด้วยตัวเลข
ให้ Declare ตัว Variable minNumber โดย Assign ตัว Value 0
ให้ใช้ For Loop แบบดั้งเดิมในการหา Value ที่น้อยที่สุดใน numbers 
และนำ Value ที่ได้ไปเก็บไว้ใน Variable ที่ชื่อว่า minNumber

/*Hint🕵🏼‍♀️ : ให้นำ minNumber ไปเปรียบเทียบกับ Value แต่ละอันใน Array 
ว่าเลขไหนน้อยกว่ากัน ถ้าเจอเลขที่น้อยกว่าก็ให้เก็บ Value*/


