var app = new Vue({
    el:"#app",
    data:{
        product:        "Socks",
        brand:          "Vue Mastery",
        selectedVariant: 0,
        details:        ["80% algodon","20% poliester","Marca Vue"],
        variants:[
            {
                variantId:          2234,
                variantColor:       "green",
                variantImage:       "img/vmSocks-green-onWhite.jpg",
                variantQuantity:    2
            },
            {
                variantId:          2235,
                variantColor:       "blue",
                variantImage:       "img/vmSocks-blue-onWhite.jpg",
                variantQuantity:    0
            }
        ],
        cart:       0
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        updateImage(index){
            this.selectedVariant = index
        }
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})