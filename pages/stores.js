
import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Map,
  MapMarker,
  useKakaoLoader,
} from 'react-kakao-maps-sdk';

export default function Stores() {
  /* ------------------------------------------------------------------ */
  /* 1) Kakao SDK 로드 (react-kakao-maps-sdk 제공)                       */
  /* ------------------------------------------------------------------ */
  const [loading, sdkError] = useKakaoLoader({
    // 브라우저에서도 노출되어야 하므로 NEXT_PUBLIC_ 으로 선언
    appkey: process.env.NEXT_PUBLIC_KAKAO_APP_KEY ?? '3e8d9e7c8a953d8fd0b8465ede566fb1',
    libraries: ['services'],
    // Kakao SDK 서버는 HTTPS 전용
    url: 'https://dapi.kakao.com/v2/maps/sdk.js',
  });

  /* ------------------------------------------------------------------ */
  /* 2) 상태: 지도 중심, 검색 결과(SKT 직영점)                           */
  /* ------------------------------------------------------------------ */
  const [center, setCenter] = useState({ lat: 37.5665, lng: 126.978 }); // 초기(서울 시청)
  const [stores, setStores] = useState([]); // [{lat,lng,name,addr,phone}]

  /* ------------------------------------------------------------------ */
  /* 3) SDK 로드 완료 후 → Geolocation → Kakao Places 검색               */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    if (loading || sdkError) return;

    if (!navigator.geolocation) {
      alert('이 브라우저는 위치 정보를 지원하지 않습니다.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;
        setCenter({ lat: latitude, lng: longitude });

        /* Kakao Places 키워드 검색 */
        const ps = new window.kakao.maps.services.Places();
        const options = {
          location: new window.kakao.maps.LatLng(latitude, longitude),
          radius: 20000, // 20 km
          size: 15,
        };

        ps.keywordSearch(
          'SKT 직영점',
          (data, status) => {
            if (status !== window.kakao.maps.services.Status.OK) {
              alert('근처 SKT 직영점을 찾지 못했습니다.');
              return;
            }

            // 내 위치와의 거리(미터)를 계산하여 가까운 순으로 정렬
            const toRad = (deg) => (deg * Math.PI) / 180;
            const dist = (aLat, aLng, bLat, bLng) => {
              const R = 6371000; // Earth radius (m)
              const dLat = toRad(bLat - aLat);
              const dLng = toRad(bLng - aLng);
              const lat1 = toRad(aLat);
              const lat2 = toRad(bLat);
              const h =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1) * Math.cos(lat2) *
                  Math.sin(dLng / 2) * Math.sin(dLng / 2);
              return 2 * R * Math.asin(Math.sqrt(h));
            };

            const storesSorted = data
              .map((d) => {
                const lat = Number(d.y);
                const lng = Number(d.x);
                return {
                  lat,
                  lng,
                  name: d.place_name,
                  addr: d.road_address_name || d.address_name,
                  phone: d.phone,
                  distance: dist(latitude, longitude, lat, lng),
                };
              })
              .sort((a, b) => a.distance - b.distance);

            setStores(storesSorted);
          },
          options,
        );
      },
      (err) => alert('GPS 오류: ' + err.message),
      { enableHighAccuracy: true },
    );
  }, [loading, sdkError]);

  /* ------------------------------------------------------------------ */
  /* 4) 리스트 클릭 → 지도 이동 + 인포윈도우 열기                         */
  /* ------------------------------------------------------------------ */
  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleItemClick = (idx) => {
    setFocusedIndex(idx);
    setCenter({ lat: stores[idx].lat, lng: stores[idx].lng });
  };

  /* ------------------------------------------------------------------ */
  /* 5) 렌더링                                                            */
  /* ------------------------------------------------------------------ */
  if (sdkError) {
    return (
      <p style={{ color: 'red' }}>카카오 SDK 로드 오류: {sdkError.message}</p>
    );
  }

  return (
    <>
      <Head>
        <title>근처 SKT 대리점 찾기 | SKT 유심 해킹 공동대응</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header>
        <a href="/" className="logo">
          SKT 유심 해킹 공동대응
        </a>
        <button
          className="action"
          onClick={() => {
            window.location.href = '/';
          }}
        >
          대응 가이드 보기
        </button>
      </header>

      <div className="map-wrapper">
        {/* 사이드바 */}
        <aside className="sidebar">
          <h2>근처 SKT 직영점 <small>(가까운 순)</small></h2>
          {stores.map((s, idx) => (
            <div
              key={idx}
              className={`place-item${idx === focusedIndex ? ' active' : ''}`}
              onClick={() => handleItemClick(idx)}
            >
              <strong>{s.name}</strong>
              <br />
              <small>
                {s.addr}
                <br />
                {s.phone || ''}
                <br />
                {Math.round(s.distance)} m
              </small>
            </div>
          ))}
        </aside>

        {/* 지도 */}
        {/* 지도 */}
        {!loading && (
          <Map center={center} level={5} isPanto className="map">
            {/* 내 위치 */}
            <MapMarker
              position={center}
              image={{
                src: 'https://t1.daumcdn.net/localimg/localimages/07/2022/poi_point/blue.png',
                size: { width: 24, height: 35 },
                options: { offset: { x: 12, y: 35 } },
              }}
            />

            {/* SKT 직영점 마커 */}
            {stores.map((s, idx) => (
              <MapMarker
                key={idx}
                position={{ lat: s.lat, lng: s.lng }}
                onClick={() => setFocusedIndex(idx)}
              >
                {idx === focusedIndex && (
                  <div style={{ fontSize: 12, padding: 4, color: '#000' }}>
                    {s.name}
                    <br />
                    {s.phone || ''}
                  </div>
                )}
              </MapMarker>
            ))}
          </Map>
        )}
      </div>

      <footer>
        © 2025 SKT 유심 해킹 공동대응 참여자들 ·{' '}
        <a
          href="https://x.com/sktleakresponse"
          target="_blank"
          rel="noopener noreferrer"
        >
          트위터 공지
        </a>
      </footer>
    </>
  );
}
