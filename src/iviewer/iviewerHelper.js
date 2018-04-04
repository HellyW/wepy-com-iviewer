
// 需引入underscore
import _ from 'underscore'



const _cbObject = {
  confirm:function () { 
    console.log('confirm')  
  },
  cancel:function () {
    console.log('cancel')
  }
}

const _base_setting = {
  'autoClose': true
}

const _final_setting = {
  'hide': false
}

const _final_modal_setting = {
  'type': 'modal'
}

const _final_toast_setting = {
  'type': 'toast'
}

const _success_setting = {
  'icon': 'OK',
  'title': '处理成功'
}

const _error_setting = {
  'icon': 'ERR',
  'title': '处理失败'
}

const _loading_setting = {
  'icon': 'LOAD',
  'title': '数据加载中...',
  'autoClose': false,
  'touchCancel':false
}

function  _checkIsAutoClose(config = {}) {
  if(config.confirmText || config.cancelText ){
    config.autoClose = false
  }
  return config
}

// 显示正确弹窗
function showSucess($vm,config = {},cbObject=null) {
  $vm.__wepy_iviewer_settings = _.extend({},_base_setting,_success_setting,_checkIsAutoClose(config),{'event':_.extend({},_cbObject,cbObject)},_final_modal_setting,_final_setting)
  $vm.$apply()
}

// 显示错误弹窗
function showError($vm,config = {},cbObject=null) {
  $vm.__wepy_iviewer_settings = _.extend({},_base_setting,_error_setting,_checkIsAutoClose(config),{'event':_.extend({},_cbObject,cbObject)},_final_modal_setting,_final_setting)
  $vm.$apply()
}

// 显示一般弹窗
function showModal($vm,config = {},cbObject=null) {
  $vm.__wepy_iviewer_settings = _.extend({},_base_setting,_checkIsAutoClose(config),{'event':_.extend({},_cbObject,cbObject)},_final_modal_setting,_final_setting)
  $vm.$apply()
}

// 显示加载弹窗
function showLoading($vm,config = {},cbObject=null) {
  $vm.__wepy_iviewer_settings = _.extend({},_base_setting,_loading_setting,_checkIsAutoClose(config),{'event':_.extend({},_cbObject,cbObject)},_final_modal_setting,_final_setting)
  $vm.$apply()
}

// 显示简约弹窗
function showToast($vm,titleStr,cbObject=null) {
  $vm.__wepy_iviewer_settings = _.extend({},_base_setting,{'title':titleStr},{'event':_.extend({},_cbObject,cbObject)},_final_toast_setting,_final_setting)
  $vm.$apply()
}

// 关闭弹窗
function close($vm) {
  $vm.__wepy_iviewer_settings = _.extend($vm.__wepy_iviewer_settings,{'hide':true})
  $vm.$apply()
}

module.exports = {
  ok: showSucess,
  err: showError,
  show: showModal,
  toast: showToast,
  loading: showLoading,
  close: close
}
