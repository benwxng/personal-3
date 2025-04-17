import { ImageResponse } from 'next/og'

export const alt = 'ben wang'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          letterSpacing: '-0.05em',
        }}
      >
        ben wang
      </div>
    ),
    {
      ...size,
    }
  )
} 