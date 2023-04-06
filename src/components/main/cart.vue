<template>
    <span class="icon-cart">
        <span class="circle" v-if="counts>0">
            <span id="cart-text" v-if="counts<100">{{ counts }}</span>
            <span id="cart-text" v-else>99+</span>
        </span>
        <span v-else>
            <span id="cart-text"></span>
        </span>
        <div id="cart-name">購物車</div>
    </span>
</template>
<script>
    export default {
        props: {
            counts:String
        }
    }
</script>
<style>
    .icon-cart:hover{
        color:rgb(248, 242, 242);
        cursor: pointer;
        user-select: none;
    }

    .circle{
        position: absolute;
        right:-15%;
        top:-15%;
        width:30px;
        height:30px;
        border-radius:999em;
        background-color:rgba(202, 43, 43, 0.918);
        font-size: 35%;
        font-weight:bold;
    }

    #cart-text{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        line-height: 30px;
        text-align: center;
    }

    #cart-name{
        position: absolute;
        font-size: 30%;
        left:10%;
        bottom:-40%;
        width:100%;
        font-weight:bold;
    }
</style>