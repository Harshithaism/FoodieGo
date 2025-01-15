import { foodItem } from './fooditem.js';

console.log(foodItem);

function displayItems(){
     var biriyani=document.getElementById('biriyani');
     var chicken=document.getElementById('chicken');
     var paneer=document.getElementById('paneer');
     var vegetable=document.getElementById('vegetable');
     var chinese=document.getElementById('chinese');
     var southindian=document.getElementById('south-indian');
     // Filter food items based on category //
     const biriyaniData=foodItem.filter(item=>item.category=='biriyani');
     console.log(biriyaniData);
     const chickenData=foodItem.filter(item=>item.category=='chicken');
     console.log(chickenData);
     const paneerData=foodItem.filter(item=>item.category=='paneer');
     console.log(paneerData);
     const vegetableData=foodItem.filter(item=>item.category=='vegetable');
     console.log(vegetableData);
     const chineseData=foodItem.filter(item=>item.category=='chinese');
     console.log(chineseData);
     const southindianData=foodItem.filter(item=>item.category=='south-indian');
     console.log(southindianData);
}
displayItems();