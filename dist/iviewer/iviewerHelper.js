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
  toast: showToast,
  loading: showLoading,
  close: close
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml2aWV3ZXJIZWxwZXIuanMiXSwibmFtZXMiOlsiX2NiT2JqZWN0IiwiY29uZmlybSIsImNvbnNvbGUiLCJsb2ciLCJjYW5jZWwiLCJfYmFzZV9zZXR0aW5nIiwiX2ZpbmFsX3NldHRpbmciLCJfZmluYWxfbW9kYWxfc2V0dGluZyIsIl9maW5hbF90b2FzdF9zZXR0aW5nIiwiX3N1Y2Nlc3Nfc2V0dGluZyIsIl9lcnJvcl9zZXR0aW5nIiwiX2xvYWRpbmdfc2V0dGluZyIsIl9jaGVja0lzQXV0b0Nsb3NlIiwiY29uZmlnIiwiY29uZmlybVRleHQiLCJjYW5jZWxUZXh0IiwiYXV0b0Nsb3NlIiwic2hvd1N1Y2VzcyIsIiR2bSIsImNiT2JqZWN0IiwiX193ZXB5X2l2aWV3ZXJfc2V0dGluZ3MiLCJleHRlbmQiLCIkYXBwbHkiLCJzaG93RXJyb3IiLCJzaG93TG9hZGluZyIsInNob3dUb2FzdCIsInRpdGxlU3RyIiwiY2xvc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwib2siLCJlcnIiLCJ0b2FzdCIsImxvYWRpbmciXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7OztBQUlBLElBQU1BLFlBQVk7QUFDaEJDLFdBQVEsbUJBQVk7QUFDbEJDLFlBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0QsR0FIZTtBQUloQkMsVUFBTyxrQkFBWTtBQUNqQkYsWUFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQU5lLENBQWxCO0FBTEE7OztBQWNBLElBQU1FLGdCQUFnQjtBQUNwQixlQUFhO0FBRE8sQ0FBdEI7O0FBSUEsSUFBTUMsaUJBQWlCO0FBQ3JCLFVBQVE7QUFEYSxDQUF2Qjs7QUFJQSxJQUFNQyx1QkFBdUI7QUFDM0IsVUFBUTtBQURtQixDQUE3Qjs7QUFJQSxJQUFNQyx1QkFBdUI7QUFDM0IsVUFBUTtBQURtQixDQUE3Qjs7QUFJQSxJQUFNQyxtQkFBbUI7QUFDdkIsVUFBUSxJQURlO0FBRXZCLFdBQVM7QUFGYyxDQUF6Qjs7QUFLQSxJQUFNQyxpQkFBaUI7QUFDckIsVUFBUSxL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TTtBQUtmRyxTQUFPQTtBQUxRLENBQWpCIiwiZmlsZSI6Iml2aWV3ZXJIZWxwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIOmcgOW8leWFpXVuZGVyc2NvcmVcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnXG5cblxuXG5jb25zdCBfY2JPYmplY3QgPSB7XG4gIGNvbmZpcm06ZnVuY3Rpb24gKCkgeyBcbiAgICBjb25zb2xlLmxvZygnY29uZmlybScpICBcbiAgfSxcbiAgY2FuY2VsOmZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnY2FuY2VsJylcbiAgfVxufVxuXG5jb25zdCBfYmFzZV9zZXR0aW5nID0ge1xuICAnYXV0b0Nsb3NlJzogdHJ1ZVxufVxuXG5jb25zdCBfZmluYWxfc2V0dGluZyA9IHtcbiAgJ2hpZGUnOiBmYWxzZVxufVxuXG5jb25zdCBfZmluYWxfbW9kYWxfc2V0dGluZyA9IHtcbiAgJ3R5cGUnOiAnbW9kYWwnXG59XG5cbmNvbnN0IF9maW5hbF90b2FzdF9zZXR0aW5nID0ge1xuICAndHlwZSc6ICd0b2FzdCdcbn1cblxuY29uc3QgX3N1Y2Nlc3Nfc2V0dGluZyA9IHtcbiAgJ2ljb24nOiAnT0snLFxuICAndGl0bGUnOiAn5aSE55CG5oiQ5YqfJ1xufVxuXG5jb25zdCBfZXJyb3Jfc2V0dGluZyA9IHtcbiAgJ2ljb24nOiAnRVJSJyxcbiAgJ3RpdGxlJzogJ+WkhOeQhuWksei0pSdcbn1cblxuY29uc3QgX2xvYWRpbmdfc2V0dGluZyA9IHtcbiAgJ2ljb24nOiAnTE9BRCcsXG4gICd0aXRsZSc6ICfmlbDmja7liqDovb3kuK0uLi4nLFxuICAnYXV0b0Nsb3NlJzogZmFsc2UsXG4gICd0b3VjaENhbmNlbCc6ZmFsc2Vcbn1cblxuZnVuY3Rpb24gIF9jaGVja0lzQXV0b0Nsb3NlKGNvbmZpZyA9IHt9KSB7XG4gIGlmKGNvbmZpZy5jb25maXJtVGV4dCB8fCBjb25maWcuY2FuY2VsVGV4dCApe1xuICAgIGNvbmZpZy5hdXRvQ2xvc2UgPSBmYWxzZVxuICB9XG4gIHJldHVybiBjb25maWdcbn1cblxuLy8g5pi+56S65q2j56Gu5by556qXXG5mdW5jdGlvbiBzaG93U3VjZXNzKCR2bSxjb25maWcgPSB7fSxjYk9iamVjdD1udWxsKSB7XG4gICR2bS5fX3dlcHlfaXZpZXdlcl9zZXR0aW5ncyA9IF8uZXh0ZW5kKHt9LF9iYXNlX3NldHRpbmcsX3N1Y2Nlc3Nfc2V0dGluZyxfY2hlY2tJc0F1dG9DbG9zZShjb25maWcpLHsnZXZlbnQnOl8uZXh0ZW5kKHt9LF9jYk9iamVjdCxjYk9iamVjdCl9LF9maW5hbF9tb2RhbF9zZXR0aW5nLF9maW5hbF9zZXR0aW5nKVxuICAkdm0uJGFwcGx5KClcbn1cblxuLy8g5pi+56S66ZSZ6K+v5by556qXXG5mdW5jdGlvbiBzaG93RXJyb3IoJHZtLGNvbmZpZyA9IHt9LGNiT2JqZWN0PW51bGwpIHtcbiAgJHZtLl9fd2VweV9pdmlld2VyX3NldHRpbmdzID0gXy5leHRlbmQoe30sX2Jhc2Vfc2V0dGluZyxfZXJyb3Jfc2V0dGluZyxfY2hlY2tJc0F1dG9DbG9zZShjb25maWcpLHsnZXZlbnQnOl8uZXh0ZW5kKHt9LF9jYk9iamVjdCxjYk9iamVjdCl9LF9maW5hbF9tb2RhbF9zZXR0aW5nLF9maW5hbF9zZXR0aW5nKVxuICAkdm0uJGFwcGx5KClcbn1cblxuLy8g5pi+56S65Yqg6L295by556qXXG5mdW5jdGlvbiBzaG93TG9hZGluZygkdm0sY29uZmlnID0ge30sY2JPYmplY3Q9bnVsbCkge1xuICAkdm0uX193ZXB5X2l2aWV3ZXJfc2V0dGluZ3MgPSBfLmV4dGVuZCh7fSxfYmFzZV9zZXR0aW5nLF9sb2FkaW5nX3NldHRpbmcsX2NoZWNrSXNBdXRvQ2xvc2UoY29uZmlnKSx7J2V2ZW50JzpfLmV4dGVuZCh7fSxfY2JPYmplY3QsY2JPYmplY3QpfSxfZmluYWxfbW9kYWxfc2V0dGluZyxfZmluYWxfc2V0dGluZylcbiAgJHZtLiRhcHBseSgpXG59XG5cbi8vIOaYvuekuueugOe6puW8ueeql1xuZnVuY3Rpb24gc2hvd1RvYXN0KCR2bSx0aXRsZVN0cixjYk9iamVjdD1udWxsKSB7XG4gICR2bS5fX3dlcHlfaXZpZXdlcl9zZXR0aW5ncyA9IF8uZXh0ZW5kKHt9LF9iYXNlX3NldHRpbmcseyd0aXRsZSc6dGl0bGVTdHJ9LHsnZXZlbnQnOl8uZXh0ZW5kKHt9LF9jYk9iamVjdCxjYk9iamVjdCl9LF9maW5hbF90b2FzdF9zZXR0aW5nLF9maW5hbF9zZXR0aW5nKVxuICAkdm0uJGFwcGx5KClcbn1cblxuLy8g5YWz6Zet5by556qXXG5mdW5jdGlvbiBjbG9zZSgkdm0pIHtcbiAgJHZtLl9fd2VweV9pdmlld2VyX3NldHRpbmdzID0gXy5leHRlbmQoJHZtLl9fd2VweV9pdmlld2VyX3NldHRpbmdzLHsnaGlkZSc6dHJ1ZX0pXG4gICR2bS4kYXBwbHkoKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb2s6IHNob3dTdWNlc3MsXG4gIGVycjogc2hvd0Vycm9yLFxuICB0b2FzdDogc2hvd1RvYXN0LFxuICBsb2FkaW5nOiBzaG93TG9hZGluZyxcbiAgY2xvc2U6IGNsb3NlXG59XG4iXX0=