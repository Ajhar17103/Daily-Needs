let itemName=document.querySelector('#itemName');
let itemWeight=document.querySelector('#itemWeight');
let itemPrice=document.querySelector('#itemPrice');
let submit=document.querySelector('#submit');
let item=document.querySelector('#item');

submit.addEventListener('click', function(e){
    e.preventDefault();

    if( itemPrice.value==''  || itemName.value=='' || itemName.value==''){
        alert('Put your valid Infomation');
    }
    else{  
        let createRow=document.createElement('tr');

        let createItemName=document.createElement('th');
        createItemName.innerHTML=itemName.value
        createRow.appendChild(createItemName);

        let createItemWeight=document.createElement('th');
        createItemWeight.innerHTML=itemWeight.value;
        createRow.appendChild(createItemWeight);

        let createItemPrice=document.createElement('th');
        createItemPrice.innerHTML=itemPrice.value;
        createRow.appendChild(createItemPrice);
//Total price
        let createTotalItemPrice=document.createElement('th');
        createTotalItemPrice.innerHTML=parseFloat(itemWeight.value)*parseFloat(itemPrice.value) + ' '+'BDT';
        createRow.appendChild(createTotalItemPrice)
        item.appendChild(createRow);

    }
});
item.style.color='white';