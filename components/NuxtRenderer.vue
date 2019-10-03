<template>
    <div>
        <span
            class="badge"
            :class="{ 'badge--success': ssr, 'badge--primary': !ssr }"
            >Render: {{ ssr ? "server" : "client" }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        ssr: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
.badge {
    padding: 0.3rem 0.5rem;

    font-family: sans-serif;
    font-size: 12px;
    color: rgb(22, 22, 22);

    background-color: gray;
    border-radius: 4px;

    &--primary {
        background-color: rgb(61, 124, 218);
    }

    &--success {
        background-color: rgb(89, 172, 56);
    }
}
</style>
