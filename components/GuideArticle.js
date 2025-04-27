export default function GuideArticle() {
  return (
    <article>
      {/* trimmed guide content for brevity */}
      <h2>한눈에 보는 대처 흐름</h2>
      <ol>
        <li>
          약정(위약금) 잔여 여부 확인 → 없으면 <strong>즉시 번호이동</strong>, 있으면
          민원/소송 검토
        </li>
        <li>증빙(캡처·녹취) 확보</li>
        <li>집단소송·국회 진정 참여</li>
      </ol>

      <h3>번호이동 – 약정이 없는 경우</h3>
      <ul>
        <li>신분증, 기존 USIM 준비 후 알뜰·KT·LGU+ 온라인 개통</li>
        <li>5G → LTE 다운그레이드 시 혜택 차감 유의</li>
      </ul>

      <h3>약정이 남은 경우 – 과기정통부 민원</h3>
      <p>
        SKT 과실로 계약 목적 달성 불가 → 위약금 면제·감경 요구 근거가 됩니다.
        (이용약관 제9·10조)
      </p>
      <ol>
        <li>
          <a
            href="https://www.msit.go.kr/user/ifm/cvplReqst.do"
            target="_blank"
            rel="noopener noreferrer"
          >
            온라인 민원 접수
          </a>
        </li>
        <li>카테고리: 정보통신 → 전기통신 → 통신서비스</li>
        <li>첨부 예시: 계약서, 접속 장애 캡처, 녹취, 청구서 등</li>
      </ol>

      <h3>FAQ</h3>
      <ul>
        <li>
          <strong>위약금 정말 면제되나요?</strong> – 유사 사례 존재, 분쟁조정위 판단
          필요
        </li>
        <li>
          <strong>민원 기간?</strong> – 접수 후 7~30일 내 결과 통보
        </li>
      </ul>
    </article>
  );
}
