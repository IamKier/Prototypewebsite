
const product = [
    {
        id: 0,
        image: 'image/Glazed_Donut_50.jpg',
        title: 'Glazed Donut',
        price: 125,
    },
    {
        id: 1,
        image: 'image/Blueberry_Scone_65.jpg',
        title: 'Blueberry Scone',
        price: 150,
    },
    {
        id: 2,
        image: 'image/Chocolate_Chip_Cookie_65.jpg',
        title: 'Chocolate Chip Cookie',
        price: 100,
    },
    
    {
        id: 3,
        image: 'image/Butter_Croissant_65.jpg',
        title: 'Butter Croissant',
        price: 160,
    },
    {
        id: 4,
        image: 'image/Pumpkin_Scone_1_59.jpg',
        title: 'Pumpkin Scone',
        price: 90,
    },
    {
        id: 5,
        image: 'image/Petite_Vanilla_Bean_Scone_2_59.jpg',
        title: 'Petite Vanilla Bean Scone',
        price: 105,
    },
    {
        id: 6,
        image: 'image/Double-Chocolate-Brownie.jpg',
        title: 'Double Chocolate Brownie',
        price: 100,
    },
    {
        id: 7,
        image: 'image/marshmallow-dream-bar.jpg',
        title: 'Marshmallow Dream Bar',
        price: 65,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>PHP ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>ADD</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Click the add button to calculate the total.";
        document.getElementById("total").innerHTML = "PHP "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "PHP "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>PHP ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
