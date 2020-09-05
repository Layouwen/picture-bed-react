import React from "react"
import {useStores} from "../stores"
import {observer} from "mobx-react"
import {Upload, message} from "antd"
import {InboxOutlined} from "@ant-design/icons"

const {Dragger} = Upload


const Component = observer(() => {
    const {ImageStore, UserStore} = useStores()

    const props = {
      showUploadList: false,
      beforeUpload: file => {
        ImageStore.setFile(file)
        ImageStore.setFilename(file.name)
        if (UserStore.currentUser === null) {
          message.warning("请先登录在上传，谢谢")
          return false
        }
        ImageStore.upload().then(serverFile => console.log("上传成功", serverFile)).catch(err => console.log(err))
        return false
      }
    }

    return (
      <div>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined/>
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </Dragger>
        <div>
          <h1>上传结果</h1>
          {ImageStore.serverFile ? <div>{ImageStore.serverFile.attributes.url.attributes.url}</div> : null}
        </div>
      </div>
    )
  }
)

export default Component