import React, {useRef} from "react"
import {useStores} from "../stores"
import {observer, useLocalStore} from "mobx-react"
import {Upload, message, Spin} from "antd"
import {InboxOutlined} from "@ant-design/icons"
import styled from "styled-components"

const {Dragger} = Upload

const Result = styled.div`
  padding: 20px;
  margin-top: 30px;
  border: 1px dashed #ccc;
`

const H1 = styled.h1`
  margin: 20px 0;
  text-align: center;
`

const Image = styled.img`
  max-width: 300px;
`

const Component = observer(() => {
  const {ImageStore, UserStore} = useStores()

  const ref1 = useRef()
  const ref2 = useRef()

  // 使用mobx-react定义本地数据
  const store = useLocalStore(() => ({
    width: null,
    setWidth(width) {
      store.width = width
    },
    get widthStr() {
      return store.width ? `/w/${store.width}` : ""
    },

    height: null,
    setHeight(height) {
      store.height = height
    },
    get heightStr() {
      return store.height ? `/h/${store.height}` : ""
    },
    get fullStr() {
      return ImageStore.serverFile.attributes.url.attributes.url + "?imageView2/0" + store.width + store.height
    }
  }))

  const bindWidthChange = () => {
    store.setWidth(ref1.current.value)
  }

  const bindHeightChange = () => {
    store.setHeight(ref1.current.value)
  }

  const props = {
    showUploadList: false,
    beforeUpload: file => {
      ImageStore.setFile(file)
      ImageStore.setFilename(file.name)
      if (UserStore.currentUser === null) {
        message.warning("请先登录在上传，谢谢")
        return false
      }

      // 判断图片类型
      if (!/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/ig.test(file.type)) {
        message.error("只能上传png/svg/jpg/gif格式的图片")
        return false
      }

      // 判断图片大小
      if (file.size > 1024 * 1024) {
        message.error("图片最大为1M")
        return false
      }

      ImageStore.upload()
        .then((serverFile) => {
          console.log("上传成功", serverFile)
        }).catch((err) => {
        console.log("上传失败", err)
      })
      return false
    }
  }

  return (
    <div>
      <Spin tip="上传中" spinning={ImageStore.isUploading}>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined/>
          </p>
          <p className="ant-upload-text">点击或拖拽上传图片</p>
          <p className="ant-upload-hint">图片仅支持.png/.gif/.jpg/.jpeg/.svg图片的格式，且大小不可大于1M</p>
        </Dragger>
      </Spin>
      {
        ImageStore.serverFile ? <Result>
          <H1>上传结果</H1>
          <dl>
            <dt>线上地址</dt>
            <dd><a
              target="_blank"
              href={ImageStore.serverFile.attributes.url.attributes.url}>{ImageStore.serverFile.attributes.url.attributes.url}</a>
            </dd>
            <dt>文件名</dt>
            <dd>{ImageStore.filename}</dd>
            <dt>文件预览</dt>
            <dd>
              <Image src={ImageStore.serverFile.attributes.url.attributes.url} alt=""/>
            </dd>
            <dt>更多尺寸</dt>
            <dd>
              <input type="text" onChange={bindWidthChange} ref={ref1} placeholder="最大宽度（可选）"/>
              <input type="text" onChange={bindHeightChange} ref={ref2} placeholder="最大高度（可选）"/>
            </dd>
            <dd>
              <a target="_blank" href={store.fullStr}>{store.fullStr}</a>
            </dd>
          </dl>
        </Result> : null
      }
    </div>
  )
})

export default Component