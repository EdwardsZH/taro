import Taro, { Component } from '@tarojs/taro'
import { Image } from '@tarojs/components'


export default class AppImage extends Component {

  render() {
    return (
      <Image
        style={{ 'width': '100px', 'height': '100px'}}
        src={this.props.url}
        alt=''
      />
    )
  }
}