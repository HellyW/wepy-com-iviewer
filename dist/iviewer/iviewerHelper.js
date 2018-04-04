'use strict';

var _underscore = require('./../npm/underscore/underscore.js');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _cbObject = {
  confirm: function confirm() {
    console.log('confirm');
  },
  cancel: function cancel() {
    console.log('cancel');
  }
};
// 需引入underscore


var _base_setting = {
  'autoClose': true
};

var _final_setting = {
  'hide': false
};

var _final_modal_setting = {
  'type': 'modal'
};

var _final_toast_setting = {
  'type': 'toast'
};

var _success_setting = {
  'icon': 'OK',
  'title': '处理成功'
};

var _error_setting = {
  'icon': 'ERR',
  'title': '处理失败'
};

var _loading_setting = {
  'icon': 'LOAD',
  'title': '数据加载中...',
  'autoClose': false,
  'touchCancel': false
};

function _checkIsAutoClose() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (config.confirmText || config.cancelText) {
    config.autoClose = false;
  }
  return config;
}

// 显示正确弹窗
function showSucess($vm) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cbObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  $vm.__wepy_iviewer_settings = _underscore2.default.extend({}, _base_setting, _success_setting, _checkIsAutoClose(config), { 'event': _underscore2.default.extend({}, _cbObject, cbObject) }, _final_modal_setting, _final_setting);
  $vm.$apply();
}

// 显示错误弹窗
function showError($vm) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cbObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  $vm.__wepy_iviewer_settings = _underscore2.default.extend({}, _base_setting, _error_setting, _checkIsAutoClose(config), { 'event': _underscore2.default.extend({}, _cbObject, cbObject) }, _final_modal_setting, _final_setting);
  $vm.$apply();
}

// 显示一般弹窗
function showModal($vm) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cbObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  $vm.__wepy_iviewer_settings = _underscore2.default.extend({}, _base_setting, _checkIsAutoClose(config), { 'event': _underscore2.default.extend({}, _cbObject, cbObject) }, _final_modal_setting, _final_setting);
  $vm.$apply();
}

// 显示加载弹窗
function showLoading($vm) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cbObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  $vm.__wepy_iviewer_settings = _underscore2.default.extend({}, _base_setting, _loading_setting, _checkIsAutoClose(config), { 'event': _underscore2.default.extend({}, _cbObject, cbObject) }, _final_modal_setting, _final_setting);
  $vm.$apply();
}

// 显示简约弹窗
function showToast($vm, titleStr) {
  var cbObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  $vm.__wepy_iviewer_settings = _underscore2.default.extend({}, _base_setting, { 'title': titleStr }, { 'event': _underscore2.default.extend({}, _cbObject, cbObject) }, _final_toast_setting, _final_setting);
  $vm.$apply();
}

// 关闭弹窗
function close($vm) {
  $vm.__wepy_iviewer_settings = _underscore2.default.extend($vm.__wepy_iviewer_settings, { 'hide': true });
  $vm.$apply();
}

module.exports = {
  ok: showSucess,
  err: showError,
  show: showModal,
  toast: showToast,
  loading: showLoading,
  close: close
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml2aWV3ZXJIZWxwZXIuanMiXSwibmFtZXMiOlsiX2NiT2JqZWN0IiwiY29uZmlybSIsImNvbnNvbGUiLCJsb2ciLCJjYW5jZWwiLCJfYmFzZV9zZXR0aW5nIiwiX2ZpbmFsX3NldHRpbmciLCJfZmluYWxfbW9kYWxfc2V0dGluZyIsIl9maW5hbF90b2FzdF9zZXR0aW5nIiwiX3N1Y2Nlc3Nfc2V0dGluZyIsIl9lcnJvcl9zZXR0aW5nIiwiX2xvYWRpbmdfc2V0dGluZyIsIl9jaGVja0lzQXV0b0Nsb3NlIiwiY29uZmlnIiwiY29uZmlybVRleHQiLCJjYW5jZWxUZXh0IiwiYXV0b0Nsb3NlIiwic2hvd1N1Y2VzcyIsIiR2bSIsImNiT2JqZWN0IiwiX193ZXB5X2l2aWV3ZXJfc2V0dGluZ3MiLCJleHRlbmQiLCIkYXBwbHkiLCJzaG93RXJyb3IiLCJzaG93TW9kYWwiLCJzaG93TG9hZGluZyIsInNob3dUb2FzdCIsInRpdGxlU3RyIiwiY2xvc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwib2siLCJlcnIiLCJzaG93IiwidG9hc3QiLCJsb2FkaW5nIl0sIm1hcHBpbmdzIjoiOztBQUVBOzs7Ozs7QUFJQSxJQUFNQSxZQUFZO0FBQ2hCQyxXQUFRLG1CQUFZO0FBQ2xCQyxZQUFRQyxHQUFSLENBQVksU0FBWjtBQUNELEdBSGU7QUFJaEJDLFVBQU8sa0JBQVk7QUFDakJGLFlBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFOZSxDQUFsQjtBQUxBOzs7QUFjQSxJQUFNRSxnQkFBZ0I7QUFDcEIsZUFBYTtBQURPLENBQXRCOztBQUlBLElBQU1DLGlCQUFpQjtBQUNyQixVQUFRO0FBRGEsQ0FBdkI7O0FBSUEsSUFBTUMsdUJBQXVCO0FBQzNCLFVBQVE7QUFEbUIsQ0FBN0I7O0FBSUEsSUFBTUMsdUJBQXVCO0FBQzNCLFVBQVE7QUFEbUIsQ0FBN0I7O0FBSUEsSUFBTUMsbUJBQW1CO0FBQ3ZCLFVBQVEsSUFEZTtBQUV2QixXQUFTO0FBRmMsQ0FBekI7O0FBS0EsSUFBTUMs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QUFULEVBQVlyQixTQUFaLEVBQXNCbUIsUUFBdEIsQ0FBVCxFQUE3QyxFQUF1Rlgsb0JBQXZGLEVBQTRHRixjQUE1RyxDQUE5QjtBQUNBWSxNQUFJSSxNQUFKO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFTTSxLQUFULENBQWVWLEdBQWYsRUFBb0I7QUFDbEJBLE1BQUlFLHVCQUFKLEdBQThCLHFCQUFFQyxNQUFGLENBQVNILElBQUlFLHVCQUFiLEVBQXFDLEVBQUMsUUFBTyxJQUFSLEVBQXJDLENBQTlCO0FBQ0FGLE1BQUlJLE1BQUo7QUFDRDs7QUFFRE8sT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxNQUFJZCxVQURXO0FBRWZlLE9BQUtULFNBRlU7QUFHZlUsUUFBTVQsU0FIUztBQUlmVSxTQUFPUixTQUpRO0FBS2ZTLFdBQVNWLFdBTE07QUFNZkcsU0FBT0E7QUFOUSxDQUFqQiIsImZpbGUiOiJpdmlld2VySGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyDpnIDlvJXlhaV1bmRlcnNjb3JlXG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJ1xuXG5cblxuY29uc3QgX2NiT2JqZWN0ID0ge1xuICBjb25maXJtOmZ1bmN0aW9uICgpIHsgXG4gICAgY29uc29sZS5sb2coJ2NvbmZpcm0nKSAgXG4gIH0sXG4gIGNhbmNlbDpmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ2NhbmNlbCcpXG4gIH1cbn1cblxuY29uc3QgX2Jhc2Vfc2V0dGluZyA9IHtcbiAgJ2F1dG9DbG9zZSc6IHRydWVcbn1cblxuY29uc3QgX2ZpbmFsX3NldHRpbmcgPSB7XG4gICdoaWRlJzogZmFsc2Vcbn1cblxuY29uc3QgX2ZpbmFsX21vZGFsX3NldHRpbmcgPSB7XG4gICd0eXBlJzogJ21vZGFsJ1xufVxuXG5jb25zdCBfZmluYWxfdG9hc3Rfc2V0dGluZyA9IHtcbiAgJ3R5cGUnOiAndG9hc3QnXG59XG5cbmNvbnN0IF9zdWNjZXNzX3NldHRpbmcgPSB7XG4gICdpY29uJzogJ09LJyxcbiAgJ3RpdGxlJzogJ+WkhOeQhuaIkOWKnydcbn1cblxuY29uc3QgX2Vycm9yX3NldHRpbmcgPSB7XG4gICdpY29uJzogJ0VSUicsXG4gICd0aXRsZSc6ICflpITnkIblpLHotKUnXG59XG5cbmNvbnN0IF9sb2FkaW5nX3NldHRpbmcgPSB7XG4gICdpY29uJzogJ0xPQUQnLFxuICAndGl0bGUnOiAn5pWw5o2u5Yqg6L295LitLi4uJyxcbiAgJ2F1dG9DbG9zZSc6IGZhbHNlLFxuICAndG91Y2hDYW5jZWwnOmZhbHNlXG59XG5cbmZ1bmN0aW9uICBfY2hlY2tJc0F1dG9DbG9zZShjb25maWcgPSB7fSkge1xuICBpZihjb25maWcuY29uZmlybVRleHQgfHwgY29uZmlnLmNhbmNlbFRleHQgKXtcbiAgICBjb25maWcuYXV0b0Nsb3NlID0gZmFsc2VcbiAgfVxuICByZXR1cm4gY29uZmlnXG59XG5cbi8vIOaYvuekuuato+ehruW8ueeql1xuZnVuY3Rpb24gc2hvd1N1Y2Vzcygkdm0sY29uZmlnID0ge30sY2JPYmplY3Q9bnVsbCkge1xuICAkdm0uX193ZXB5X2l2aWV3ZXJfc2V0dGluZ3MgPSBfLmV4dGVuZCh7fSxfYmFzZV9zZXR0aW5nLF9zdWNjZXNzX3NldHRpbmcsX2NoZWNrSXNBdXRvQ2xvc2UoY29uZmlnKSx7J2V2ZW50JzpfLmV4dGVuZCh7fSxfY2JPYmplY3QsY2JPYmplY3QpfSxfZmluYWxfbW9kYWxfc2V0dGluZyxfZmluYWxfc2V0dGluZylcbiAgJHZtLiRhcHBseSgpXG59XG5cbi8vIOaYvuekuumUmeivr+W8ueeql1xuZnVuY3Rpb24gc2hvd0Vycm9yKCR2bSxjb25maWcgPSB7fSxjYk9iamVjdD1udWxsKSB7XG4gICR2bS5fX3dlcHlfaXZpZXdlcl9zZXR0aW5ncyA9IF8uZXh0ZW5kKHt9LF9iYXNlX3NldHRpbmcsX2Vycm9yX3NldHRpbmcsX2NoZWNrSXNBdXRvQ2xvc2UoY29uZmlnKSx7J2V2ZW50JzpfLmV4dGVuZCh7fSxfY2JPYmplY3QsY2JPYmplY3QpfSxfZmluYWxfbW9kYWxfc2V0dGluZyxfZmluYWxfc2V0dGluZylcbiAgJHZtLiRhcHBseSgpXG59XG5cbi8vIOaYvuekuuS4gOiIrOW8ueeql1xuZnVuY3Rpb24gc2hvd01vZGFsKCR2bSxjb25maWcgPSB7fSxjYk9iamVjdD1udWxsKSB7XG4gICR2bS5fX3dlcHlfaXZpZXdlcl9zZXR0aW5ncyA9IF8uZXh0ZW5kKHt9LF9iYXNlX3NldHRpbmcsX2NoZWNrSXNBdXRvQ2xvc2UoY29uZmlnKSx7J2V2ZW50JzpfLmV4dGVuZCh7fSxfY2JPYmplY3QsY2JPYmplY3QpfSxfZmluYWxfbW9kYWxfc2V0dGluZyxfZmluYWxfc2V0dGluZylcbiAgJHZtLiRhcHBseSgpXG59XG5cbi8vIOaYvuekuuWKoOi9veW8ueeql1xuZnVuY3Rpb24gc2hvd0xvYWRpbmcoJHZtLGNvbmZpZyA9IHt9LGNiT2JqZWN0PW51bGwpIHtcbiAgJHZtLl9fd2VweV9pdmlld2VyX3NldHRpbmdzID0gXy5leHRlbmQoe30sX2Jhc2Vfc2V0dGluZyxfbG9hZGluZ19zZXR0aW5nLF9jaGVja0lzQXV0b0Nsb3NlKGNvbmZpZykseydldmVudCc6Xy5leHRlbmQoe30sX2NiT2JqZWN0LGNiT2JqZWN0KX0sX2ZpbmFsX21vZGFsX3NldHRpbmcsX2ZpbmFsX3NldHRpbmcpXG4gICR2bS4kYXBwbHkoKVxufVxuXG4vLyDmmL7npLrnroDnuqblvLnnqpdcbmZ1bmN0aW9uIHNob3dUb2FzdCgkdm0sdGl0bGVTdHIsY2JPYmplY3Q9bnVsbCkge1xuICAkdm0uX193ZXB5X2l2aWV3ZXJfc2V0dGluZ3MgPSBfLmV4dGVuZCh7fSxfYmFzZV9zZXR0aW5nLHsndGl0bGUnOnRpdGxlU3RyfSx7J2V2ZW50JzpfLmV4dGVuZCh7fSxfY2JPYmplY3QsY2JPYmplY3QpfSxfZmluYWxfdG9hc3Rfc2V0dGluZyxfZmluYWxfc2V0dGluZylcbiAgJHZtLiRhcHBseSgpXG59XG5cbi8vIOWFs+mXreW8ueeql1xuZnVuY3Rpb24gY2xvc2UoJHZtKSB7XG4gICR2bS5fX3dlcHlfaXZpZXdlcl9zZXR0aW5ncyA9IF8uZXh0ZW5kKCR2bS5fX3dlcHlfaXZpZXdlcl9zZXR0aW5ncyx7J2hpZGUnOnRydWV9KVxuICAkdm0uJGFwcGx5KClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9rOiBzaG93U3VjZXNzLFxuICBlcnI6IHNob3dFcnJvcixcbiAgc2hvdzogc2hvd01vZGFsLFxuICB0b2FzdDogc2hvd1RvYXN0LFxuICBsb2FkaW5nOiBzaG93TG9hZGluZyxcbiAgY2xvc2U6IGNsb3NlXG59XG4iXX0=