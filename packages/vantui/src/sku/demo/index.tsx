/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import DemoBlock from '../../../../vantui-demo/src/components/demo-block/index'
import Demo1 from './demo1'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Sku 商品规格选择" className="pages-sku-index">
        <DemoBlock title="基本用法" padding>
          <Demo1 />
        </DemoBlock>
      </DemoPage>
    )
  }
}