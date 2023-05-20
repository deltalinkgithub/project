<template>
    <transition name="slide">
        <el-card class="box-card" v-show="enable">
            <div slot="header">
                <span><slot></slot></span>
            </div>
            <div id="body">
                <span class="item-block" @click="item_extend()">
                        <transition name="arrow"  mode="out-in">
                            <span class="icon-play3" v-if="show" key="i1"></span>
                            <span class="icon-play3" v-else key="i2" style="display:block;transform:rotate(180deg);"></span>
                        </transition>
                        <span style="position:absolute;left:30px">123</span>
                </span>
            </div>
            <div id="menu-bottom">
                <span>use for practice</span>
            </div>
        </el-card>
    </transition>
</template>
<script>
    export default {
        data(){
            return {
                a:[{'種類一':['第一項,第二項']},{'種類二':['第一項','第二項']}],
                show:true,
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
                }, 100);
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
        height:910px;
        background-color: rgb(255, 255, 255);
        border:0px solid;
    }

    .box-card .el-card__header{
        background-color: rgba(230, 220, 220, 0.418);
        font-weight:bold;
        border-bottom:0px solid rgb(0, 255, 255);
        text-align: center;
    }

    .box-card #body{
        position:absolute;
        width:100%;
        height:100%;
        top:57px;
        left:0px;
    }

    .box-card #menu-bottom{
        position:absolute;
        bottom:0px;
        width:100%;
        text-align:center;
    }

    .box-card #body .item-block{
        display: inline-block;
        position:relative;
        left:0px;
        height:1em;
        width:100%;
        font-size:2em;
        text-align: left;
        background-color: rgba(255, 255, 255, 0.418);
        cursor: pointer;
        user-select: none;
    }

    .box-card #body .item-block:hover{
        background-color: rgba(201, 187, 187, 0.418);
    }

    .box-card #body .item-block .icon-play3{
        display: inline-block;
        position:absolute;
        left:0px;
        height:30px;
        width:30px;
        text-align: left;
    }

    #ninety-deg{
        transform: rotate(90deg);
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

    .arrow-enter-active,
    .arrow-leave-active {
        transition: transform 0.5s;
        display: block;
    }

    .arrow-enter-to,.arrow-leave{
        transform: rotate(0deg);
        display: block;
    }

    .arrow-enter,
    .arrow-leave-to {
        transform: rotate(180deg);
        display: block;
    }
</style>