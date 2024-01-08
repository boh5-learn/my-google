'use client'

import {useEffect, useState} from 'react'

export default function Header() {
  const [showTooltip, setShowTooltip] = useState(0)
  let timeout: NodeJS.Timeout
  useEffect(() => {
    clearTimeout(timeout)
  }, [])

  const handleMouseEnter = (id: number) => {
    timeout = setTimeout(() => {
      setShowTooltip(id)
    }, 500)
  }

  const handleMouseLeave = () => {
    clearTimeout(timeout)
    setShowTooltip(0)
  }

  return (
    <div className="flex justify-end p-1.5 pr-3">
      <div className="flex justify-end items-center space-x-6 leading-6 h-12 pl-8 pr-1 group">
        <a className="text-sm text-opacity-85 hover:underline" href="#">图片</a>
        <a
          className="w-8 h-8 p-1 fill-[#5f6368] hover:rounded hover:bg-gray-200"
          role="button"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <svg className="w-6 h-6" focusable="false" viewBox="0 0 24 24">
            <path
              d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
          </svg>
          {
            showTooltip === 1 &&
            <span className="tooltip absolute bg-gray-800 text-white text-xs rounded py-1 px-2 -mt-8 ml-2">
              Google 应用
            </span>
          }
        </a>
        <div
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="rounded-full w-8 h-8 bg-blue-500" role="button"></div>
          {
            showTooltip === 2 &&
            <span className="tooltip absolute bg-gray-800 text-white text-xs rounded py-1 px-2 -mt-8 ml-2">
              Google 账号
            </span>
          }
        </div>
      </div>
    </div>
  )
}