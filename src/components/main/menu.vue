<template>
    <transition name="slide">
        <el-card class="box-card" v-show="enable">
            <div slot="header">
                <span><slot></slot></span>
            </div>
            <div id="body">
                <!-- <span class="item-block">
                    123
                </span>
                <span class="item-block">
                    123
                </span>
                <span class="item-block">
                    123
                </span> -->
            </div>
        </el-card>
    </transition>
</template>
<script>
    export default {
        data(){
            return {
            a:[{'種類一':['第一項,第二項']},{'種類二':['第一項','第二項']}],
            enable:false
            };
        },
        props: {
            categorys:Array
        },
        methods:{
            animate_enable(){
                this.enable=true
            }
        },
        mounted(){
            this.animate_enable()
        }
    }
</script>
<style>
    .box-card{
        width:300px;
        height:600px;
        background-color: rgba(0, 60, 255, 0.404);
        border:1px solid rgb(0, 0, 0);
    }

    .box-card .el-card__header{
        background-color: rgb(0, 255, 255);
        font-weight:bold;
        text-align: center;
    }

    .box-card #body{
        position:absolute;
        top:57px;
        left:0px;
        width:100%;
        height:90.5%;
    }

    .item-block{
        display: inline-block;
        position:relative;
        top:1px;
        left:0px;
        height:9%;
        width:300px;
        border:2px solid rgb(0, 0, 0);
        background-color: rgba(128, 157, 235, 0.418);
    }
    .slide-enter-active,
    .slide-leave-active {
        transition: transform 1s;
    }

    .slide-enter-to,.slide-leave{
        transform: translateX(0);
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateX(100%);
    }
</style>