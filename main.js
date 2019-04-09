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
                variantColor:   "green",
                variantImage:   "img/vmSocks-green-onWhite.jpg"
            },
            {
                variantId:      2235,
                variantColor:   "blue",
                variantImage:   "img/vmSocks-blue-onWhite.jpg"
            }
        ],
        cart:       0
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})