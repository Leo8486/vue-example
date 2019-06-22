/*var app = new Vue({
	el: "#app",
	data: {
		name: ""
	}
})*/

/*var app = new Vue({
	el: "#app",
	data: {
		a: 2
	},
	created: function () {
		console.log(this.a, "a");
	},
	mounted: function () {
		console.log(this.$el, "el");
	}
})

console.log(app.a,"1")*/


/*var app = new Vue({
	el: "#app",
	data: {
		link: '<a href="#">这是一个链接</a>'
	}
})*/

/*var app = new Vue({
	el: "#app",
	data: {
		number: 100,
		isOK: false,
		text: "123,456"
	}
})
*/

/*var padDate = function (value) {
	return value < 10 ? "0" + value : value;
}

var app = new Vue({
	el: "#app",
	data: {
		date: new Date()
	},
	filters: {
		formatDate: function (value) {
			var date = new Date(value);
			var year = date.getFullYear();
			var month = padDate(date.getMonth() + 1);
			var day = padDate(date.getDate());
			var hours = padDate(date.getHours());
			var minutes = padDate(date.getMinutes());
			var seconds = padDate(date.getSeconds());
			return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes +':' + seconds; 
		}
	},
	mounted: function () {
		var _this = this;
		this.timer = setInterval(function() {
			_this.date = new Date();
		}, 1000);
	},
	beforeDestory: function () {
		if (this.timer) {
			clearInterval(this.timer);
		}
	}
})*/


/*var app = new Vue({
	el: "#app",
	data: {
		show: true
	}
})*/

/*var app = new Vue({
	el: "#app",
	data: {
		url: 'http://www.baidu.com',
		imgUrl: ''
	}
})*/



/*var app = new Vue({
	el: "#app",
	data: {
		show: true
	},
	methods: {
		handleClose: function () {
			this.close();
		},
		close: function () {
			this.show = false;
		}
	}
})*/

/*var app = new Vue({
	el: "#app",
	data: {
		show: true
	},
	methods: {
		init: function (text) {
			console.log(text);
		}
	},
	mounted: function () {
		this.init("在初始化时调用");
	}
})

app.init("在实例外部调用");*/



/*var app = new Vue({
	el: "#app",
	data: {
		show: true
	},
	methods: {
		dateNow: function (text) {
			return Date.now();
		}
	},
	mounted: function () {
		
	},
	computed: {
		now: function () {
			return Date.now();
		}
	}
})*/



/*var app = new Vue({
	el: "#app",
	data: {
		isActive: true,
		error: null
	},
	methods: {
		dateNow: function (text) {
			return Date.now();
		}
	},
	mounted: function () {
		
	},
	computed: {
		classes: function () {
			return {
				active: this.isActive && !this.error,
				'text-fail': this.error && this.error.type === 'fail'
			};
		}
	}
})*/



/*var app = new Vue({
	el: "#app",
	data: {
		activeCls: 'active',
		errorCls: 'error'
	},
	methods: {
		dateNow: function (text) {
			return Date.now();
		}
	},
	mounted: function () {
		
	},
	computed: {
		classes: function () {
			return {
				active: this.isActive && !this.error,
				'text-fail': this.error && this.error.type === 'fail'
			};
		}
	}
})*/


// var app = new Vue({
// 	el: "#app",
// 	data: {
// 		message: '这是一段文本'
// 	}
// })

/*var app = new Vue({
	el: "#app",
	data: {
		type: "name"
	},
	methods: {
		handleToggleClick: function () {
			this.type = this.type === "name" ? "mail" : "name";
		}
	}
})
*/

/*var app = new Vue({
	el: "#app",
	data: {
		books: [
			{
				name: "《Vue.js实战》",
				author: 'Leo'
			},
			{
				name: "《javaScript 语言精粹》",
				author: 'Leo'
			},
			{
				name: "《javaScript 高级程序设计》",
				author: 'Leo'
			}
		]
	}
})



Vue.set(app.books, 3, {
	name: "《css 揭秘》",
	author: "Leo"
})


app.$set(app.books, 4, {
	name: "《css 揭秘111》",
	author: "Leo"
})

app.books.splice(3,1, {
	name: "《css 揭秘》222",
	author: "Leo"
})

app.books = app.books.filter(function (item) {
	return item.name.match(/javaScript/);
})

app.books.splice(1);*/




/*购物车示例*/

/*var app = new Vue({
	el: "#app",
	data: {
		list: [
			{
				id: 1,
				name: 'iPhone',
				price: 6188,
				count: 1
			},{
				id: 2,
				name: 'iPad Pro',
				price: 5888,
				count: 1
			},
			{
				id: 3,
				name: 'MacBook Pro',
				price: 21488,
				count: 1
			}
		]
	},
	methods: {
		handleReduce: function (index) {
			if (this.list[index].count === 1) return;
			this.list[index].count--;
		},
		handleAdd: function (index) {
			this.list[index].count++;
		},
		handleRemove: function (index) {
			this.list.splice(index, 1);
		}
	},
	computed: {
		totalPrice: function () {
			var total = 0;
			for (var i = 0; i < this.list.length; i++) {
				var item = this.list[i];
				total += item.price * item.count;
			}

			return total.toString().replace(/\B(?=(\d{3})+$)/g,",");
		}
	}
})*/

/*表单 model */


/*radio*/
/*var app = new Vue({
	el: "#app",
	data: {
		picked: "js"
	}
})*/

/*checkbox*/
/*var app = new Vue({
	el: "#app",
	data: {
		checked: []
	}
})*/


/*selected*/
/*var app = new Vue({
	el: "#app",
	data: {
		selected:'',
		options: [
			{
				text: 'HTML',
				value: "html"
			},
			{
				text: 'javaScript',
				value: "js"
			},
			{
				text: 'CSS',
				value: "css"
			}
		]
	}
})*/

// Vue.component("my-component", {
// 	props: ["message"],
// 	template: '<div>{{ message }}</div>'
// })

// var app = new Vue({
// 	el: "#app",
// 	data: {
// 		parentMessage:'nihao'
// 	}
// })



/*自定义事件*/

/*Vue.component("my-component", {
	props: ["message"],
	template: '\<div>\
	<button @click="handleIncrease"> + 1</button>\
	<button @click="handleReduce"> - 1</button>\
	</div>',
	data: function () {
		return {
			counter: 0
		}
	},
	methods: {
		handleIncrease: function () {
			this.counter++;
			this.$emit("increase", this.counter);
		},
		handleReduce: function () {
			this.counter--;
			this.$emit("reduce", this.counter);
		}
	}
})

var app = new Vue({
	el: "#app",
	data: {
		total: 0
	},
	methods: {
		handleGetTotal: function (total) {
			this.total = total;
		}
	}
})*/


/*使用v-model*/
/*Vue.component("my-component", {
	props: ["message"],
	template: '<button @click="handelClick"> + 1</button>',
	data: function () {
		return {
			counter: 0
		}
	},
	methods: {
		handelClick: function () {
			this.counter++;
			this.$emit("input", this.counter);
		}
	}
})

var app = new Vue({
	el: "#app",
	data: {
		total: 0
	}
})*/



/*Vue.component("my-component", {
	props: ["value"],
	template: '<input :value="value" @input="updateValue">',
	methods: {
		updateValue: function (event) {
			this.$emit("input", event.target.value);
		}
	}
})

var app = new Vue({
	el: "#app",
	data: {
		total: 0
	},
	methods: {
		handleReduce: function() {
			this.total--;
		}
	}
})*/

/*中央事件总线bus*/

/*var bus = new Vue();
Vue.component("component-a", {
	template: '<button @click="handelEvent">传递事件</button>',
	methods: {
		handelEvent: function () {
			bus.$emit("on-message", "来自组建component-a的内容")
		}
	}
})

var app = new Vue({
	el: "#app",
	data: {
		message: ""
	},
	mounted: function () {
		var _this = this;
		bus.$on("on-message", function (msg) {
			_this.message = msg;
		})
	}
})*/



/*作用域插槽*/

/*Vue.component("child-component", {
	template: '\<div class="container">\
		<slot msg="来自子组件的内容"></slot>\
	</div>'
})*/

/*Vue.component("my-list", {
	template: '\<ul>\
		<slot name="book"\
		 v-for="book in books"\
		 :book-name="book.name">\
		 </slot>\
	</ul>',
	props: {
		books: {
			type: Array,
			default: function () {
				return [];
			}
		}
	}
})
var app = new Vue({
	el: "#app",
	data: {
		books: [
			{
				name: "《Vue.js 实战》"
			},
			{
				name: "《javaScript 语言精粹》"
			},
			{
				name: "《《javaScript 高级程序设计》"
			}
		]
	}
})*/


/*组件递归*/

/*Vue.component("child-component", {
	name: "child-component",
	props: {
		count: {
			type: Number,
			default: 1
		}
	},
	template: '<div class="child">\
	<child-component :count="count + 1"\
	v-if="count < 3"></child-component>\
	</div>',
})

var app = new Vue({
	el: "#app"
})*/

/*内联模板*/
/*Vue.component("child-component",{
	data: function () {
		return {
			msg: "在子组件声明的数据"
		}
	}
})


var app = new Vue({
	el: "#app",
	data: {
		message: "在父组件声明的数据"
	}
})*/


/*动态组件*/

/*var app = new Vue({
	el: "#app",
	components: {
		comA: {
			template: '<div>组件A</div>'
		},
		comB: {
			template: '<div>组件B</div>'
		},
		comC: {
			template: '<div>组件C</div>'
		}
	},
	data: {
		currentView: "comA",
	},
	methods: {
		handleChangeView: function (component) {
			this.currentView = "com" + component;
		}
	}
})*/


/*异步组件*/

/*Vue.component("child-component",function (resolve, reject) {
	window.setTimeout(function () {
		resolve({
			template: "<div>我时异步渲染</div>"
		})
	}, 2000)
})

var app = new Vue({
	el: "#app"
})*/


/*异步更新队列*/

/*var app = new Vue({
	el: "#app",
	data: {
		showDiv: false,
	},
	methods: {
		getText: function () {
			this.showDiv = true;
			this.$nextTick(function () {
				var text = document.getElementById("div").innerHTML;
				console.log(text);
			})
			
		}
	}
});*/



Vue.component('my-header',{
	template: '<div>{{ message }}</div>',
	data: function () {
		return {
			message: '标题'
		}
	}
});


/*var  columns = [
	{
		title: '名称'
	},
	{
		title: '数量'
	},
	{
		title: '单价'
	}
];

var dataList = [
	{
		name: '苹果',
		num: 1,
		unitPrice: 10
	},
	{
		name: '桔子',
		num: 2,
		unitPrice: 5
	},
	{
		name: '火龙果',
		num: 3,
		unitPrice: 20
	}
]*/

Vue.component('v-table',{
	template: '<table cellpadding="0" cellspacing="0">\
	<thead><tr><th v-for="item in columns">{{ item.title }}</th></tr></thead>\
	<tbody><tr v-for="item in dataList"><td v-for="(value, key) in item"> \
	{{ value }}</td></tr></tbody>\
	</table>',
	props:['columnsProp','dataListProp'],

	data: function () {
		return {

			//属性名称可以自定义成别的名称，不一定和组件传入的名称一样
			columns: this.columnsProp,
		    dataList: this.dataListProp
		}
	}
});

var app = new Vue({
	el: '#v-table',
	data: {
		columns: [
	{
		title: '名称'
	},
	{
		title: '数量'
	},
	{
		title: '单价'
	}
],
		dataList: [
	{
		name: '苹果',
		num: 1,
		unitPrice: 10
	},
	{
		name: '桔子',
		num: 2,
		unitPrice: 5
	},
	{
		name: '火龙果',
		num: 3,
		unitPrice: 20
	}
]
	},
	created: function () {

	},
	computed: {

	}
});

var app = new Vue({
	el: '#my-header'
});




var mergeJson = {
	"filedNames": [
		"测点号",
		"深度(m)",
		"本次位移增量(mm)",
		"累计位移(mm)",
		"变化速率(mm/d)",
	],
	"items": [
		{
			"name": "测试1",
			"items": [
				[
				"1",
				"2",
				"3",
				"4"
				],
				[
				"1",
				"2",
				"3",
				"4"
				],[
				"1",
				"2",
				"3",
				"4"
				]
			]
		},
		{
			"name": "测试2",
			"items": [
				[
				"1",
				"2",
				"3",
				"4"
				],
				[
				"1",
				"2",
				"3",
				"4"
				],[
				"1",
				"2",
				"3",
				"4"
				],[
				"1",
				"2",
				"3",
				"4"
				]
			]
		}

	]
}

Vue.component("merge-table",{
	template: '<table cellspacing="0" cellpadding="0">\
	<thead><tr>\
	<th v-for="name of mergeJson.filedNames" :key="name">{{ name }}</th>\
	<tr></thead>\
	<tbody>\
    <template v-for="(tr,index) of mergeJson.items">\
    <tr v-for="(item,i) of tr.items">\
    <td v-if="i===0" :rowspan="tr.items.length">{{ tr.name }}</td>\
    <td v-for="td of item" :key="index+i">{{ td }}</td>\
    </tr></template>\
	</tbody>\
	</table>'

})

new Vue({
	el: '#merge-table'
})






/*合并单元格*/





