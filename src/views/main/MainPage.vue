<template>
    <div id="main">
        <div id="top-list">
            <el-card class="box-card">
                <span id="title">本屋書店</span>
                <!-- <a href="https://www.flaticon.com/free-icons/login" title="login icons">icons created by srip - Flaticon</a> -->
                <div id="icon-block">
                    <!-- <span class="icon-user"></span> -->
                    <jin-cart id="cart" counts="1"></jin-cart>
                </div>
                <div id="tag-block">
                    <jin-tag>首頁</jin-tag>
                    <jin-tag>關於我們</jin-tag>
                    <jin-tag>聯絡方式</jin-tag>
                </div>
            </el-card>
        </div>
        <div id="main-photo">
            <jin-page></jin-page>
        </div>
        <div id="side-menu">
            <jin-menu>全站商品</jin-menu>
        </div>
        <div id="bottom-list">
            <el-card class="box-card">
                <span id="title">use for practice</span>
            </el-card>
        </div>
    </div>
</template>
<script src="@/assets/script/main/main_page.js"></script>
<style src="@/assets/css/main/main.css"></style>
