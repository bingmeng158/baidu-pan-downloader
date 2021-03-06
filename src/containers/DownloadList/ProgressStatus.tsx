import React from 'react'
import { connect } from 'react-redux'
import { IStoreState } from '../../store'
import { ItemProxy } from '../../services/ItemProxy'

interface IProps {
  fsId: ItemProxy['fsId']
}
const mapStoreToProps = (store: IStoreState, props: IProps) => ({
  percentCount: store.download.downloadItems[props.fsId]?.percentCount,
})
function ProgressStatus({ percentCount }: ReturnType<typeof mapStoreToProps & IProps>) {
  return (
    <div className={`progress-radial progress-${percentCount}`}>
      <div className="overlay">{percentCount}%</div>
    </div>
  )
}

export default connect(mapStoreToProps)(ProgressStatus)
