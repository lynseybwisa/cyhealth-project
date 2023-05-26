import React from 'react'
// import React from 'react'
import SideBar from '../sidebar/Sidebar'

const MainLayout = ({ children }) => {
  return (
    <div class="flex">
        <SideBar/>
        {/* <div className="flex flex-col flex-1 w-full">
          <div className="h-full pb-16 overflow-y-auto">
            <div className="grid px-6 mx-auto">{children}</div>
          </div>
        </div> */}
        <div class="w-full h-full p-4 m-8 overflow-y-auto">
          {/* <div class="flex items-center justify-center p-40 border-4 border-dotted"> */}
            {children}
          {/* </div> */}
        </div>
      </div>
  )
}

export default MainLayout
