import React from 'react'

function Composability_Icon() {
  return (
    <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ overflow: 'visible' }}
  >
    <rect
      className="square-1"
      x="3"
      y="7"
      width="14px"
      height="14px"
      rx="4"
      fill="#1F807B"
      fillOpacity="0.4"
      style={{
        transform: 'translateX(-14px) rotate(135deg)',
        transformOrigin: '12px 16px',
      }}
      opacity="0"
    />
    <rect
      className="square-2-outline"
      x="13"
      y="6"
      width="24px"
      height="24px"
      rx="5"
      fill="#F7F6F6"
      style={{
        transform: 'translateX(-8px) rotate(135deg)',
        transformOrigin: '23px 16px',
      }}
      fillOpacity="0.4"
    />
    <rect
      className="square-2"
      x="16"
      y="9"
      width="18px"
      height="18px"
      rx="4"
      fill="#1F807B"
      style={{
        transform: 'translateX(-8px) rotate(135deg)',
        transformOrigin: '23px 16px',
      }}
      fillOpacity="0.4"
    />
    <rect
      className="square-3-outline"
      x="13"
      y="6"
      width="20"
      height="20"
      rx="5"
      fill="#F7F6F6"
      opacity="1"
      style={{
        transform: 'rotate(135deg)',
        transformOrigin: '23px 16px',
      }}
    />
    <rect
      className="square-3"
      x="16"
      y="9"
      width="14"
      height="14"
      rx="3"
      fill="#1F807B"
      opacity="1"
      style={{
        transform: 'rotate(135deg)',
        transformOrigin: '23px 16px',
      }}
    />
  </svg>
  )
}

export default Composability_Icon