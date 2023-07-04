<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <v-card>
                <v-toolbar flat>
                    <v-toolbar-title>Product List</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" label="Search" @keyup="handleSearch()" clearable></v-text-field>
                    <v-icon class="ml-4 mr-4 pointer" @click="$router.push({ name: 'Cart' })">mdi-cart</v-icon>
                </v-toolbar>
                <v-table fixed-header>
                    <thead>
                        <tr>
                            <th class="text-center">#</th>
                            <th class="text-center" @click="handleSortBy('name')">Title</th>
                            <th class="text-center" @click="handleSortBy('category')">Category</th>
                            <th class="text-center" @click="handleSortBy('price')">Price</th>
                            <th class="text-center" @click="handleSortBy('rating')">Rating</th>
                            <th class="text-center" @click="handleSortBy('action')">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in productList" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ product.name }}</td>
                            <td>{{ product.category }}</td>
                            <td>{{ product.price }}</td>
                            <td>{{ product.rating }}</td>
                            <td>
                                <v-btn class="mr-2" color="primary" variant="elevated" @click="handleShowProduct(product.id)">Show</v-btn>
                                <v-btn color="success" variant="elevated" @click="addToCart(product)">Add to Cart</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-card>
        </v-responsive>
    </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'ProductList',

    data() {
        return {
            productList: [],
            sortBy: '',
            sortOrder: 1,
            search: '',
        }
    },

    computed: {
        ...mapState(['products']),
    },

    mounted() {
        this.productList = this.products;
    },

    methods: {
        ...mapActions(['addToCart']),

        handleShowProduct(id) {
            this.$router.push({ name: 'ProductDetails', params: { id } });
        },

        handleSortBy(value) {
            if (value === this.sortBy) {
                this.sortOrder *= -1;
            } else {
                this.sortBy = value;
                this.sortOrder = 1;
            }

            this.productList.sort((a, b) => {
                const valueA = a[value];
                const valueB = b[value];

                if (valueA < valueB) {
                    return -1 * this.sortOrder;
                }

                if (valueA > valueB) {
                    return 1 * this.sortOrder;
                }

                return 0;
            });
        },

        handleSearch() {
            this.productList = this.products.filter(product =>
                                    product.name.toLowerCase().includes(this.search.toLowerCase()) ||
                                    product.category.toLowerCase().includes(this.search.toLowerCase())
                                );
        },
    }
}
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>
