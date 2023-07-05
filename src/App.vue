<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app>
            <v-list>
                <v-list-item
                    v-for="item in sidebarItems"
                    :key="item.title"
                    :to="item.path"
                    link
                >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="activeTheme" mandatory>
                <v-btn value="light">
                    <v-icon>mdi-white-balance-sunny</v-icon>
                </v-btn>
                <v-btn value="dark">
                    <v-icon>mdi-moon-waning-crescent</v-icon>
                </v-btn>
            </v-btn-toggle>
        </v-app-bar>

        <v-main>
              <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
    name: "App",

    data() {
        const theme = useTheme()

        return {
            drawer: false,
            sidebarItems: [
                { title: "Products", path: "/" },
                { title: "Cart", path: "/cart" },
            ],
            activeTheme:'light',
            theme,
        };
    },

    computed: {
        pageTitle() {
            const matchingItem = this.sidebarItems.find((item) => item.path === this.$route.path);

            return matchingItem ? matchingItem.title : "Product Detail";
        },
    },

    watch: {
        activeTheme(value) {
            this.theme.global.name = value;
        },
    },
};
</script>
