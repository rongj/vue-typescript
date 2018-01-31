<template>
    <div>
        <div class="phone-header clearfix">
            <a href="" class="top-back"></a>
            <h2 class="top-title">{{article.mainplate}}</h2>
        </div>
        <div class="phone-body mop-detail-wrap">
            <div class="wrap-detail">
                <h2 class="post-title">{{article.title}}</h2>
                <div class="postman clearfix">
                    <a class="postman-avator" href="">
                    <img :src="`//i1.mopimg.cn/head/${article.userid}/80x80`">
                </a>
                    <a class="postman-info" href="">
                        <div class="postman-identity">
                            <h2>{{article.username}}</h2>
                            <span class="lz">楼主</span>
                            <!--<span class="grade">{{item}}</span>
                            <span class="gender man"></span>-->
                        </div>
                        <div class="post-time">
                            <span>{{article.publishtime | formatTimestamp}}</span>
                        </div>
                    </a>
                </div>
                <div class="post-text">
                    <div class="post-content" v-html="rendContent(article)"></div>
                </div>
                <div class="post-info clearfix">
                    <span class="post-tag fl">{{article.subplate}}</span>
                    <div class="post-btns fr">
                        <span class="btn-praise">
                        <i></i>
                        <em>{{article.praisenum | num}}</em>
                    </span>
                        <span class="btn-reply">
                        <i></i>
                        <em>{{article.replynum | num}}</em>
                    </span>
                        <span class="btn-share">
                        <i></i>
                        <em>分享</em>
                    </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import * as api from '../api/service'

interface TtImg {
	desc: string,
	url: string,
	width: string,
	height: string
}

@Component
export default class Detail extends Vue {
	private articleId: string = ''
	private articleType: string = ''
	private article: any = {}
	
    private created(): void {
		this.articleId = this.$route.params.id
		this.articleType = this.$route.params.type
		api.getArticleDetail({
			id: this.articleId,
			type: this.articleType
		}).then(res => {
			if(res.article !== null) {
				this.article = res.article
				
			}
		})
    }

	private rendContent (d: any): string {
		let imgStr: string = ''
		if(d && d.imgjs && JSON.parse(d.imgjs).length) {
			JSON.parse(d.imgjs).map((l: TtImg) => imgStr += `<img src="${l.url}" /><p>${l.desc}</p>`)
		}
		return (d.content || '') + imgStr
	}
}
</script>

<style lang="scss">
@import '../assets/scss/mixin';
@import '../assets/scss/postman';

.phone-header {
    height: $th;
    line-height: $th;
    border-bottom: 1px solid #E0DEDC;
    position: fixed;
    width: 7.5rem;
    background: #fff;
    top: 0;
    z-index: 111;
    .top-back {
        display: block;
        width: $th;
        height: $th;
        background: url(../assets/images/back.png) no-repeat 50% 50% / auto 0.36rem;
        position: absolute;
        top: 0;
        left: 0;
    }
    .top-title {
        width: 55%;
        margin: 0 auto;
        font-size: 0.32rem;
        text-align: center;
        color: #3B3A38;
        @extend .singleline-ellipsis;
    }
    .top-btns {
        position: absolute;
        height: 0.8rem;
        top: 0.04rem;
        right: 0.04rem;
    }
    .filter-lz {
        display: block;
        width: 0.74rem;
        height: 0.38rem;
        text-align: center;
        line-height: 0.38rem;
        border: 1px solid #979797;
        border-radius: 3px;
        font-size: 0.22rem;
        color: #A7A7A7;
        margin-top: 0.22rem;
        margin-right: 0.2rem;
        &.active {
            background: $mc;
            color: #fff;
            border-color: $mc;
        }
    }
    .btn-reply {
        display: block;
        width: 0.8rem;
        height: 0.8rem;
        background: url(../assets/images/new.png) no-repeat 50% 50% / auto 0.4rem;
    }
    .btn-share {
        display: block;
        width: 0.8rem;
        height: 0.8rem;
        background: url(../assets/images/more.png) no-repeat 50% 50% / auto 0.1rem;
    }
}

.mop-detail-wrap {
    padding-top: $th;
}

.wrap-detail{
	padding: 0.15rem 0.35rem;
	border-bottom: 1px solid #f0edeb;
}
.post-text{
    padding-bottom: 0.2rem;
}
.post-title{
	font-size: 0.46rem;
	margin: 0.1rem 0 0.2rem;
}
.post-content{
    margin-top: 0.2rem;
	font-size: 0.3rem;
	line-height: 1.6;
	p{
		color: #666;
		text-align: justify;
	}
	img{
		max-width: 100%;
		margin: 0.2rem 0;
        height: auto;
	}
}
.post-info {
    margin-top: 0.2rem;
	span.post-tag {
		display: block;
		padding: 0 0.2rem;
		height: 0.4rem;
		line-height: 0.42rem;
		background: #77c3d3;
		color: #fff;
		font-size: 0.24rem;
		border-radius: 3px;
		margin-top: 0.05rem;
	}
}
.post-btns {
    font-size: 0.26rem;
    line-height: 0.5rem;
    color: #888;
    span {
        padding: 0.1rem 0;
    }
    i {
        display: inline-block;
        width: 0.4rem;
        height: 0.3rem;
        vertical-align: -0.05rem;
    }
    .btn-praise {
        margin-right: 0.28rem;
        i {
            background: url(../assets/images/list_like_normal.png) no-repeat 50% 50% / auto 0.3rem;
        }
        &.active i{
            background: url(../assets/images/list_like_active.png) no-repeat 50% 50% / auto 0.3rem;
        }
    }
    .btn-reply {
        margin-right: 0.28rem;
        i {
            background: url(../assets/images/list_comment.png) no-repeat 50% 50% / auto 0.3rem;
        }
    }
    .btn-share {
        i {
            background: url(../assets/images/list_share.png) no-repeat 50% 50% / auto 0.3rem;
        }
    }
}

</style>
