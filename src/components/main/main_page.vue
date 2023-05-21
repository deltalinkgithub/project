<template>
    <div>
        <transition name="fade" appear>
            <img id="photo-main" :src="imageUrl" alt="sorry!the photo cant view temporately" />
        </transition>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                imageUrl: ''
            }
        },
        methods:{
            loadImage() {
                const img = new Image();
                img.src = require("@/assets/photo/main/mainpage.jpg");
                img.onload = () => {
                    this.imageUrl = img.src;
                };
            },
        },
        mounted () {
            this.loadImage()
        }
    }
</script>
<style>
    #photo-main{
        width: 30vw;
        height: 50vh;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 2s;
    }

    .fade-enter-to,.fade-leave{
        opacity: 1;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>