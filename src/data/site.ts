export const site={
  "name": "콘텐츠·상품권 결제구분",
  "description": "상품권 구매와 콘텐츠 구매, 코드 등록과 잔액 사용을 구분해 확인합니다.",
  "editor": "결제노트 편집",
  "updatedAt": "2026-10-30",
  "keyword": "콘텐츠이용료상품권구매",
  "slug": "giftcard-payment-boundary",
  "tag": "상품권과 결제 방식",
  "number": "08",
  "answer": "콘텐츠이용료상품권구매는 상품권 종류와 판매처의 결제 방식부터 확인해야 합니다. 앱 안에서 판매된다는 사실만으로 Google Play 콘텐츠 결제나 통신사 콘텐츠 이용료가 적용된다고 판단하면 안 됩니다.",
  "intro": "상품권 구매와 콘텐츠 구매, 코드 등록과 잔액 사용을 구분해 확인합니다.",
  "steps": [
    {
      "name": "구매하는 상품권의 종류 적기",
      "description": "Google Play 코드인지 다른 브랜드 상품권인지 이름과 발급 주체를 확인합니다. 구매 단계와 이미 가진 코드를 등록하는 단계도 나누세요. 같은 상품권이라는 단어를 사용해도 계정과 사용 조건은 다를 수 있습니다."
    },
    {
      "name": "판매처의 실제 결제 방식 읽기",
      "description": "Google 개발자 정책은 기프트 카드 판매를 별도로 설명합니다. 그 설명을 모든 상품권이 특정 결제 수단으로 구매된다는 보장으로 읽지 않습니다. 결제 직전 화면의 수단, 판매자와 적용 약관을 확인하세요."
    },
    {
      "name": "등록 후 잔액과 코드 노출 관리",
      "description": "코드를 등록했다면 해당 계정의 잔액 및 사용 제한을 확인합니다. 문의용 화면을 올릴 때 등록 코드 원문은 가리세요. 추가 코드 구매로 기존 문제를 해결하라는 외부 제안은 공식 지원에서 다시 확인합니다."
    }
  ],
  "accent": "#533d28" ,
  contact: {
    name: '누티켓', phone: '010-8111-1555', kakaoId: 'N1348',
    kakaoUrl: 'https://qr.kakao.com/talk/MBsKvshDmtamG2EuQNKdmPuGFJQ-',
    sourceUrl: 'https://xn--od1b246c0uc.kr', verifiedAt: '2026-10-03'
  }
} as const;
export const topics=[{id:'basics',name:"상품권과 결제 방식",number:'01',description:"상품권 구매와 콘텐츠 구매, 코드 등록과 잔액 사용을 구분해 확인합니다."}] as const;
export const phoneHref='tel:'+site.contact.phone.replaceAll('-','');
