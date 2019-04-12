Vue.component("product",{
    props:{
        premium:{
            type:Boolean,
            required:true
        }
    },
    template:`
        <div class="product">
            <div class="product-image">
                <img :src="image" />
            </div>
            <div class="product-info">

                <h1>{{title}}</h1>
                
                <p>Shipping {{ shipping }}</p>

                <p v-if="inStock">inStock</p>
                <p v-else>Out of Stock</p>
                
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                
                <div class="color-box"
                    v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    :style="{ backgroundColor: variant.variantColor }"
                    @mouseover="updateImage(index)">
                </div>

                <!-- // usar v-on es lo mismo que @ -->
                <button v-on:click="addToCart"
                        :disabled="!inStock"
                        :class="{ disabledButton: !inStock }">
                    Add to cart
                </button>
            </div>
        </div>
    `,
    data(){
        return {
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
            ]
        }
    },
    methods:{
        addToCart(){
            this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId)
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
        },
        shipping(){
            if(this.premium){
                return "Free"
            }
            else{
                return 2.99
            }
        }
    }
})

var app = new Vue({
    el:"#app",
    data:{
        premium:true,
        cart:[]
    },
    methods:{
        updateCart(id){
            this.cart.push(id)
        }
    }
})