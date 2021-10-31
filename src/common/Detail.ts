import LCH from "../style/image/lch.png";
import SONG from "../style/image/song.png";
import MENTOR from "../style/image/mentor.png";
import HEROGAME from "../style/image/HeroGame.png";
interface IDetail {
  phase: string;
  title: string;
  subTitle: string;
  image: string;
  description: string;
  color: string;
}

export const Detail: Record<string, IDetail> = {
  lol: {
    phase: "2",
    title: "LCH",
    subTitle: "LoL Champions Hero",
    image: LCH,
    color: "#fc6551ad",
    description: `“LCH”는 다음과 같은 방식으로 진행됩니다.\n\n1️⃣ “LCH” 지원 네이버폼 제출(*10월 21일 목요일 00시 부터 선착순 16팀 지원)\n2️⃣ 10월 26일 대진표 발표 및 각 팀 팀장 카톡 채팅방 개설 후 규정집 배포\n3️⃣ 16강 전 - 10월 29일 19시~22시\n4️⃣ 8강 전 - 11월 1일 19~22시\n5️⃣ 4강 전 - 11월 2일 19시~22시\n6️⃣ 결승 및 3,4 위전 - 11월 3일 17시~22시\n\n❗️각 경기의 시간을 지키지 못할 경우 실격패 처리 됨으로 시간 엄수 부탁드립니다.\n❗️16강, 8강, 4강 경기는 3판 2선, 결승 및 3,4 위전은 5판 3선으로 진행됩니다.\n❗️모든 경기는 히어로 측 진행 요원이 관전 하게 됩니다.\n❗️팀 구성에 학과 제한은 없습니다.\n❗️팀원 중 휴학생의 참여는 가능하나 추후 상품 수령은 제한됩니다.\n\n⭐️상품\n1등 : ABKO K660P 프리미엄 카일광축 무빙 LED 게이밍 기계식 키보드\n2등 : 로지텍 코리아 G102\n3등 : BBQ 황금올리브치킨 + 콜라`,
  },
  songFestival: {
    phase: "3",
    title: "공대 가요제",
    subTitle: "학우들의 투표로 결정되는 공대 노래 최강자!🎧",
    image: SONG,
    color: "#bdf0c1",
    description: `1️⃣참가접수\n기간: 10월 23일(토) ~ 10월 26일(화) 18:00시\n2️⃣예선 투표\n기간: 10월 29일(금)~10월 31일(일)\n상위 6인은 본선 진출!\n3️⃣ 본선 접수\n기간: 11월 1일(월) ~11월 2일(화)\n4️⃣ 본선 투표\n기간: 11월 3일(수) ~ 11월 4일(목)\n\n🌟상품:\n1등- Apple 에어팟 1명\n2등- Britz 블루투스 스피커 2명\n3등- 배달의민족 상품권 20000원권 3명`,
  },
  mentor: {
    phase: "1",
    title: "졸업자 & 현직자 멘토링",
    subTitle: "졸업자 및 현직자에게 듣는 현실적인 조언📑",
    image: MENTOR,
    color: "#332a53ad",
    description: `멘토링은 다음과 같은 방식으로 진행됩니다.\n\n1️⃣ 공과대학 학우분들의 질문 조사\n2️⃣ 질문을 졸업자 & 현직자분들께 전달\n3️⃣ 답변 취합 및 게시\n\n✔️ 답변 게시일 : 2021.11.01\n\n❗️무분별한 질문 및 중복된 질문의 경우 검열될 수 있습니다.\n❗️현직자의 경우  "공과대학 신산업융합학과" 재직자를 대상으로 멘토링이 진행됩니다.`,
  },
  heroGame: {
    phase: "6",
    title: "히어로 게임",
    subTitle: "“최후의 1인은 누가 될 것인가?”",
    image: HEROGAME,
    color: "#b10000",
    description:
      "zoom을 통한 게임으로 끝까지 살아남아 우승을 거머쥐세요!\n\n🔔우승상품 : Apple 에어팟 프로\n🔔참가상품 : 참가자들 중 추첨을 통해 30명'깐부치킨 오징어치킨'을 드립니다.\n\n✔ 참가접수기간 : 11월 1일 (월) ~ 11월 2일 (화) 17:00\n✔ 게임진행방식 : zoom을 통한 진행\n✔ 게임진행날짜 : 11월 5일 (금) 밤 10시\n\n🚨게임 룰🚨 \n⭕해당 게임은 실력에 의존하지 않는 게임들로 구성되어 있습니다.\n⭕참가자는 본인의 고유 부여번호로 이름을 설정해  zoom을 참가합니다.(ex. 001)\n⭕참가 접수 후 본인 고유번호는 11.3(수)에 추가게시물을 통해 부여받으실 수 있습니다.\n⭕패자부활은 일체 없으며 해당 라운드에 탈락 시 게임이 종료됩니다.\n⭕게임의 내용은 진행 당일 실시간으로 진행자의 멘트에 의해 공개됩니다.\n⭕진행자의 지시와 안내가 중요하므로 인터넷 연결이 원활하게 이루어질 수 있는 환경에서 게임을 진행해야 합니다.\n\n🔍추가문의는 카카오톡 건국대학교 공과대학 학생회 플러스친구를 통해 문의하시면 빠르게 해결하실 수 있습니다.",
  },
};
