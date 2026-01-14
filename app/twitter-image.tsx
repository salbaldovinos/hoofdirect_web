import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Hoof Direct - Route-Optimized Scheduling for Farriers';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #FFFBFE 0%, #F5F0ED 50%, #EDE7E3 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        {/* Top Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(46, 125, 50, 0.1)',
            padding: '12px 24px',
            borderRadius: '50px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#2E7D32',
            }}
          />
          <span
            style={{
              color: '#2E7D32',
              fontSize: '24px',
              fontWeight: 600,
            }}
          >
            The First Farrier App with Route Optimization
          </span>
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontSize: '72px',
            fontWeight: 700,
            color: '#1C1B1F',
            textAlign: 'center',
            margin: '0 0 24px 0',
            lineHeight: 1.1,
          }}
        >
          Stop Wasting Hours
          <br />
          Planning Routes
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: '32px',
            color: '#49454F',
            textAlign: 'center',
            margin: '0 0 48px 0',
            maxWidth: '900px',
          }}
        >
          Save 5+ hours every week. Works offline. Half the price of competitors.
        </p>

        {/* Stats Row */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: '20px 40px',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <span style={{ fontSize: '36px', fontWeight: 700, color: '#2E7D32' }}>
              5+ hrs
            </span>
            <span style={{ fontSize: '18px', color: '#79747E' }}>Saved weekly</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: '20px 40px',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <span style={{ fontSize: '36px', fontWeight: 700, color: '#2E7D32' }}>
              $29/mo
            </span>
            <span style={{ fontSize: '18px', color: '#79747E' }}>Half the price</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: '20px 40px',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <span style={{ fontSize: '36px', fontWeight: 700, color: '#2E7D32' }}>
              100%
            </span>
            <span style={{ fontSize: '18px', color: '#79747E' }}>Offline ready</span>
          </div>
        </div>

        {/* Brand */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontSize: '28px',
              fontWeight: 600,
              color: '#6D4C41',
            }}
          >
            Hoof Direct
          </span>
          <span style={{ fontSize: '24px', color: '#79747E' }}>|</span>
          <span style={{ fontSize: '24px', color: '#79747E' }}>hoofdirect.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
