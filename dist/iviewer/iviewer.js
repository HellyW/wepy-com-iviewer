'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _underscore = require('./../npm/underscore/underscore.js');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Iviewer = function (_wepy$component) {
  _inherits(Iviewer, _wepy$component);

  function Iviewer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Iviewer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Iviewer.__proto__ || Object.getPrototypeOf(Iviewer)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      config: Object
    }, _this.computed = {
      Iconfig: function Iconfig() {
        var _config = {
          // OK   ERR   LOAD
          'icon': 'OK',
          'type': 'modal',
          'title': 'hello iviewer',
          'content': '',
          'autoClose': true,
          'timer': 2000,
          'hide': true,
          'confirmText': '',
          'event': {
            cancel: function cancel() {
              console.log('confirm');
            },
            confirm: function confirm() {
              console.log('cancel');
            }
          },
          'cancelText': '',
          'touchCancel': true
        };
        return _underscore2.default.extend({ '_hide': true }, _config, this.config || {});
      }
    }, _this.watch = {
      config: function config(newVal, oldVal) {
        var _this2 = this;

        if (newVal.hide === oldVal.hide && oldVal.hide) {
          return;
        }
        this._ready_to_hide = newVal.hide;
        this.$apply();
        if (newVal.hide) {
          setTimeout(function () {
            _this2.config._hide = true;
            _this2.$apply();
          }, 600);
        } else {
          this._setAutoClose();
          this.config._hide = false;
          this.$apply();
        }
      }
    }, _this.data = {
      _ready_to_hide: false
    }, _this.methods = {
      // 补充：
      // 除了使用touchCancel触发touchMaskCancel会被动关闭窗口，其他需在confirm和cancel事件中主动关闭窗口
      touchMaskCancel: function touchMaskCancel() {
        if (this.Iconfig.touchCancel) {
          this._clearAutoClose();
          this.Iconfig.event.cancel();
          this.config.hide = true;
          this.$apply();
          this.$emit('cancel');
        }
      },
      confirmEvent: function confirmEvent() {
        this.Iconfig.event.confirm();
        this.$emit('confirm');
      },
      cancelEvent: function cancelEvent() {
        this.config.hide = true;
        this.Iconfig.event.cancel();
        this.$emit('cancel');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Iviewer, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: '_setAutoClose',
    value: function _setAutoClose() {
      var _this3 = this;

      if (this.Iconfig.autoClose) {
        this._autoCloseEvent = setTimeout(function () {
          _this3.config.hide = true;
          _this3.$apply();
        }, this.Iconfig.timer);
      }
    }
  }, {
    key: '_clearAutoClose',
    value: function _clearAutoClose() {
      clearTimeout(this._autoCloseEvent);
    }
  }]);

  return Iviewer;
}(_wepy2.default.component);

exports.default = Iviewer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml2aWV3ZXIuanMiXSwibmFtZXMiOlsiSXZpZXdlciIsInByb3BzIiwiY29uZmlnIiwiT2JqZWN0IiwiY29tcHV0ZWQiLCJJY29uZmlnIiwiX2NvbmZpZyIsImNhbmNlbCIsImNvbnNvbGUiLCJsb2ciLCJjb25maXJtIiwiZXh0ZW5kIiwid2F0Y2giLCJuZXdWYWwiLCJvbGRWYWwiLCJoaWRlIiwiX3JlYWR5X3RvX2hpZGUiLCIkYXBwbHkiLCJzZXRUaW1lb3V0IiwiX2hpZGUiLCJfc2V0QXV0b0Nsb3NlIiwiZGF0YSIsIm1ldGhvZHMiLCJ0b3VjaE1hc2tDYW5jZWwiLCJ0b3VjaENhbmNlbCIsIl9jbGVhckF1dG9DbG9zZSIsImV2ZW50IiwiJGVtaXQiLCJjb25maXJtRXZlbnQiLCJjYW5jZWxFdmVudCIsImF1dG9DbG9zZSIsIl9hdXRvQ2xvc2VFdmVudCIsInRpbWVyIiwiY2xlYXJUaW1lb3V0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsSyxHQUFRO0FBQ05DLGNBQVFDO0FBREYsSyxRQUdSQyxRLEdBQVc7QUFDVEMsZUFBUyxtQkFBWTtBQUNuQixZQUFJQyxVQUFVO0FBQ1o7QUFDQSxrQkFBUSxJQUZJO0FBR1osa0JBQVEsT0FISTtBQUlaLG1CQUFTLGVBSkc7QUFLWixxQkFBVyxFQUxDO0FBTVosdUJBQWEsSUFORDtBQU9aLG1CQUFTLElBUEc7QUFRWixrQkFBUSxJQVJJO0FBU1oseUJBQWUsRUFUSDtBQVVaLG1CQUFTO0FBQ1BDLG9CQUFRLGtCQUFZO0FBQ2xCQyxzQkFBUUMsR0FBUixDQUFZLFNBQVo7QUFDRCxhQUhNO0FBSVBDLHFCQUFTLG1CQUFZO0FBQ25CRixzQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQU5NLFdBVkc7QUFrQlosd0JBQWMsRUFsQkY7QUFtQloseUJBQWU7QUFuQkgsU0FBZDtBQXFCQSxlQUFPLHFCQUFFRSxNQUFGLENBQVMsRUFBQyxTQUFTLElBQVYsRUFBVCxFQUEwQkwsT0FBMUIsRUFBbUMsS0FBS0osTUFBTCxJQUFlLEVBQWxELENBQVA7QUFDRDtBQXhCUSxLLFFBMEJYVSxLLEdBQVE7QUFDTlYsWUFETSxrQkFDRVcsTUFERixFQUNVQyxNQURWLEVBQ2tCO0FBQUE7O0FBQ3RCLFlBQUlELE9BQU9FLElBQVAsS0FBZ0JELE9BQU9DLElBQXZCLElBQStCRCxPQUFPQyxJQUExQyxFQUFnRDtBQUM5QztBQUNEO0FBQ0QsYUFBS0MsY0FBTCxHQUFzQkgsT0FBT0UsSUFBN0I7QUFDQSxhQUFLRSxNQUFMO0FBQ0EsWUFBSUosT0FBT0UsSUFBWCxFQUFpQjtBQUNmRyxxQkFBVyxZQUFNO0FBQ2YsbUJBQUtoQixNQUFMLENBQVlpQixLQUFaLEdBQW9CLElBQXBCO0FBQ0EsbUJBQUtGLE1BQUw7QUFDRCxXQUhELEVBR0csR0FISDtBQUlELFNBTEQsTUFLTztBQUNMLGVBQUtHLGFBQUw7QUFDQSxlQUFLbEIsTUFBTCxDQUFZaUIsS0FBWixHQUFvQixLQUFwQjtBQUNBLGVBQUtGLE1BQUw7QUFDRDtBQUNGO0FBakJLLEssUUFtQlJJLEksR0FBTztBQUNMTCxzQkFBZ0I7QUFEWCxLLFFBZ0JQTSxPLEdBQVU7QUFDUjtBQUNBO0FBQ0FDLHVCQUFpQiwyQkFBWTtBQUMzQixZQUFJLEtBQUtsQixPQUFMLENBQWFtQixXQUFqQixFQUE4QjtBQUM1QixlQUFLQyxlQUFMO0FBQ0EsZUFBS3BCLE9BQUwsQ0FBYXFCLEtBQWIsQ0FBbUJuQixNQUFuQjtBQUNBLGVBQUtMLE1BQUwsQ0FBWWEsSUFBWixHQUFtQixJQUFuQjtBQUNBLGVBQUtFLE1BQUw7QUFDQSxlQUFLVSxLQUFMLENBQVcsUUFBWDtBQUNEO0FBQ0YsT0FYTztBQVlSQyxvQkFBYyx3QkFBWTtBQUN4QixhQUFLdkIsT0FBTCxDQUFhcUIsS0FBYixDQUFtQmhCLE9BQW5CO0FBQ0EsYUFBS2lCLEtBQUwsQ0FBVyxTQUFYO0FBQ0QsT0FmTztBQWdCUkUsbUJBQWEsdUJBQVk7QUFDdkIsYUFBSzNCLE1BQUwsQ0FBWWEsSUFBWixHQUFtQixJQUFuQjtBQUNBLGFBQUtWLE9BQUwsQ0FBYXFCLEtBQWIsQ0FBbUJuQixNQUFuQjtBQUNBLGFBQUtvQixLQUFMLENBQVcsUUFBWDtBQUNEO0FBcEJPLEs7Ozs7OzZCQWJELENBQ1I7OztvQ0FDZTtBQUFBOztBQUNkLFVBQUksS0FBS3RCLE9BQUwsQ0FBYXlCLFNBQWpCLEVBQTRCO0FBQzFCLGFBQUtDLGVBQUwsR0FBdUJiLFdBQVcsWUFBTTtBQUN0QyxpQkFBS2hCLE1BQUwsQ0FBWWEsSUFBWixHQUFtQixJQUFuQjtBQUNBLGlCQUFLRSxNQUFMO0FBQ0QsU0FIc0IsRUFHcEIsS0FBS1osT0FBTCxDQUFhMkIsS0FITyxDQUF2QjtBQUlEO0FBQ0Y7OztzQ0FDaUI7QUFDaEJDLG1CQUFhLEtBQUtGLGVBQWxCO0FBQ0Q7Ozs7RUFoRWtDLGVBQUtHLFM7O2tCQUFyQmxDLE8iLCJmaWxlIjoiaXZpZXdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJdmlld2VyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgY29uZmlnOiBPYmplY3RcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBJY29uZmlnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBfY29uZmlnID0ge1xuICAgICAgICAgIC8vIE9LICAgRVJSICAgTE9BRFxuICAgICAgICAgICdpY29uJzogJ09LJyxcbiAgICAgICAgICAndHlwZSc6ICdtb2RhbCcsXG4gICAgICAgICAgJ3RpdGxlJzogJ2hlbGxvIGl2aWV3ZXInLFxuICAgICAgICAgICdjb250ZW50JzogJycsXG4gICAgICAgICAgJ2F1dG9DbG9zZSc6IHRydWUsXG4gICAgICAgICAgJ3RpbWVyJzogMjAwMCxcbiAgICAgICAgICAnaGlkZSc6IHRydWUsXG4gICAgICAgICAgJ2NvbmZpcm1UZXh0JzogJycsXG4gICAgICAgICAgJ2V2ZW50Jzoge1xuICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25maXJtJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maXJtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYW5jZWwnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2NhbmNlbFRleHQnOiAnJyxcbiAgICAgICAgICAndG91Y2hDYW5jZWwnOiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKHsnX2hpZGUnOiB0cnVlfSwgX2NvbmZpZywgdGhpcy5jb25maWcgfHwge30pXG4gICAgICB9XG4gICAgfVxuICAgIHdhdGNoID0ge1xuICAgICAgY29uZmlnIChuZXdWYWwsIG9sZFZhbCkge1xuICAgICAgICBpZiAobmV3VmFsLmhpZGUgPT09IG9sZFZhbC5oaWRlICYmIG9sZFZhbC5oaWRlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVhZHlfdG9faGlkZSA9IG5ld1ZhbC5oaWRlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgaWYgKG5ld1ZhbC5oaWRlKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5faGlkZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICB9LCA2MDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2V0QXV0b0Nsb3NlKClcbiAgICAgICAgICB0aGlzLmNvbmZpZy5faGlkZSA9IGZhbHNlXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBfcmVhZHlfdG9faGlkZTogZmFsc2VcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgICBfc2V0QXV0b0Nsb3NlKCkge1xuICAgICAgaWYgKHRoaXMuSWNvbmZpZy5hdXRvQ2xvc2UpIHtcbiAgICAgICAgdGhpcy5fYXV0b0Nsb3NlRXZlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5oaWRlID0gdHJ1ZVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSwgdGhpcy5JY29uZmlnLnRpbWVyKVxuICAgICAgfVxuICAgIH1cbiAgICBfY2xlYXJBdXRvQ2xvc2UoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fYXV0b0Nsb3NlRXZlbnQpXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvLyDooaXlhYXvvJpcbiAgICAgIC8vIOmZpOS6huS9v+eUqHRvdWNoQ2FuY2Vs6Kem5Y+RdG91Y2hNYXNrQ2FuY2Vs5Lya6KKr5Yqo5YWz6Zet56qX5Y+j77yM5YW25LuW6ZyA5ZyoY29uZmlybeWSjGNhbmNlbOS6i+S7tuS4reS4u+WKqOWFs+mXreeql+WPo1xuICAgICAgdG91Y2hNYXNrQ2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLkljb25maWcudG91Y2hDYW5jZWwpIHtcbiAgICAgICAgICB0aGlzLl9jbGVhckF1dG9DbG9zZSgpXG4gICAgICAgICAgdGhpcy5JY29uZmlnLmV2ZW50LmNhbmNlbCgpXG4gICAgICAgICAgdGhpcy5jb25maWcuaGlkZSA9IHRydWVcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbmZpcm1FdmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLkljb25maWcuZXZlbnQuY29uZmlybSgpXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NvbmZpcm0nKVxuICAgICAgfSxcbiAgICAgIGNhbmNlbEV2ZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmhpZGUgPSB0cnVlXG4gICAgICAgIHRoaXMuSWNvbmZpZy5ldmVudC5jYW5jZWwoKVxuICAgICAgICB0aGlzLiRlbWl0KCdjYW5jZWwnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19