<template>
	<div class="phone-wrap">
		<div class="mop-header">
			<a href="//m.mop.com" class="mop-header-l logo">
				<img src="../assets/images/logo.png">
			</a>
			<div class="mop-header-c">
				<div class="mop-top-tab">
					<a href="/" class="active">动态</a>
					<router-link to="detail">圈子</router-link>
				</div>
			</div>
			<div class="mop-header-r">
				<a href="" class="mop-top-post"></a>
				<a href="" class="mop-top-user"></a>
			</div>
		</div>
		<div class="tabs-nav">
		    <div class="tabs-nav-items">
		        <span v-for="(item, index) in subscribePlate" :key="index"  :class="{'active': index === activeIndex}" @click="handleTab(item, index, $event)">{{item.plateName}}</span>
		        <i class="tabs-line"></i>
		    </div>
		    <div class="tabs-nav-more"></div>
		    <div class="tabs-nav-add"></div>
		</div>

	    <div class="phone-body">
	    	<div class="list-wrap">
				<div class="mop-index-list">
					<template v-for="(item,i) in listdata">
						<div class="mop-index-item" :class="{'single-img':item.imgjs && JSON.parse(item.imgjs) &&　JSON.parse(item.imgjs).length < 3 && !item.videojs, 'video-item': item.videojs}" :key="i">
							  <router-link :to="{name: 'detail', params: {id: item.articleid, type: item.platelv001id.substr(0,1) === '2' ? 'tt' : 'dzh'}}" class="post-content"> 
							<!--<router-link :href="`//m${item.platelv001id.substr(0,1) == '2' ? 'tt' : 'dzh'}.mop.com/a/${item.htmlname}?fr=${item.platelv001id}&level=index|${item.platelv001id.substr(0,1) == '2' ? 'tt' : 'dzh'}|${item.platelv001id}|${item.platelv002id}|${Math.floor(i/pagesize)}|${i%pagesize}`" class="post-content">-->
								<h2>{{item.title}}</h2>
								<div class="post-img img-preview" v-if="item.imgjs && JSON.parse(item.imgjs) &&　JSON.parse(item.imgjs).length < 3 && !item.videojs">
									<div class="img-wrap">
										<img :src="JSON.parse(item.imgjs)[0].src" alt="">
									</div>
								</div>
								<div class="post-imgs img-preview" v-if="item.imgjs && JSON.parse(item.imgjs) &&　JSON.parse(item.imgjs).length > 2">
									<div class="img-wrap" v-for="(img,i) in item.imgjs && JSON.parse(item.imgjs).slice(0,3)" :key="i">
										<img :src="img.src+'?x-oss-process=style/mop2_3'" alt="">
									</div>
								</div>
								<div class="post-video img-preview" v-if="item.videojs">
									<img :src="JSON.parse(item.imgjs)[0].src" alt="">
									<i></i>
									<span>{{ item.videojs && JSON.parse(item.videojs) && JSON.parse(item.videojs)[0].videoTime| formatDuration}}</span>
								</div>
							</router-link>
							<div class="post-info clearfix">
								<a :href="`//m.mop.com/space.html?userid=${item.userid}`" class="post-man fl">
									<img :src="'//i1.mopimg.cn/head/'+item.userid+'/80x80'" :alt="item.username">
									<span>{{item.username}}</span>
								</a>
								<div class="post-count fr">
									<span class="post-view"><i></i>{{item.readnum | num}}</span>
									<span class="post-reply" v-if="item.replynum>0"><i></i>{{item.replynum}}</span>
								</div>
							</div>
						</div>
					</template>
				</div>
				<div class="spinner" v-if="!loadingFlag && !nodata">
					<div class="bounce1"></div>
					<div class="bounce2"></div>
					<div class="bounce3"></div>
				</div>
				<div class="nomore-data" v-if="nodata">没有更多数据啦！</div>
	    	</div>
	    </div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { allPlates, recommendPlates } from '../utils/plate'

import $ from 'webpack-zepto'

import * as config from '../api/config'
import * as api from '../api/service'
import * as Global from '../utils/global'

interface PlateItem {
	plateId: number,
	plateName: string,
	colid: string,
	plateSource?: number | string,
	plateImage?: string,
	plateDesc?: string,
	follow?: boolean
}

interface TabStyle {
	width?: string | number,
	left?: string | number,
	scrollLeft?: string | number,
}

@Component
export default class Index extends Vue {
    private subscribePlate: PlateItem[] = []
	private activeIndex: number = 0
	private tabStyle: TabStyle = {}
	private listdata: StoreState.FlowList[] = []
	private loadingFlag: boolean = true
	private nodata: boolean = false
	private pgnum: number = 0
	private pageSize:number = 20
	private colid: string = '999999'
	private startcol: string = 'null'
	private mirrorid: string = 'null'
	
	private created (): void {
		this.subscribePlate = recommendPlates
	}
	
    private mounted (): void {
		this.scrollTab(this.activeIndex > this.subscribePlate.length ? 0 : this.activeIndex);
    }

	/* 路由变化 */
	@Watch('$route', { immediate: true })
	private routeChange (val: Route, oldVal: Route): void {
	}

	/* 索引变化 */
	@Watch('activeIndex', { immediate: true })
	private activeIndexChange (val:number, oldVal: number): void {
	}
	
	/* tab选择 */
	private handleTab (item: PlateItem[], index: number, e: any): void {
		this.scrollTab(index)
	}
	
	/* 选项卡 */
	private scrollTab (i: number): void {
		this.activeIndex = i
		const $p = $(".tabs-nav-items"),
			$nav = $p.find('span').eq(i),
			w = $nav.width(),
			ol = $nav[0].offsetLeft,
			$line = $('.tabs-line'),
			ow = w/2 + ol - $p.width()/2,
			sl = ow > 0 ? ow : 0

		$line.css({
			width: w,
			left: ol
		})
		$p.scrollLeft(sl)
		
		this.recordPlateList()
		this.recordPlatePos()
		// this.tabStyle = {
		// 	width: w,
		// 	left: ol,
		// 	scrollLeft: sl
		// }
	}

	/* 记录板块列表信息 */
	private recordPlateList (): void {
		const plate: PlateItem = this.subscribePlate[this.activeIndex]
		const id = plate.plateId;
		this.colid = plate.colid;
		if(sessionStorage.getItem('list'+id)) {
			const d: any = JSON.parse((sessionStorage as any).getItem('list'+id))
			this.pgnum = d.pgnum;
			if (d.listdata &&　d.listdata.length) {
				this.listdata = d.listdata;
				this.startcol = d.startcol;
				this.mirrorid = d.mirrorid;
			} else {
				this.getListData(id);
			}
		} else {
			this.listdata = [];
			this.startcol = 'null';
			this.mirrorid = 'null';
			this.pgnum = 0;
			this.getListData(id);
		}
	}
	
	/**
	 * 获取列表数据
	 * @param id { string } 版块plateId
	 */
	private getListData (id?: number) :void {
		let _this = this;
		_this.loadingFlag = false;
		api.getDataList({
			colid: this.colid,
			serialnum: 300000,
			platform: 'wap',
			qid: config.qid,
			uid: config.uid,
			pgnum: this.pgnum,
			pageSize: this.pageSize,
			startcol: this.startcol,
			mirrorid: this.mirrorid,
		}).then(res => {
			if(res.data.length) {
				_this.loadingFlag = true
				if (id !== _this.subscribePlate[_this.activeIndex].plateId) return 
				_this.nodata = false
				_this.listdata = _this.listdata.concat(res.data)
				_this.startcol = res.data[res.data.length-1].startcol
				_this.mirrorid = res.mirrorid
				sessionStorage.setItem('list'+_this.subscribePlate[_this.activeIndex].plateId, JSON.stringify({
					id: _this.subscribePlate[_this.activeIndex].plateId,
					pgnum: _this.pgnum,
					colid: _this.colid,
					startcol: _this.startcol,
					mirrorid: _this.mirrorid,
					listdata: _this.listdata
				}))
			}
		})
	}

	/* 记录板块滚动信息 */
	private recordPlatePos (): void {
		const id = this.subscribePlate[this.activeIndex].plateId,
			scrollTop = sessionStorage.getItem('scrollTop'+id);
		const q: any = document.body;
		if (scrollTop) {
			this.$nextTick( () => 
				q.scrollTop = scrollTop
			);
		}
		window.addEventListener('scroll', () => {
			const id = this.subscribePlate[this.activeIndex].plateId;
			if (q.scrollTop > 0) {
				sessionStorage.setItem('scrollTop' + id, q.scrollTop);
			}
			if (q.scrollTop + document.documentElement.clientHeight + 200 > q.offsetHeight && this.loadingFlag && q.scrollTop > 0) {
				this.loadingFlag = false;
				++this.pgnum;
				this.getListData(id);
			}
		}, false)
	}
}
</script>

<style lang="scss">
	@import '../assets/scss/mixin';
	@import '../assets/scss/list';
	@import '../assets/scss/spinner';

	/* 顶部 */
	.mop-header {
		width: 7.5rem;
		background: #fff;
		height: $th;
		line-height: $th;
		position: fixed;
		top: 0;
		z-index: 2;
		border-bottom: 1px solid #f2f2f1;
		display: none;
		.mop-header-c {
			width: 4rem;
			margin: 0 auto;
		}
		.mop-header-l {
			position: absolute;
			left: 0;
			top: 0;
			height: $th;
		}
		.mop-header-r {
			position: absolute;
			right: 0;
			top: 0;
			height: $th;
			a {
				display: block;
				width: $th;
				height: $th;
				float: left;
			}
		}
		.logo {
			display: block;
			margin-left: 0.2rem;
			img {
				height: 0.6rem;
			}
		}
	}
	.mop-top-tab {
		text-align: center;
		a {
			font-size: 0.3rem;
			font-weight: bold;
			color: $txc;
			margin: 0 0.2rem;
			position: relative;
			&.active {
				color: $mc;
				&:after {
					content: '';
					display: block;
					width: 0.5rem;
					height: 0.04rem;
					border-radius: 0.02rem;
					position: absolute;
					left: 50%;
					margin-left: -0.25rem;
					top: 0.45rem;
					background: $mc;
				}
			}
		}
	}
	.mop-top-user {
		background: url(../assets/images/user.png) no-repeat 50% 50% / auto 0.4rem;
	}
	.mop-top-post {
		width: 0.46rem!important;
		background: url(../assets/images/new.png) no-repeat 50% 50% / auto 0.4rem;
	}

	/* 选项卡 */
	.tabs-nav-items::-webkit-scrollbar{
		display: none;
		height: 0;
	}
	.tabs-nav{
		background: #fff;
		height: $th;
		line-height: $th;
		width: 7.5rem;
		position: fixed;
		z-index: 2;
		// margin-bottom: -1px;
		top: 0;
		&:after{
			content: '';
			display: block;
			width: 100%;
			height: 1px;
			background: #eaeaea;
			position: absolute;
			left: 0;
			bottom: 0;
			z-index: 1;
			transition: all 0.3s;
		}
		.tabs-nav-items{
			white-space: nowrap;
			overflow-y: hidden;
			overflow-x: auto;
			-webkit-overflow-scrolling : touch;
			padding-right: $th;
			height: $th;
			transition: all 0.3s;
			position: relative;
			z-index: 2;
			span{
				display: inline-block;
				height: $th;
				padding: 0 0.2rem;
				color: #888888;
				font-size: 0.28rem;
				&.active{
					color: $mc;
				}
			}
			.tabs-line{
				display: block;
				width: 0.96rem;
				height: 3px;
				background: $mc;
				position: absolute;
				left: 0;
				border-radius: 3px;
				bottom:0;
				transition: all 0.3s;
			}
		}
		.tabs-nav-add{
			position: absolute;
			right: 0;
			top: -1px;
			width: 0.6rem;
			height: $th;
			background: #fff url(../assets/images/list_new.png) no-repeat 0 50% / auto 0.4rem;
			z-index: 11;
		}
		.tabs-nav-more{
			position: absolute;
			right: 0.6rem;
			top: -1px;
			width: 0.4rem;
			height: $th;
			z-index: 11;
			background: -webkit-linear-gradient(left,rgba(255,255,255,0),rgba(255,255,255,1));
		}
	}

	/* 内容区 */
	.phone-body {
		padding-top: $th;
	}
</style>

