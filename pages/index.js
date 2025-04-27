import Head from 'next/head';

/* 메인 페이지 – 대응 가이드 & 설문 링크 */

const htmlContent = `
  <h2>SKT 유심 해킹 사건 관련 집단소송 관심도 설문조사</h2>
  <p>현재 SKT 유심 해킹 사건과 관련하여 법무법인을 선임하고 국회와 과기부 등에 집단소송과 항의를 준비하기 위해, 관심있는 분들의 신청을 받고 있습니다.</p>
  <p>상단 우측의 <strong>집단소송 참여하기</strong> 버튼을 눌러 주세요.</p>
  <p>해당 결과는 과학기술정통부 국민신문고 민원 제기 및 국회·정부 기관 전달 자료로 활용될 예정입니다.</p>
  <p>참여하신 분들은 <a href="https://open.kakao.com/o/grCFTlth" target="_blank" rel="noopener noreferrer">카카오톡 오픈채팅방</a>에 들어오셔서 의견을 나눠 주시면 감사하겠습니다.</p>
  <br />

  <h2>📌 SK텔레콤 서버 침해 사고 – 통합 대응 가이드 <span style="font-size:0.8em;">(업데이트版)</span></h2>
  <p>※ 기존 가이드의 핵심은 유지하되, ❶ 사고 핵심 정보 ❷ 대상별 대응 ❸ 보안 팁을 보강했습니다.</p>

  <hr />

  <h3>1. 사고 개요 및 위험도</h3>
  <ul>
    <li>SK텔레콤 일부 서버 침해로 <strong>IMSI(가입자번호)·IMEI(단말기번호)·USIM 인증키 일부</strong>가 외부 유출 정황 확인</li>
    <li>주민등록번호·주소·결제정보는 포함되지 않았으나, 휴대폰을 특정·추적할 수 있는 <strong>식별·인증 정보</strong>여서 2차 공격(위치 추적·복제 USIM 제작 등) 위험 존재</li>
  </ul>

  <h3>2. 대상별 권장 대응</h3>
  <ol>
    <li>일반 이용자 → <strong>USIM만 교체</strong></li>
    <li>공무원·보안담당 등 민감 정보 취급자 → <strong>USIM + 단말기 교체</strong> 고려</li>
    <li>최근 <em>통화 끊김·이상 문자</em> 등 증상 시 → <strong>즉시 USIM 교체</strong>, 필요하면 단말 교체</li>
  </ol>

  <h3>3. 공통 필수 조치</h3>
  <ol>
    <li>
      <strong>USIM 교체</strong><br />
      가까운 T월드 대리점 방문 후 “SKT 사고 관련 새 USIM” 요청<br />
      3월 28일(예정)부터 <strong>교체 비용 전액 면제</strong>, 기존 USIM은 현장 폐기
    </li>
    <li>
      <strong>스마트폰 최신화</strong><br />
      OS·앱 업데이트 → 무료 백신(예: V3 Mobile, 카스퍼스키) 설치 후 전체 검사
    </li>
    <li>
      <strong>피싱·스미싱 주의</strong><br />
      “당첨/본인확인” 문자·모르는 번호 링크는 절대 클릭 금지
    </li>
    <li>
      <strong>통신사 보안 알림 켜기</strong><br />
      ‘T world’ 앱 설치 → “이상 로그인” 등 알림 <em>ON</em>
    </li>
  </ol>

  <h3>4. 추가 보안 습관</h3>
  <ul>
    <li>통신사·포털 비밀번호를 <strong>문자+숫자+특수문자</strong> 조합으로 변경</li>
    <li>은행·인증서 앱을 항상 최신으로 유지, 금융 알림(문자·푸시) 활성화</li>
    <li>스팸·피싱이 계속되면 <strong>전화번호 변경</strong>까지 고려(최후수단)</li>
  </ul>

  <h3>5. 고령자·취약계층 지원</h3>
  <p>가족·보호자가 ▲USIM 발급 ▲업데이트 ▲백신 설치 ▲이상 통화·문자 체크 등 리스트를 만들어 주기적 점검하고, 필요 시 <strong>114 무료 상담</strong> 연계</p>

  <h3>6. 사고 모니터링 & 공식 발표</h3>
  <ul>
    <li>SKT 홈페이지·T world 공지사항 수시 확인</li>
    <li>KISA ‘보호나라’ 긴급공지 참고</li>
    <li>추가 피해 의심 시 KISA(118) 또는 경찰청 사이버수사국 신고</li>
  </ul>

  <hr />

  <h3>🔎 한눈에 보는 핵심 포인트</h3>
  <ul>
    <li><strong>USIM은 가급적 빨리 교체</strong></li>
    <li>단말 교체는 ‘민감 업무 종사자’ 또는 ‘이상 증상’ 시만 검토</li>
    <li>OS·앱 업데이트·백신 검사·피싱 차단 알림 등 기본 보안 습관 유지</li>
    <li>SKT 공식 공지를 지속적으로 확인</li>
  </ul>

  <p style="font-weight:600;">USIM 교체와 스마트폰·금융앱 최신화를 먼저 완료하면 대부분의 위험을 크게 줄일 수 있습니다.</p>


  <h2>“휴대전화 열쇠가 복사됐어요!” – SKT 유심 해킹 사건 쉽게 이해하기</h2>

  <h3>1. 어떤 일이 일어난 건가요?</h3>
  <ul>
    <li><strong>우리 휴대전화 안에는 작은 칩이 있는데, 이것을 유심(USIM)이라고 부릅니다.</strong>
      <ul>
        <li>유심은 휴대전화가 \"이 번호 주인이 맞아요!\"라고 증명해 주는 <strong>전자 신분증</strong>과 같습니다.</li>
      </ul>
    </li>
    <li>이번에 해킹된 사건에서는 이 유심 안에 있는 <strong>중요한 비밀 정보(열쇠)가 도둑들에게 복사된 것</strong>으로 보입니다.
      <ul>
        <li>심지어 휴대전화마다 고유하게 붙어 있는 <strong>IMEI라는 번호</strong>까지 유출되었다고 합니다.</li>
        <li>쉽게 말하면, 집 열쇠뿐 아니라 대문 비밀번호, 초인종까지 모두 도둑 손에 넘어간 상황이라고 생각하면 됩니다.</li>
      </ul>
    </li>
  </ul>

  <h3>2. 도둑이 이 '복사된 열쇠'로 무엇을 할 수 있나요?</h3>
  <table>
    <thead>
      <tr>
        <th>도둑이 할 수 있는 일</th>
        <th>우리에게 일어날 수 있는 피해</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>복사된 유심으로 가짜 유심을 만들어 자기 폰에 꽂는다</strong></td>
        <td>내 전화번호가 도둑의 휴대전화로 이동합니다.<br>내 휴대전화는 갑자기 <strong>전화·문자가 되지 않습니다.</strong></td>
      </tr>
      <tr>
        <td><strong>인증번호 문자 훔쳐가기</strong></td>
        <td>은행, 카카오톡, 인터넷 쇼핑몰 등에서 오는 <strong>인증 번호 문자가 도둑에게 갑니다.</strong><br>도둑이 내 계정을 마음대로 잠그거나 비밀번호를 바꿀 수 있습니다.</td>
      </tr>
      <tr>
        <td><strong>내 번호로 사기 문자·전화 보내기</strong></td>
        <td>내 번호로 가족이나 지인들에게 사기 전화를 걸거나 문자를 보내 속일 수 있습니다.</td>
      </tr>
      <tr>
        <td><strong>이미 다른 개인정보까지 유출된 경우</strong></td>
        <td>주민등록번호 같은 개인정보와 전화번호 인증을 합쳐, 내 명의로 대출이나 은행 계좌를 만드는 등 큰 피해를 줄 수 있습니다.</td>
      </tr>
    </tbody>
  </table>

  <blockquote>
    <p><strong>중요한 사실</strong>: 유심 정보가 유출되면 전화번호 인증으로 운영되는 여러 서비스에 연쇄적으로 큰 피해가 생길 수 있습니다. 특히 IMEI까지 유출됐다면, 휴대전화 번호와 기기를 동시에 속이기 때문에 방어가 더 어려워집니다.</p>
  </blockquote>

  <h3>3. 갑자기 전화가 안 된다면 위험 신호입니다!</h3>
  <ul>
    <li>도둑이 내 번호를 훔쳐 가면, 내 휴대폰은 신호를 받지 못합니다.</li>
    <li>갑자기 평소와 다르게
      <ul>
        <li>전화·문자가 안 되거나</li>
        <li>\"긴급통화만 가능합니다\"라는 메시지가 뜨면 즉시 조심하고 통신사에 연락해야 합니다.</li>
      </ul>
    </li>
    <li>이런 증상이 보이면 빨리 주변 사람들에게 연락해서 도움을 요청하는 것도 중요합니다.</li>
  </ul>

  <h3>4. 지금 당장 해야 할 일</h3>
  <table>
    <thead>
      <tr>
        <th>지금 바로 할 일</th>
        <th>왜 필요한가요?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>유심 카드 새로 교체하기</strong></td>
        <td>새 유심에는 새로운 열쇠가 들어 있어, 도둑의 복사본은 무용지물이 됩니다.<br>가족들 모두 빠르게 교체하면 좋습니다.</td>
      </tr>
      <tr>
        <td><strong>통신사 '유심 보호 서비스' 신청하기</strong><br>(※ 해외 여행 시 사용이 불가능함)</td>
        <td>모르는 휴대전화가 내 번호를 쓰려 할 때 자동으로 막아 줍니다.<br><strong>단, 이번 사건처럼 IMEI까지 유출되어 기기 번호를 조작하면 뚫릴 가능성이 있습니다.</strong><br>그래서 유심 교체가 가장 중요하고, 이 서비스는 추가적인 안전장치로 생각하세요.</td>
      </tr>
      <tr>
        <td><strong>문자 인증 대신 앱 기반 인증 사용하기</strong></td>
        <td>은행이나 카카오톡에서 제공하는 앱 알림, OTP, 간편 인증 등을 쓰면 문자가 도둑에게 가지 않게 막을 수 있습니다.</td>
      </tr>
      <tr>
        <td><strong>중요한 계정의 비밀번호 바꾸기</strong></td>
        <td>이메일, 은행, SNS 등 주요 계정의 비밀번호를 복잡하게 바꾸고, 가능하면 2단계 인증(앱 인증)을 활성화하세요.</td>
      </tr>
      <tr>
        <td><strong>평소 개인정보 관리 철저히 하기</strong></td>
        <td>주민등록번호, 신분증 사진, 계좌번호 같은 중요한 개인정보는 철저히 관리하고, 인터넷이나 문자 메시지를 통해 함부로 제공하지 마세요.</td>
      </tr>
    </tbody>
  </table>

  <h3>5. 자주 묻는 질문</h3>
  <table>
    <thead>
      <tr>
        <th>질문</th>
        <th>쉬운 설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>\"주민등록번호도 유출됐나요?\"</strong></td>
        <td>이번엔 유심 정보가 주로 유출된 것으로 보입니다. 하지만 이미 다른 곳에서 개인정보가 유출됐다면 위험이 더 커집니다.</td>
      </tr>
      <tr>
        <td><strong>\"가짜 유심이 두 대의 휴대폰에서 동시에 사용 가능한가요?\"</strong></td>
        <td>두 대 중 한 대만 작동하고 다른 한 대는 자동으로 끊깁니다. 운이 나쁘면 내 휴대전화가 끊길 수 있습니다.</td>
      </tr>
      <tr>
        <td><strong>\"유심 보호 서비스만 신청하면 안전한가요?\"</strong></td>
        <td>평소엔 도움이 되지만, IMEI가 함께 유출되어 기기 번호까지 바꿀 수 있다면 이 보호 서비스도 무력화될 수 있습니다. 유심 교체가 가장 안전합니다.</td>
      </tr>
      <tr>
        <td><strong>\"유심에 비밀번호(PIN)를 설정하면 안전할까요?\"</strong></td>
        <td>PIN은 휴대폰 자체를 잃어버렸을 때를 대비하는 것이며, 이번 사건처럼 이미 유심 열쇠가 복사됐다면 효과가 없습니다.</td>
      </tr>
      <tr>
        <td><strong>\"해외여행 중 보호 서비스 때문에 로밍이 안 되면 어떻게 하나요?\"</strong></td>
        <td>출국 전에 새 유심으로 교체한 뒤 로밍을 신청하거나, 로밍 기간 동안만 보호 서비스를 잠시 꺼 둘 수 있습니다. 통신사에 미리 문의하세요.</td>
      </tr>
    </tbody>
  </table>

  <h3>6. 앞으로 우리가 신경 써야 할 점</h3>
  <ul>
    <li><strong>전화번호 인증만으로는 안전하지 않습니다.</strong>
      <ul>
        <li>해외처럼 별도의 인증 앱이나 보안 토큰을 사용하는 방향으로 바뀌어야 합니다.</li>
      </ul>
    </li>
    <li><strong>통신사도 보안을 더 철저히 해야 합니다.</strong>
      <ul>
        <li>유심 열쇠를 보관하는 서버는 더 강력하게 보호되어야 합니다.</li>
      </ul>
    </li>
    <li><strong>개인들도 조심하는 습관을 가져야 합니다.</strong>
      <ul>
        <li>문자가 오면 바로 클릭하지 말고, 의심스러운 문자는 보내는 사람을 꼭 확인하고 전화로 물어보세요.</li>
        <li>개인정보 요청하는 전화나 문자는 특히 조심하세요.</li>
      </ul>
    </li>
  </ul>

  <h3>한 줄 요약</h3>
  <p><strong>\"우리 휴대전화 번호를 보호하는 유심의 열쇠와 휴대폰 번호까지 도둑에게 복사됐습니다.\"</strong> 가장 좋은 방법은 <strong>유심을 새로 교체하고, 문자 대신 앱으로 인증하며, 보호 서비스는 보조적으로 활용</strong>하는 것입니다.</p>
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>SKT 유심 해킹 공동대응</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header>
        <a href="/" className="logo">
          {/* 로고 이미지 */}
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: '32px', height: '32px' }}
          />
          SKT 유심 해킹 공동대응
        </a>

        {/* 우측 액션 그룹 */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            className="action"
            onClick={() => {
              window.location.href = '/stores';
            }}
          >
            유심 바꾸기(근처 대리점)
          </button>
          <button
            className="action"
            onClick={() => {
              window.open(
                'https://docs.google.com/forms/d/1_jzO5qwJjlkojPFfsa4YSHUr6NntPWBwjf1vnMrsWqk/viewform?usp=sf_link',
                '_blank',
              );
            }}
          >
              집단소송 참여하기
          </button>
        </div>
      </header>

      <main
        style={{
          padding: '3rem 1rem',
          maxWidth: '1024px',
          margin: '0 auto',
        }}
      >
        <article dangerouslySetInnerHTML={{ __html: htmlContent }} />
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
