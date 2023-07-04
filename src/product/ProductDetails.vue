<template>
    <div class="mb-3">
      <v-icon class="mb-5 justify-end w-75" @click="$router.push({ name: 'ProductList' })">mdi-window-close</v-icon>
        <v-card>
            <v-img :src="product.image" height="400"></v-img>
            <v-card-content>
                <div>
                    <h2>{{ product.name }}</h2>
                    <p>Category: {{ product.category }}</p>
                    <p>Rating: {{ product.rating }}</p>
                    <p>Price: {{ product.price }}</p>
                    <p>{{ product.description }}</p>
                </div>
                <v-btn class="mb-3" color="primary" @click="addToCart(product)">
                    Add to Cart
                </v-btn>
            </v-card-content>
        </v-card>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: "ProductDetails",

        data() {
            return {
                product: {},
            };
        },

        computed: {
            ...mapState(['products']),
        },

        methods: {
            ...mapActions(['addToCart']),
        },

        mounted() {
            this.product = this.products.find(({id}) => id == this.$route.params.id);
        },
    };
</script>
