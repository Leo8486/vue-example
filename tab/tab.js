
/*pane 组件*/

/*Vue.component('pane', {
	name: 'pane',
	props: {
		name: {
			type: String
		},
		label: {
			type: String,
			default: ''
		}
	},
	template: '<div class="pane" v-show="show">\
	<slot></slot>\
	</div>',
	data: function () {
		return {
			show: true
		}
	},
	methods: {
		updateNav () {
			this.$parent.updateNav();
		}
	},
	watch: {
		label () {
			this.updateNav();
		}
	},
	mounted () {

		console.log(this.updateNav())
		this.updateNav();
	}
})*/
/*tabs 组件*/
/*Vue.component('tabs', {
	template: '<div class="tabs">\
	<div class="tabs-bar">\
<!--标签标题，这里要用v-for-->\
<div :class="tabCls(item)" v-for="(item, index) in navList" @click="handleChange(index)"></div>\
{{ item.label }}\
	</div>\
	<div class="tabs-content">\
<!-- 这里的solt就是嵌套的pane -->\
<slot>55666</slot>\
	</div>\
	</div>',
	props: {
		//这里的value是为了可以使用v-model
		value: {
			type: [String, Number]
		}
	},
	data: function(){
		return {
			//因为不能修改value只能复制一份自己维护
			currentValue: this.value,
			navList: []
		}
	},
	methods: {
		tabCls: function (item) {
			return [
				'tabs-tab',
				{
					'tabs-tab-active': item.name === this.currentValue
				}
			]
		},
		handleChange: function (index) {
			var nav = this.navList[index];
			var name = nav.name;
			this.currentValue = name;
			this.$emit('input', name);
			this.$emit('on-click', name);

		},
		getTabs () {
			return this.$children.filter(function (item) {
				return item.$options.name === 'pane';
			})
		},
		updateNav () {
			this.navList = [];
			var _this = this;
			this.getTabs().forEach(function (pane, index) {
				_this.navList.push({
					label: pane.label,
					name: pane.name || index
				});
				//如果没有给pane设置name，默认设置它的索引

				if (!pane.name) pane.name = index;
				if (index === 0) {
					if (!_this.currentValue) {
						_this.currentValue = pane.name || index
					}
				}
			});

			cosole.log(navList)
			this.updateStatus();
		},
		updateStatus () {
			var tabs = this.getTabs();
			var _this = this;
			tabs.forEach(function(tab) {
				return tab.show = tab.name === _this.currentValue;
			})
		}
	},
	watch: {
		value: function (val) {
			this.currentValue = val;
		},
		currentValue: function () {
			this.updateStatus();
		}
	}
})*/


/*Vue.component('pane', {
	name: 'pane',
	template:'\
	<div class="pane" v-show="show">\
	<slot></slot>\
	</div>',
	props: {
		name: {
			type: String
		},
		label: {
			type: String,
			default: ''
		}
	},
	data: function () {
		return {
			show: true
		}
	},
	methods: {
		updateNav: function() {
			this.$parent.updateNav();
		}
	},
	watch: {
		label () {
			this.updateNav();
		}
	},
	mounted: function () {
		this.updateNav();
	}
});


Vue.component('tabs', {
	template: '<div class="tabs">\
	<div class="tabs-bar">\
	<div :class="tabCls(item)" v-for="(item, index) in navList" @click="handleChange(index)">\
	{{ item.label }}</div>\
	</div>\
	<div class="tabs-content"><slot></slot></div>\
	</div>',
	props: {
		value: {
			type: [String, Number]
		}
	},
	data: function () {
		return {
			currentValue: this.value,
			navList: []
		}
	},
	methods: {
		tabCls: function (item) {
			return [
				'tabs-tab',
				{
					'tabs-tab-active': item.name === this.currentValue
				}
			]
		},
		getTabs () {
			return this.$children.filter(function (item) {
				return item.$options.name === 'pane';
			})
		},
		updateNav () {
			this.navList = [];
			var _this = this;
			this.getTabs().forEach(function (pane, index) {
				_this.navList.push({
					label: pane.label,
					name: pane.name || index
				});
				if (!pane.name) pane.name = index;
				if (index === 0) {
					if(!_this.currentValue) {
						_this.currentValue = pane.name || index;
					}
				}
			});
			this.updateStatus();
		},
		updateStatus () {
			var tabs = this.getTabs();
			var _this = this;
			tabs.forEach(function (tab) {
				return tab.show = tab.name === _this.currentValue;
			});
		},
		handleChange: function (index) {
			var nav = this.navList[index];
			var name = nav.name;
			this.currentValue = name;
			this.$emit('input', name);
			this.$emit('on-click', name);
		}
	},
	watch: {
		value: function (val) {
			this.currentValue = val;
		},
		currentValue: function () {
			this.updateStatus();
		}
	}
});*/




Vue.component('pane',{
	name: 'pane',
	template: '\
	<div class="pane" v-show="show">\
	<slot></slot></div>',
	data: function () {
		return {
			show: true
		}
	},
	props: {
		label: {
			type: String,
			default: ''
		},
		name: {
			type: String
		}
	},
	methods: {
		updateNav () {
			this.$parent.updateNav();
		}

	},
	watch: {
		label: function () {
			this.updateNav();
		}
	},
	mounted: function () {
		this.updateNav();
	}
});


Vue.component('tabs', {
	template:'\
	<div class="tabs">\
	<div class="tabs-bar">\
	<div :class="tabCls(item)" v-for="(item, index) in navList" @click="handleChange(index)">{{ item.label }}</div>\
	</div>\
	<div class="tabs-content">\
	<slot></slot>\
	</div>\
	</div>',
	props: {
		value: {
			type: [String, Number]
		}
	},
	data: function () {
		return {
			currentValue: this.value,
			navList: []
		}
	},
	methods: {
		tabCls (item) {
			return [
				'tabs-tab',
				{
					'tabs-tab-active': item.name === this.currentValue
				}
			]
		},
		getTabs () {
			return this.$children.filter(function (item) {
				return item.$options.name === 'pane';
			});
		},
		updateNav () {
			this.navList = [];
			var _this = this;

			this.getTabs().forEach(function (pane, index) {
				_this.navList.push({
					label: pane.label,
					name: pane.name || index
				});
				if (!pane.name) pane.name = index;
				if (index === 0) {
					if (!_this.currentValue) {
						_this.currentValue = pane.name || index;
					}
				}
			});
			this.updateStatus();
		},
		updateStatus () {
			var tabs = this.getTabs();
			var _this = this;
			tabs.forEach(function (tab) {
				return tab.show = tab.name === _this.currentValue;
			})
		},
		handleChange (index) {
			var nav = this.navList[index];
			var name = nav.name;
			this.currentValue = name;
			this.$emit('input', name);
			this.$emit('on-click', name);
		}
	},
	watch: {
		value: function (val) {
			this.currentValue = val;
		},
		currentValue: function () {
			this.updateStatus();
		}
	}
})











