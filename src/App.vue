<template>
    <div class="container container-lol">
        <writingSection></writingSection>
        <todo-list-content></todo-list-content>
    </div>
</template>

<script>
import writingSection from "@/components/writing-section";
import todoListContent from "@/components/list-content";


export default {
    name: 'App',
    components: {
        writingSection,
        todoListContent,
    },
}
</script>

<style lang="scss">
@import "assets/scss/reset-style";
@import "assets/scss/fonts";

#app {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #eee;
}

.container {
    //width: 500px;
    min-width: 500px;
    height: 100vh;
    //border: 1px solid crimson;
    background-color: white;
    box-shadow: 0 0 10px #555555;
    border-radius: 1rem;
    overflow: hidden;

    &-lol {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
}
</style>
