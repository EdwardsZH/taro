import Taro from '@tarojs/taro'



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

