<template>
    <main class="main ts-container is-fluid">
        <input-form v-on:change="w => keyword = w" />
        <the-table v-bind="{ list }" />
    </main>
</template>

<script setup>
// Components
import InputForm from "./components/Form.vue";
import TheTable from "./components/Table.vue";
// Datas
import SourceDatas from "./assets/source.csv";
import { ref, computed } from "vue";

const keyword = ref("");
const list = computed( () => {
    if( keyword.value.trim() === "" ) {
        return SourceDatas;
    }
    return SourceDatas.filter( its => {
        const type = isNaN( parseInt(keyword.value, 10) ) ? "name" : "code";
        const target = its[type];
        return target.includes( keyword.value );
    });
});
</script>

<style scoped>
.main {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>
