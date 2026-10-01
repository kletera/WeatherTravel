<script setup lang="ts">
    import Header from './layout/Header.vue';
    import Footer from './layout/Footer.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col bg-base-200 text-base-content">
        <Header></Header>
        <main class="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
            <router-view />
        </main>
        <Footer></Footer>
    </div>
</template>
