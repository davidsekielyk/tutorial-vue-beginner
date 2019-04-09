var app = new Vue({
    el:"#app",
    data:{
        product:    "Socks",
        image:      "img/vmSocks-green-onWhite.jpg",
        inStock:    true,
        details:    ["80% algodon","20% poliester","Marca Vue"],
        variants:[
            {
                variantId:      2234,
                variantColor:   "green"
            },
            {
                variantId:      2235,
                variantColor:   "blue"
            }
        ]
    }
})