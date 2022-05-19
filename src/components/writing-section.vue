<template>
    <div class="writing-section">
        <div class="writing-section__inputs">
            <label class="writing-section__label" for="writingBox">Enter Type : </label>
            <input v-model="text" class="writing-section__input-text" type="text" name="writing-box" id="writingBox"
                   placeholder="Enter text ..." @keyup.enter="sendText" autofocus>
        </div>
        <div class="writing-section__buttons">
            <button class="btn btn--success" ref="sendBtn" @click="sendText">send</button>
            <button class="btn btn--danger" disabled ref="clearBtn" @click="clearText">clear</button>
            <!--class : btn--disabled-->
        </div>

    </div>
</template>

<script>
export default {
    name: "writing-section",
    data() {
        return {
            text: '',
        }
    },
    watch: {
        text() {
            // !this.text.trim() ? this.$refs['sendBtn'].disabled = true : this.$refs['sendBtn'].disabled = false
            !this.text.trim() ? this.$refs['clearBtn'].disabled = true : this.$refs['clearBtn'].disabled = false
        }
    },
    methods: {
        clearText() {
            this.text = ""
        },
        sendText() {
            if (this.text.trim()){
                this.$store.commit('lol/addToListItems', this.text)
                this.text = ''
            }
        },
    },
}
</script>

<style scoped lang="scss">
.writing-section {
    width: 100%;
    border-bottom: 1px dashed #555;
    display: flex;
    padding: 10px 10px 15px;


    &__inputs {
        display: flex;
        flex-direction: column;
        flex-grow: 8;
        margin-right: 10px;
    }

    &__label {
        margin: 5px 0 10px;
        font-size: 1.1rem;
    }

    &__input-text {
        padding: 0.6rem;
        font-size: 1.5rem;
        border: 3px solid #466ac4;
        border-radius: 10px;
    }

    &__buttons {
        display: flex;
        flex-direction: column;
        flex-grow: 2;
    }
}

.btn {
    width: 100%;
    height: 100%;
    font-size: 1.1rem;
    border-radius: 8px;
    transition: background-color, color 0.3s;
    margin: 2px 0;
    cursor: pointer;

    &--success {
        background-color: white;
        color: #36AE7C;
        border: 2px solid #36AE7C;
        transition: background-color, color 0.3s;

        &:hover {
            background-color: #36AE7C;
            color: white;
        }
    }

    &--danger {
        background-color: white;
        color: #EB5353;
        border: 2px solid #EB5353;

        &:hover {
            background-color: #EB5353;
            color: white;
        }
    }

    &--disabled, &[disabled], &:disabled {
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;

        &:hover {
            border: 1px solid #999999;
            background-color: #cccccc;
            color: #666666;
            cursor: not-allowed;
        }
    }
}
</style>