import Taro from '@tarojs/taro'


/* 配置环境变量;
* @param {String} API     请求数据的api地址;
* @param {String} WEB     项目的网址(域名协议和端口);
* @param {String} WXAPI   调用 -微信商城- 的api地址;
*/
// export let API;
// export let WEB;
// export let WXAPI;
// export let HMPAPI;
// const devEnv = process.env.NODE_ENV;
// const proEnv = window.location.href;
// if (proEnv.includes('app-gray')) {
//   API = 'http://restapi-gray.ihaozhuo.com/';
//   WEB = 'http://app-gray.h5.ihaozhuo.com/';
// } else if (proEnv.includes('app.h5')) {
//   API   = 'https://restapi.ihaozhuo.com/';
//   WEB   = 'https://app.h5.ihaozhuo.com/';
//   WXAPI = 'https://wxapi.ihaozhuo.com/';
// } else if (proEnv.includes('app-tx')) {
//   API   = 'http://restapi-tx.ihaozhuo.com/';
//   WEB   = 'http://app-tx.h5.ihaozhuo.com/';
//   WXAPI = 'http://wxapi-tx.ihaozhuo.com/';
// }

export function apiPost() {
  Taro.request({
    url: 'https://restapi.xxx.com/' + 'health/inquiryDoctorById',
    data: JSON.stringify(
      {
        doctorId: '63476'
      }
    ),
    header: {
      'content-type': 'text/plain'
    },
    method: "POST"
  }).then(res => console.log(res.data))

}

export default {
  apiPost
}

