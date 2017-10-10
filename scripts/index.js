var vm = new Vue({
	el:"#app",
	data:{
		activeIndex: '1',
		vrImgSrc:[{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano27/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano27/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano28/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano26/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano31/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano32/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano32/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano33/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano34/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano36/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano47/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano38/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano39/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano40/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano41/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano42/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano48/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano44/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano45/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano46/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano65/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano51/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano50/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano61/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano60/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano66/"
		},{
			aHref:"http://9071.mzgtuan.com/vrpano/vrpano59/"
		},{
			aHref:"http://vr.justeasy.cn/view/354347.html"
		},{
			aHref:"http://vr.justeasy.cn/view/354689.html"
		},{
			aHref:"http://vr.justeasy.cn/view/354793.html"
		},{
			aHref:"http://vr.justeasy.cn/view/354849.html"
		},{
			aHref:"http://vr.justeasy.cn/view/355010.html"
		},{
			aHref:"http://vr.justeasy.cn/view/355152.html"
		},{
			aHref:"http://vr.justeasy.cn/view/368603.html"
		},{
			aHref:"http://vr.justeasy.cn/view/392586.html"
		},{
			aHref:"http://vr.justeasy.cn/view/388256.html"
		}],
		specilImgSrc:[{
			aHref:"https://yun.kujiale.com/design/3FO4MCDMX1BC/show?fromqrcode=true"
		},{
			aHref:"https://yun.kujiale.com/design/3FO4MC1VV5SM/show?fromqrcode=true"
		},{
			aHref:"https://yun.kujiale.com/design/3FO4IOLJSMRX/show?fromdesignerapp=true&sharefromapp=1&sharefrom=designer&appver=3.1.0"
		},{
			aHref:"https://yun.kujiale.com/design/3FO4IRVIT8FG/show?fromqrcode=true"
		}],
		romanImgSrc:[],
		fillingImgSrc:[],
		lineImgSrc:[],
		info:{
			info0:"info",
			info1:"info",
			info2:"info",
			info3:"info",
			info4:"info",
			info5:"info",
			info6:"info"
		}
	},
	methods:{
		/* 去掉字符串两头的空格 */
		trim:function(str){
			return str.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'');
		},
		/* 根据type显示 */
		showOnly:function(type){
			var key = "info"+type, 
			       imgs = $(".image");
			for(var x in this.info){
				if(key == x) this.info[x] = "info";
				else this.info[x] = "defult";
			}

			$(".el-card").hide();
			$("div[type='"+type+"']").show();


			this.load(imgs);
		},
		isOnVerticalViewPort:function(ele){
			var rect = ele.getBoundingClientRect(); // 获取距离视窗的位置信息
			return rect.top > 0 && rect.top <= this._viewPortHeight;
		},
		load:function(images){
			for (var i = 0; i < images.length; i++) {
				var img = images[i];
				if (this.isOnVerticalViewPort(img)) {
					var url = img.getAttribute('lz-src'); // 获取图片资源的地址
					img.setAttribute("src", url);
					img.isload = true; // 加载过后的图片设置加载标记，以免重复加载
				}
			}
		}
	},
	created:function(){
		var _this = this;
		/* 这里请求数据 暂时是mock数据 */

		/* 首页图片的地址 */
		for(var i = 0;i<36;i++){
			this.vrImgSrc[i].src = "./images/vr/"+(i+1)+".jpg"
		}
		/* 专卖店图片的地址 */
		for(var i = 0;i<4;i++){
			this.specilImgSrc[i].src="./images/vr/"+(i+1)+".jpg"
		}

		/* 罗马柱静态图片 */
		for(var i = 0;i<8;i++){
			this.romanImgSrc.push({
				type :0,
				src :"./images/roman/china/"+(i+1)+".png"
			})
		}
		for(var i = 0;i<8;i++){
			this.romanImgSrc.push({
				type :1,
				src :"./images/roman/newchina/"+(i+1)+".png"
			})
		}
		for(var i = 0;i<16;i++){
			this.romanImgSrc.push({
				type :2,
				src :"./images/roman/european/"+(i+1)+".png"
			})
		}
		for(var i = 0;i<8;i++){
			this.romanImgSrc.push({
				type :3,
				src :"./images/roman/abstruse/"+(i+1)+".png"
			})
		}
		for(var i = 0;i<4;i++){
			this.romanImgSrc.push({
				type :4,
				src :"./images/roman/pass/"+(i+1)+".png"
			})
		}

		/* 内填充 */
		for(var i = 0;i<6;i++){
			this.fillingImgSrc.push({
				type :0,
				src :"./images/filling/highTemp/"+(i+1)+".png"
			})
		}
		for(var i = 0;i<6;i++){
			this.fillingImgSrc.push({
				type :1,
				src :"./images/filling/plane/"+(i+1)+".png"
			})
		}
		for(var i = 0;i<6;i++){
			this.fillingImgSrc.push({
				type :2,
				src :"./images/filling/colored/"+(i+1)+".png"
			})
		}
		for(var i = 0;i<5;i++){
			this.fillingImgSrc.push({
				type :3,
				src :"./images/filling/montage/"+(i+1)+".png"
			})
		}
		for(var i = 0;i<6;i++){
			this.fillingImgSrc.push({
				type :4,
				src :"./images/filling/gold/"+(i+1)+".png"
			})
		}
		for(var i = 0;i<5;i++){
			this.fillingImgSrc.push({
				type :5,
				src :"./images/filling/natureStone/"+(i+1)+".png"
			})
		}

		/* 线条、大板、雕花（实物图） */
		for(var i = 0;i<12;i++){
			this.lineImgSrc.push({
				type :0,
				src :"./images/line/handcart/"+(i+1)+".png"
			})
		}
		for(var i = 0;i<7;i++){
			this.lineImgSrc.push({
				type :1,
				src :"./images/line/line/"+(i+1)+".png"
			})
		}
		for(var i = 0;i<0;i++){
			this.lineImgSrc.push({
				type :2,
				src :"./images/line/flower/"+(i+1)+".png"
			})
		}

		
	},
	mounted:function(){
		var _this = this;
		/* 页面dom准备完成 */

		/* 图组放大预览 */
		$('#imgView').viewer();

		/* 加载图片 */
		var imgs = $(".image");

		this._viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		$("body").scroll(function() {
			_this.load(imgs);
		});

		this.load(imgs);
	}
});


/* 设置所以的卡片图片登高 */
$(function(){
	var height = $(".image").eq(0).css("height"),
	    width  = Number($(".image").eq(0).css("width").split("px")[0])*1.01+"px";
	for(var i in $(".image")){
		$(".image").eq(i).css("height",height);
		$(".image").eq(i).css("min-height",width);
	}
});