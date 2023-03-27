<template>
    <div id="main">
        <div id="search-page">
            <el-card class="box-card">
                <span id="title">JIN'S 購物天堂</span>
                <!-- <a href="https://www.flaticon.com/free-icons/login" title="login icons">icons created by srip - Flaticon</a> -->
                <div id="icon-block">
                    <!-- <span class="icon-user"></span> -->
                    <jin-cart id="cart" counts="120"></jin-cart>
                </div>
                <div id="tag-block">
                    <jin-tag>首頁</jin-tag>
                    <jin-tag>關於我們</jin-tag>
                    <jin-tag>聯絡方式</jin-tag>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
</script>
<style src="@/assets/css/main/main.css"></style>
