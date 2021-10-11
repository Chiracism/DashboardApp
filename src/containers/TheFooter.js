import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://www.lmc.cd" target="_blank" rel="noopener noreferrer">lmc,sa</a>
        <span className="ml-1">&copy; 2021.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://www.lmc.cd" target="_blank" rel="noopener noreferrer">Lignes Maritimes Congolaises,SA</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
