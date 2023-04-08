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
            <div id="menu-bottom">
                <span>此為練習作品</span>
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
                setTimeout(() => {
                    this.enable=true;
                }, 500);
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
        height:970px;
        background-color: rgb(255, 255, 255);
        border:0px solid;
    }

    .box-card .el-card__header{
        background-color: rgb(255, 255, 255);
        font-weight:bold;
        border-bottom:0px solid rgb(0, 255, 255);
        text-align: center;
    }

    .box-card #body{
        position:absolute;
        top:57px;
        left:0px;
    }

    .box-card #menu-bottom{
        position:absolute;
        bottom:0px;
        width:100%;
        text-align:center;
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