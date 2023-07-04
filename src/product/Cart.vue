<template>
  <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <v-card>
                <v-toolbar flat>
                    <v-toolbar-title>Cart</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-icon class="mr-4 pointer" @click="$router.push({ name: 'ProductList' })">mdi-window-close</v-icon>
                </v-toolbar>
                <v-table fixed-header>
                    <thead>
                        <tr>
                            <th class="text-center">#</th>
                            <th class="text-center">Title</th>
                            <th class="text-center">Price</th>
                            <th class="text-center">Quantity</th>
                            <th class="text-center">Total Price</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in cartItems" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.price }}</td>
                            <td>{{ item.quantity }}</td>
                            <td>{{ item.price * item.quantity }}</td>
                            <td>
                                <v-btn color="error" @click="removeFromCart(item)">Remove</v-btn>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot v-if="cartItems.length">
                        <tr>
                          <td colspan="3"></td>
                          <td class="text-right">
                              <strong>Subtotal:</strong>
                          </td>
                          <td>{{ calculateSubtotal }}</td>
                        </tr>
                    </tfoot>
                </v-table>
            </v-card>
        </v-responsive>
    </v-container>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'CartComponent',

        computed: {
            ...mapState(['cartItems']),

            calculateSubtotal() {
                let subtotal = 0;

                for (const item of this.cartItems) {
                     subtotal += item.price * item.quantity;
                }

                return subtotal;
            },
        },

        methods: {
            ...mapActions(['removeFromCart']),
        },
    };
</script>
