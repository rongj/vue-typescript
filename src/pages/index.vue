<template>
    <div class="wx-header">
        <img src="../assets/images/logo.png" height="46">
        <div class="wx-header-login">
            <span class="mr10">当前登录用户：{{loginname}}</span>
            <span @click="handleLogout($event)">退出</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'

@Component
export default class Index extends Vue {
    private loginname: string = '测试'
    mounted() {
        this.a()
    }
    a (): void {
        console.log(1223);
        
    }
    private handleLogout (e: any): void {
        console.log(e);
    }
}
</script>

<style lang="scss">
    .wx-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		border-bottom: 1px solid #ddd;
	}
	.el-date-editor .el-range-separator {
		width: auto;
	}
	.ss-toolbar {
		font-size: 14px;
		color: #666;
		background: #fff;
		padding: 10px 20px;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
	}
	.ss-table {
		padding: 10px;
		background: #fff;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
	}
	.ss-chart {
		background: #fff;
		margin-top: 10px;
		padding: 20px 0;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
	}
</style>

