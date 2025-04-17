import { ImageResponse } from 'next/og'
import { getBlogPosts } from 'app/writings/utils'

export const alt = 'Ben Wang - Blog Post'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }) {
  const posts = getBlogPosts()
  const post = posts.find((post) => post.slug === params.slug) || {
    metadata: { title: 'Blog Post' }
  }
  
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 50px',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{ 
          fontSize: 24, 
          position: 'absolute', 
          top: 50, 
          opacity: 0.8 
        }}>
          ben wang
        </div>
        <div style={{ 
          fontSize: 64, 
          fontWeight: 'bold',
          maxWidth: '80%',
          lineHeight: 1.2
        }}>
          {post.metadata.title}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 