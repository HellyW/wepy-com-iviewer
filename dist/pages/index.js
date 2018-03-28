'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _iviewer = require('./../iviewer/iviewer.js');

var _iviewer2 = _interopRequireDefault(_iviewer);

var _iviewerHelper = require('./../iviewer/iviewerHelper.js');

var _iviewerHelper2 = _interopRequireDefault(_iviewerHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
      '__wepy_iviewer_settings': {}
    }, _this.$repeat = {}, _this.$props = { "iviewer": { "xmlns:v-bind": "", "v-bind:config.sync": "__wepy_iviewer_settings" } }, _this.$events = {}, _this.components = {
      iviewer: _iviewer2.default
    }, _this.methods = {
      showErrModal: function showErrModal() {
        _iviewerHelper2.default.err(this, {
          'title': '提交失败',
          'content': '网络错误，请稍后重试'
        }, {
          cancel: function cancel() {
            console.log('取消了');
          }
        });
      },
      showSuccessModal: function showSuccessModal() {
        _iviewerHelper2.default.ok(this, {
          'title': '提交成功',
          'content': '您已成功提交申请表'
        });
      },
      showConfirmModal: function showConfirmModal() {
        var self = this;
        _iviewerHelper2.default.ok(this, {
          'title': '确认提交申请表吗',
          'content': '一经提交不可撤销，您确定需要申请吗？',
          'confirmText': '是',
          'cancelText': '否'
        }, {
          confirm: function confirm() {
            _iviewerHelper2.default.toast(self, '已提交~');
          },
          cancel: function cancel() {
            _iviewerHelper2.default.toast(self, '已取消~');
          }
        });
      },
      showLoading: function showLoading() {
        var _this2 = this;

        _iviewerHelper2.default.loading(this, {
          'title': '努力加载中',
          'content': '正在为您提交申请表'
        });
        // 如无正确、错误提示，loading需在数据处理结束iviewerHelper.close(this)来关闭
        setTimeout(function () {
          _iviewerHelper2.default.close(_this2);
        }, 2000);
      },
      showLoadingSuccess: function showLoadingSuccess() {
        var _this3 = this;

        _iviewerHelper2.default.loading(this, {
          'title': '努力加载中',
          'content': '正在为您提交申请表'
        });
        // 模拟数据处理结束
        setTimeout(function () {
          _iviewerHelper2.default.ok(_this3, {
            'title': '提交成功',
            'content': '您已成功提交申请表'
          });
        }, 2000);
      },
      showLoadingError: function showLoadingError() {
        var _this4 = this;

        _iviewerHelper2.default.loading(this, {
          'title': '努力加载中',
          'content': '正在为您提交申请表'
        });
        // 模拟数据处理结束
        setTimeout(function () {
          _iviewerHelper2.default.err(_this4, {
            'title': '提交失败',
            'content': '网络错误，请稍后重试'
          });
        }, 2000);
      },
      showLoadingToast: function showLoadingToast() {
        var _this5 = this;

        _iviewerHelper2.default.loading(this, {
          'title': '努力加载中',
          'content': '正在为您提交申请表'
        });
        // 模拟数据处理结束
        setTimeout(function () {
          _iviewerHelper2.default.toast(_this5, '提交失败，请稍后重试');
        }, 2000);
      },
      showToast: function showToast() {
        // toast建议传入不超过15个汉字，此处演示超长文本
        _iviewerHelper2.default.toast(this, '我是一个超级长的文本toast，长到超过15个汉字！不够？再补充一点吧！差不多了');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiZGF0YSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIml2aWV3ZXIiLCJtZXRob2RzIiwic2hvd0Vyck1vZGFsIiwiZXJyIiwiY2FuY2VsIiwiY29uc29sZSIsImxvZyIsInNob3dTdWNjZXNzTW9kYWwiLCJvayIsInNob3dDb25maXJtTW9kYWwiLCJzZWxmIiwiY29uZmlybSIsInRvYXN0Iiwic2hvd0xvYWRpbmciLCJsb2FkaW5nIiwic2V0VGltZW91dCIsImNsb3NlIiwic2hvd0xvYWRpbmdTdWNjZXNzIiwic2hvd0xvYWRpbmdFcnJvciIsInNob3dMb2FkaW5nVG9hc3QiLCJzaG93VG9hc3QiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTCxpQ0FBMkI7QUFEdEIsSyxRQUdSQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsc0JBQXFCLHlCQUF4QyxFQUFYLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxPLEdBQVU7QUFDUkMsb0JBQWMsd0JBQVk7QUFDeEIsZ0NBQWNDLEdBQWQsQ0FBa0IsSUFBbEIsRUFBd0I7QUFDdEIsbUJBQVMsTUFEYTtBQUV0QixxQkFBVztBQUZXLFNBQXhCLEVBR0c7QUFDREMsa0JBQVEsa0JBQVk7QUFDbEJDLG9CQUFRQyxHQUFSLENBQVksS0FBWjtBQUNEO0FBSEEsU0FISDtBQVFELE9BVk87QUFXUkMsd0JBQWtCLDRCQUFZO0FBQzVCLGdDQUFjQyxFQUFkLENBQWlCLElBQWpCLEVBQXVCO0FBQ3JCLG1CQUFTLE1BRFk7QUFFckIscUJBQVc7QUFGVSxTQUF2QjtBQUlELE9BaEJPO0FBaUJSQyx3QkFBa0IsNEJBQVk7QUFDNUIsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsZ0NBQWNGLEVBQWQsQ0FBaUIsSUFBakIsRUFBdUI7QUFDckIsbUJBQVMsVUFEWTtBQUVyQixxQkFBVyxvQkFGVTtBQUdyQix5QkFBZSxHQUhNO0FBSXJCLHdCQUFjO0FBSk8sU0FBdkIsRUFLRztBQUNERyxtQkFBUyxtQkFBWTtBQUNuQixvQ0FBY0MsS0FBZCxDQUFvQkYsSUFBcEIsRUFBMEIsTUFBMUI7QUFDRCxXQUhBO0FBSUROLGtCQUFRLGtCQUFZO0FBQ2xCLG9DQUFjUSxLQUFkLENBQW9CRixJQUFwQixFQUEwQixNQUExQjtBQUNEO0FBTkEsU0FMSDtBQWFELE9BaENPO0FBaUNSRyxtQkFBYSx1QkFBWTtBQUFBOztBQUN2QixnQ0FBY0MsT0FBZCxDQUFzQixJQUF0QixFQUE0QjtBQUMxQixtQkFBUyxPQURpQjtBQUUxQixxQkFBVztBQUZlLFNBQTVCO0FBSUE7QUFDQUMsbUJBQVcsWUFBTTtBQUNmLGtDQUFjQyxLQUFkO0FBQ0QsU0FGRCxFQUVHLElBRkg7QUFHRCxPQTFDTztBQTJDUkMsMEJBQW9CLDhCQUFZO0FBQUE7O0FBQzlCLGdDQUFjSCxPQUFkLENBQXNCLElBQXRCLEVBQTRCO0FBQzFCLG1CQUFTLE9BRGlCO0FBRTFCLHFCQUFXO0FBRmUsU0FBNUI7QUFJQTtBQUNBQyxtQkFBVyxZQUFNO0FBQ2Ysa0NBQWNQLEVBQWQsU0FBdUI7QUFDckIscUJBQVMsTUFEWTtBQUVyQix1QkFBVztBQUZVLFdBQXZCO0FBSUQsU0FMRCxFQUtHLElBTEg7QUFNRCxPQXZETztBQXdEUlUsd0JBQWtCLDRCQUFZO0FBQUE7O0FBQzVCLGdDQUFjSixPQUFkLENBQXNCLElBQXRCLEVBQTRCO0FBQzFCLG1CQUFTLE9BRGlCO0FBRTFCLHFCQUFXO0FBRmUsU0FBNUI7QUFJQTtBQUNBQyxtQkFBVyxZQUFNO0FBQ2Ysa0NBQWNaLEdBQWQsU0FBd0I7QUFDdEIscUJBQVMsTUFEYTtBQUV0Qix1QkFBVztBQUZXLFdBQXhCO0FBSUQsU0FMRCxFQUtHLElBTEg7QUFNRCxPQXBFTztBQXFFUmdCLHdCQUFrQiw0QkFBWTtBQUFBOztBQUM1QixnQ0FBY0wsT0FBZCxDQUFzQixJQUF0QixFQUE0QjtBQUMxQixtQkFBUyxPQURpQjtBQUUxQixxQkFBVztBQUZlLFNBQTVCO0FBSUE7QUFDQUMsbUJBQVcsWUFBTTtBQUNmLGtDQUFjSCxLQUFkLFNBQTBCLFlBQTFCO0FBQ0QsU0FGRCxFQUVHLElBRkg7QUFHRCxPQTlFTztBQStFUlEsaUJBQVcscUJBQVk7QUFDckI7QUFDQSxnQ0FBY1IsS0FBZCxDQUFvQixJQUFwQixFQUEwQiwwQ0FBMUI7QUFDRDtBQWxGTyxLOzs7Ozs2QkFvRkQsQ0FDUjs7OztFQWpHZ0MsZUFBS1MsSTs7a0JBQW5CNUIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgaXZpZXdlciBmcm9tICcuLi9pdmlld2VyL2l2aWV3ZXInXG4gIGltcG9ydCBpdmlld2VySGVscGVyIGZyb20gJy4uL2l2aWV3ZXIvaXZpZXdlckhlbHBlcidcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgICdfX3dlcHlfaXZpZXdlcl9zZXR0aW5ncyc6IHt9XG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJpdmlld2VyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpjb25maWcuc3luY1wiOlwiX193ZXB5X2l2aWV3ZXJfc2V0dGluZ3NcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgaXZpZXdlclxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgc2hvd0Vyck1vZGFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGl2aWV3ZXJIZWxwZXIuZXJyKHRoaXMsIHtcbiAgICAgICAgICAndGl0bGUnOiAn5o+Q5Lqk5aSx6LSlJyxcbiAgICAgICAgICAnY29udGVudCc6ICfnvZHnu5zplJnor6/vvIzor7fnqI3lkI7ph43or5UnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCflj5bmtojkuoYnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBzaG93U3VjY2Vzc01vZGFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGl2aWV3ZXJIZWxwZXIub2sodGhpcywge1xuICAgICAgICAgICd0aXRsZSc6ICfmj5DkuqTmiJDlip8nLFxuICAgICAgICAgICdjb250ZW50JzogJ+aCqOW3suaIkOWKn+aPkOS6pOeUs+ivt+ihqCdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBzaG93Q29uZmlybU1vZGFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBpdmlld2VySGVscGVyLm9rKHRoaXMsIHtcbiAgICAgICAgICAndGl0bGUnOiAn56Gu6K6k5o+Q5Lqk55Sz6K+36KGo5ZCXJyxcbiAgICAgICAgICAnY29udGVudCc6ICfkuIDnu4/mj5DkuqTkuI3lj6/mkqTplIDvvIzmgqjnoa7lrprpnIDopoHnlLPor7flkJfvvJ8nLFxuICAgICAgICAgICdjb25maXJtVGV4dCc6ICfmmK8nLFxuICAgICAgICAgICdjYW5jZWxUZXh0JzogJ+WQpidcbiAgICAgICAgfSwge1xuICAgICAgICAgIGNvbmZpcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGl2aWV3ZXJIZWxwZXIudG9hc3Qoc2VsZiwgJ+W3suaPkOS6pH4nKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpdmlld2VySGVscGVyLnRvYXN0KHNlbGYsICflt7Llj5bmtoh+JylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgc2hvd0xvYWRpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXZpZXdlckhlbHBlci5sb2FkaW5nKHRoaXMsIHtcbiAgICAgICAgICAndGl0bGUnOiAn5Yqq5Yqb5Yqg6L295LitJyxcbiAgICAgICAgICAnY29udGVudCc6ICfmraPlnKjkuLrmgqjmj5DkuqTnlLPor7fooagnXG4gICAgICAgIH0pXG4gICAgICAgIC8vIOWmguaXoOato+ehruOAgemUmeivr+aPkOekuu+8jGxvYWRpbmfpnIDlnKjmlbDmja7lpITnkIbnu5PmnZ9pdmlld2VySGVscGVyLmNsb3NlKHRoaXMp5p2l5YWz6ZetXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGl2aWV3ZXJIZWxwZXIuY2xvc2UodGhpcylcbiAgICAgICAgfSwgMjAwMClcbiAgICAgIH0sXG4gICAgICBzaG93TG9hZGluZ1N1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXZpZXdlckhlbHBlci5sb2FkaW5nKHRoaXMsIHtcbiAgICAgICAgICAndGl0bGUnOiAn5Yqq5Yqb5Yqg6L295LitJyxcbiAgICAgICAgICAnY29udGVudCc6ICfmraPlnKjkuLrmgqjmj5DkuqTnlLPor7fooagnXG4gICAgICAgIH0pXG4gICAgICAgIC8vIOaooeaLn+aVsOaNruWkhOeQhue7k+adn1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpdmlld2VySGVscGVyLm9rKHRoaXMsIHtcbiAgICAgICAgICAgICd0aXRsZSc6ICfmj5DkuqTmiJDlip8nLFxuICAgICAgICAgICAgJ2NvbnRlbnQnOiAn5oKo5bey5oiQ5Yqf5o+Q5Lqk55Sz6K+36KGoJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sIDIwMDApXG4gICAgICB9LFxuICAgICAgc2hvd0xvYWRpbmdFcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpdmlld2VySGVscGVyLmxvYWRpbmcodGhpcywge1xuICAgICAgICAgICd0aXRsZSc6ICfliqrlipvliqDovb3kuK0nLFxuICAgICAgICAgICdjb250ZW50JzogJ+ato+WcqOS4uuaCqOaPkOS6pOeUs+ivt+ihqCdcbiAgICAgICAgfSlcbiAgICAgICAgLy8g5qih5ouf5pWw5o2u5aSE55CG57uT5p2fXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGl2aWV3ZXJIZWxwZXIuZXJyKHRoaXMsIHtcbiAgICAgICAgICAgICd0aXRsZSc6ICfmj5DkuqTlpLHotKUnLFxuICAgICAgICAgICAgJ2NvbnRlbnQnOiAn572R57uc6ZSZ6K+v77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sIDIwMDApXG4gICAgICB9LFxuICAgICAgc2hvd0xvYWRpbmdUb2FzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpdmlld2VySGVscGVyLmxvYWRpbmcodGhpcywge1xuICAgICAgICAgICd0aXRsZSc6ICfliqrlipvliqDovb3kuK0nLFxuICAgICAgICAgICdjb250ZW50JzogJ+ato+WcqOS4uuaCqOaPkOS6pOeUs+ivt+ihqCdcbiAgICAgICAgfSlcbiAgICAgICAgLy8g5qih5ouf5pWw5o2u5aSE55CG57uT5p2fXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGl2aWV3ZXJIZWxwZXIudG9hc3QodGhpcywgJ+aPkOS6pOWksei0pe+8jOivt+eojeWQjumHjeivlScpXG4gICAgICAgIH0sIDIwMDApXG4gICAgICB9LFxuICAgICAgc2hvd1RvYXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHRvYXN05bu66K6u5Lyg5YWl5LiN6LaF6L+HMTXkuKrmsYnlrZfvvIzmraTlpITmvJTnpLrotoXplb/mlofmnKxcbiAgICAgICAgaXZpZXdlckhlbHBlci50b2FzdCh0aGlzLCAn5oiR5piv5LiA5Liq6LaF57qn6ZW/55qE5paH5pysdG9hc3TvvIzplb/liLDotoXov4cxNeS4quaxieWtl++8geS4jeWkn++8n+WGjeihpeWFheS4gOeCueWQp++8geW3ruS4jeWkmuS6hicpXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==