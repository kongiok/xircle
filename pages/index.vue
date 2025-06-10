<template>
    <main class="h-dvh w-dvw bg-neutral-200 content-center-safe">
        <section
            class="m-auto w-2/3 h-1/2 bg-primary-50/35 rounded-2xl shadow flex flex-col gap-2.5 items-center justify-center"
        >
            <h1 class="text-2xl text-neutral-800">Beers</h1>
            <h1 class="text-3xl mt-2 text-primary-700">
                {{ beerStore.beers }}
            </h1>
            <u-button
                color="primary"
                class="capitalize"
                @click="() => beerStore.addMoreBeers()"
                >get more beers</u-button
            >
            <u-button
                color="secondary"
                class="capitalize"
                @click="() => beerStore.takeOneBeer()"
                >take one beer</u-button
            >
        </section>
    </main>
</template>

<script setup lang="ts">
import { useBeers } from "#imports";

const beerStore = useBeers();
</script>
