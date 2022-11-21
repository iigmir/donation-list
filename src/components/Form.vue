<template>
    <form class="form sticky ts-input is-labeled" v-on:submit.prevent="submit()">
        <input
            id="keyword-input"
            v-model="keyword"
            placeholder="請輸入名稱或捐贈碼"
            v-on:change="submit()"
            autocomplete="off"
        />
        <!-- <button class="label ts-button" type="submit">Submit</button> -->
    </form>
</template>

<script setup>
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";

const emit = defineEmits(["change"]);

const greetMsg = ref("");
const keyword = ref("");

/**
 * Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
 */
async function old_submit() {
    greetMsg.value = await invoke("greet", { name: keyword.value });
}

const submit = () => {
    emit("change", keyword.value);
};
</script>

<style scoped>
.form {
    margin-bottom: 1rem;
}
.form.sticky {
    position: sticky;
    top: 1rem;
    z-index: 2;
    /* max-width: 88vw; */
}
</style>
