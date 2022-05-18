<template>
    <div class="todoList-content">
        <div class="todoList-content__items" id="containerToDoList">
            <template v-if="$store.state.listItems">
                <transition-group name="listItem">
                    <div class="todoList-content__item" v-for="(item,index) in $store.state.listItems" :key="index">
                        <p class="todoList-content__item-desc">{{ item }}</p> <!--class : line-through-->
                        <button class="todoList-content__item-delete" @click="itemDelete(index)">×</button>
                    </div>
                </transition-group>
            </template>
            <!--            <div class="todoList-content__item">-->
            <!--                <p class="todoList-content__item-desc line-through">Lorem ipsum dolor sit amet, consectetur adipisicing-->
            <!--                    elit.-->
            <!--                    Doloremque, voluptatibus!</p>-->
            <!--                <button class="todoList-content__item-delete">×</button>-->
            <!--            </div>-->
        </div>
    </div>
</template>

<script>
export default {
    name: "todoList-content",
    data() {
        return {
            // listItem: [],
        }
    },
    created() {
        // this.listItem = JSON.parse(localStorage.getItem('listItem')) | []
        this.$store.commit('setFromLocalStorageToListItem')
    },
    watch: {
        // listItem() {
        //     localStorage.setItem('listItem', JSON.stringify(this.listItem))
        // },
    },
    methods: {
        itemDelete(index) {
            // document.querySelector().remove()
            this.$store.commit('deleteItemOfList', index)
        }
    }
}
</script>

<style scoped lang="scss">
.todoList-content {
    width: 100%;
    height: 100%;
    padding: 10px 0 15px;
    margin-bottom: 15px;
    overflow: hidden;
    overflow-y: scroll;
    position: relative;
    //border: 10px solid crimson;

    &__items {
        width: 100%;
        height: 100%;
        padding: 0 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column-reverse;
        //overflow-x: hidden;
        //overflow-y: scroll;
        //align-self: stretch;

        .listItem-move,
        .listItem-enter-active,
        .listItem-leave-active {
            transition: all 0.5s ease;
        }

        .listItem-enter-from,
        .listItem-leave-to {
            opacity: 0;
            transform: translateY(-30px);
        }

        /* ensure leaving items are taken out of layout flow so that moving
            animations can be calculated correctly. */
        .listItem-leave-active {
            position: absolute;
        }
    }

    &__item {
        width: 100%;
        border: 3px solid #ccc;
        margin: 5px 0;
        padding: 8px;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        //justify-content: center;
        align-items: center;
        position: relative;
        transition: border, margin, padding 0.3s, 0.3s, 0.3s;


        &-desc {
            text-align: justify;
            padding-right: 10px;
            cursor: default;
            font-size: 1.2rem;
        }

        .line-through {
            text-decoration: line-through 2px crimson;
        }

        &-delete {
            font-size: 2rem;
            width: 2rem;
            height: 2rem;
            line-height: 2rem;
            position: absolute;
            right: 1rem;
            opacity: 0.05;
            background-color: transparent;
            border: 3px solid transparent;

            font-weight: bold;
            color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;

            transition: background-color, border, color 0.2s, 0.2s, 0.2s;
        }

        &:hover &-delete {
            opacity: 1;
            border-radius: 50px;
            border: 3px solid crimson;
            background-color: white;
            color: crimson;
            cursor: pointer;
        }
    }
}
</style>