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
        position:absolute;
        top:0;
        padding: 0%;
        width: 100%;
        height: 100%;
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