<template>
    <div class="mt-3">
        <v-card>
            <v-img :src="product.image" height="400"></v-img>
                <div class="text-center">
                    <h2>{{ product.name }}</h2>
                    <p>Category: {{ product.category }}</p>
                    <p>Rating: {{ product.rating }}</p>
                    <p>Price: {{ product.price }}</p>
                    <p>{{ product.description }}</p>
                    <v-btn class="mt-3 mb-3 text-center" color="primary" @click="addToCart(product)">
                        Add to Cart
                    </v-btn>
                </div>
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
