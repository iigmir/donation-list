<template>
    <div class="ts-modal is-visible" v-on:click.self="$emit('close')">
        <div class="content">
            <div class="ts-content is-dense">
                <div class="ts-row">
                    <div class="column is-fluid">
                        <div class="ts-header">{{ rendered_name }} (#<span class="donatation-id">{{ id }}</span> )</div>
                    </div>
                    <div class="column">
                        <button v-on:click="$emit('close')" class="ts-close"></button>
                    </div>
                </div>
            </div>
            <div class="ts-divider"></div>
            <div class="ts-content">
                <dl>
                    <dt>全名</dt>
                    <dd>{{ name }}</dd>
                    <dt>捐贈碼</dt>
                    <dd>{{ code }}</dd>
                    <dt>簡稱</dt>
                    <dd>{{ shortname }}</dd>
                    <dt>統編</dt>
                    <dd>{{ inv_code }}</dd>
                    <dt>縣市</dt>
                    <dd>{{ region }}</dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
import { RenderedName } from "../utils.js";
export default {
    name: "TheModal",
    props: {
        id: {
            type: [String, Number],
            default: ""
        },
        name: {
            type: [String, Number],
            default: ""
        },
        code: {
            type: [String, Number],
            default: ""
        },
        shortname: {
            type: [String, Number],
            default: ""
        },
        inv_code: {
            type: [String, Number],
            default: ""
        },
        region: {
            type: [String, Number],
            default: ""
        },
    },
    emits: ["close"],
    computed: {
        rendered_name() {
            return RenderedName({ name: this.name, shortname: this.shortname });
        }
    },
};
</script>
