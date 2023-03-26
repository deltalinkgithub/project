<template>
    <span class="icon-cart">
        <span class="circle">
            <span id="cart-text">123</span>
        </span>
        <div id="cart-name">購物車</div>
    </span>
</template>
<style>
    .icon-cart:hover{
        color:rgb(248, 242, 242);
    }

    .circle{
        position: absolute;
        right:-10%;
        top:-5%;
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