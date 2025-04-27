import Head from 'next/head';
import GuideArticle from '../components/GuideArticle';

export default function Guide() {
  return (
    <>
      <Head>
        <title>SKT 해킹 사고 대응 가이드</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        <a href="/" className="logo">
          SKT 유심 해킹 공동대응
        </a>
        <button
          className="action"
          onClick={() => window.open('https://example.com/class-action', '_blank')}
        >
          집단소송 참여하기
        </button>
      </header>

      <main style={{ padding: '3rem 1rem', maxWidth: '1024px', margin: '0 auto' }}>
        <GuideArticle />
      </main>

      <footer>
        © 2025 SKT 유심 해킹 공동대응 참여자들 ·{' '}
        <a
          href="https://x.com/sktleakresponse/status/1916364242250568136"
          target="_blank"
          rel="noopener noreferrer"
        >
          트위터 공지
        </a>
      </footer>
    </>
  );
}
