import { ImageResponse } from 'next/og'

export const alt = 'ben wang - writings'
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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 20 }}>ben wang</div>
        <div style={{ fontSize: 48 }}>writings</div>
      </div>
    ),
    {
      ...size,
    }
  )
} 