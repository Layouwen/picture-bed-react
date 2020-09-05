import React from "react"
import {observer} from "mobx-react"
import {useStores} from "../stores"
import InfiniteScroll from "react-infinite-scroller"
import {List, Spin} from "antd"

const Component = observer(() => {
  const {HistoryStore} = useStores()

  const loadMore = () => {
    HistoryStore.find()
  }

  return (
    <div>
      <InfiniteScroll
        initialLoad={true}
        pageStart={0}
        loadMore={loadMore}
        hasMore={!HistoryStore.isLoading && HistoryStore.hasMore}
        useWindow={true}>
        <List dataSource={HistoryStore.list}
              renderItem={item => <List.Item key={item.id}>
                <div>
                  <img src={item.attributes.url.attributes.url} style={{height: "100px"}}/>
                </div>
                <div>
                  <h5>{item.attributes.filename}</h5>
                </div>
                <div>
                  <a target={"_blank"}
                     href={item.attributes.url.attributes.url}>{item.attributes.url.attributes.url}</a>
                </div>
              </List.Item>}>
          {HistoryStore.isLoading && HistoryStore.hasMore && (<div><Spin tip={"加载中"}/></div>)}
        </List>
      </InfiniteScroll>
    </div>
  )
})

export default Component