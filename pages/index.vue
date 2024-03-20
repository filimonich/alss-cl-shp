<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div
        class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
      >
        <div v-if="products" v-for="product in products" :key="product">
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";

const products = [
  {
    id: 1,
    title: "New Title 1",
    description: "New Description 1",
    url: "https://loremflickr.com/200/200/paris,girl/all",
    price: 9999,
  },
  {
    id: 2,
    title: "New Title 2",
    description: "New Description 2",
    url: "https://loremflickr.com/200/200?random=1",
    price: 8888,
  },
  {
    id: 3,
    title: "New Title 3",
    description: "New Description 3",
    url: "https://loremflickr.com/200/200?random=2",
    price: 7777,
  },
  {
    id: 4,
    title: "New Title 4",
    description: "New Description 4",
    url: "https://loremflickr.com/200/200?random=3",
    price: 6666,
  },
  {
    id: 5,
    title: "New Title 5",
    description: "New Description 5",
    url: "https://loremflickr.com/200/200?random=4",
    price: 5555,
  },
  {
    id: 6,
    title: "New Title 6",
    description: "New Description 6",
    url: "https://loremflickr.com/200/200?random=5",
    price: 4444,
  },
  {
    id: 7,
    title: "New Title 7",
    description: "New Description 7",
    url: "https://loremflickr.com/200/200?random=6",
    price: 3333,
  },
  {
    id: 8,
    title: "New Title 8",
    description: "New Description 8",
    url: "https://loremflickr.com/200/200?random=7",
    price: 2222,
  },
  {
    id: 9,
    title: "New Title 9",
    description: "New Description 9",
    url: "https://loremflickr.com/200/200?random=8",
    price: 1111,
  },
  {
    id: 10,
    title: "New Title 10",
    description: "New Description 10",
    url: "https://loremflickr.com/200/200?random=9",
    price: 1234,
  },
];
</script>
