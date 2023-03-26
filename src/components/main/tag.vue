<template>
    <el-button type="text" id="tag-text"><slot></slot></el-button>
</template>
<script>
</script>
<style>
    #tag-text{
        color:black;
        font-weight:bold;
        margin-left:10%;
        font-size:20px;
    }

    #tag-text:hover{
        color:rgb(248, 242, 242);
    }
</style>