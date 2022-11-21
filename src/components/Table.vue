<template>
    <div class="the-table">
        <table class="ts-table">
            <!-- <th>名稱</th>  <td>{{ item.name }}</td> -->
            <!-- <th>縣市</th>  <td>{{ item.region }}</td> -->
            <thead>
                <tr>
                    <th>捐贈碼</th>
                    <th>簡稱</th>
                    <th>統編</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list" v-bind:key="item.code" v-on:click="show_modal(item)">
                    <td>{{ item.code }}</td>
                    <td>{{ RenderedName(item) }}</td>
                    <td>{{ item.inv_code }}</td>
                </tr>
            </tbody>
        </table>
        <the-modal v-if="modal" v-bind="modal_props" v-on:close="modal = false" />
    </div>
</template>

<script>export default { name: "TheTable" };</script>

<script setup>
import { ref } from "vue";
import TheModal from "./Modal.vue";
import { RenderedName } from "../utils.js";

defineProps({
    list: {
        type: [Array],
        default: () => [{
            "id": "",
            "name": "",
            "code": "",
            "shortname": "",
            "inv_code": "",
            "region": ""
        }],
    }
})

const modal = ref(false);
const modal_props = ref({
    "id": "",
    "name": "",
    "code": "",
    "shortname": "",
    "inv_code": "",
    "region": ""
});

const show_modal = (item) => {
    // console.log( item.shortname, item, item.shortname ?? item.name );
    modal_props.value = item;
    modal.value = true;
};

</script>
