import entp from "../style/image/self-esteem.png";
import entj from "../style/image/leadership.png";
import enfp from "../style/image/to-go-cup.png";
import enfj from "../style/image/understand.png";
import esfj from "../style/image/note-book.png";
import esfp from "../style/image/heart.png";
import estj from "../style/image/sunflower.png";
import estp from "../style/image/bulldozer.png";
import intj from "../style/image/perfection.png";
import infj from "../style/image/sunflower.png";
import intp from "../style/image/one-way.png";
import infp from "../style/image/marbles.png";
import istj from "../style/image/emotionally-stable.png";
import istp from "../style/image/pencil.png";
import isfj from "../style/image/positive-attitude.png";
import isfp from "../style/image/happy-face.png";
import SmartWatch from "../style/image/smart-watch.png";
import Mask from "../style/image/mask.png";
import DownJacket from "../style/image/down-jacket.png";
import FoldingPhone from "../style/image/folding-phone.png";
import Devil from "../style/image/devil.png";
import AudioTape from "../style/image/audio-tape.png";
import Tray from "../style/image/tray.png";
import HeadPhonse from "../style/image/headphones.png";

export enum MBTIType {
  ENTP = "ENTP",
  ENTJ = "ENTJ",
  ENFP = "ENFP",
  ENFJ = "ENFJ",
  ESFJ = "ESFJ",
  ESFP = "ESFP",
  ESTJ = "ESTJ",
  ESTP = "ESTP",
  INTJ = "INTJ",
  INFJ = "INFJ",
  INTP = "INTP",
  INFP = "INFP",
  ISTJ = "ISTJ",
  ISTP = "ISTP",
  ISFJ = "ISFJ",
  ISFP = "ISFP",
}
type MBTIResult = {
  title: string;
  subTitle: string;
  topText: string;
  midText: string;
  lastText: string;
  image: string;
  color: string;
};

export const MBTI: Record<MBTIType, MBTIResult> = {
  [MBTIType.ENTP]: {
    title: "내가 최고야!",
    subTitle: "솔직하고 자기애가 강한\n 전기전자공학부",
    topText: "매우 솔직한 당신의 이상형!",
    midText:
      "활발한 성격과 직설적인 성격으로 속마음을 숨기지 않는 성격이랍니다. 이해력이 빨라 문제 파악 및 해결에 뛰어난 사람이에요. 당신의 이상형은 연애에 있어서 밀당보다는 직진하는 스타일이에요. 호불호가 분명하고 싫증을 빨리 내는 편이라 데이트할　때는 새로운 핫플이나 액티비티를 함께 찾아다니는 것을 추천한답니다. 자기애가 강한 당신의 이상형은 연애에 있어 자신만의 시간도 중요하니 존중해주세요!",
    lastText: "한국에 단 2% 밖에 존재하지 않아요.",
    image: entp,
    color: "#D4F1F4",
  },
  [MBTIType.ENTJ]: {
    title: "나만 따라와!",
    subTitle: "냉철하지만 헷갈리게 하지 않는\n 기계항공공학부",
    topText: "타고난 리더의 성격을 가진 당신의 이상형!",
    midText:
      "다른사람들에게 자신감을 불어넣어 주는 존재지만 가끔은 냉철한 모습을 볼 수도 있습니다. 하지만 그들은 사랑하는 연인과 함께 성장하고 성공하는 걸 굉장히 좋아한답니다. 사랑에는 천천히 스며드는 성격이지만, 사랑하는 사람에겐 확실하게 표현하여 상대방을 헷갈리게 하지 않아요. 그들에게 빨리 다가가는 것보다는 충분한 시간을 주는 것이 중요하답니다.",
    lastText: "한국에 단 2% 밖에 존재하지 않아요.",
    image: entj,
    color: "#6eb5ff85",
  },
  [MBTIType.ENFP]: {
    title: "인간 핫팩!",
    subTitle: "따뜻하고 매력적인\n 산업공학과",
    topText: "독창적이고 넘치는 상상력을 가진 당신의 이상형!",
    midText:
      "따뜻하고 정렬적인 성격으로 다른 사람들을 만나는 자리에서 항상 분위기를 주도합니다. 감정 기복이 심하지만, 상대방에게 친절하고 이해심이 많아 인기가 많은 매력적인 사람이랍니다. 그들은 연애에 있어서 자신의 이면도 사랑해줄 수 있는 사람을 원해요. 타고난 사랑꾼인 그들의 마음을 얻기 위해선 그들에게 진실 된 마음을 표현하는 것이 중요하답니다.",
    lastText: "한국인 4%가 이 유형에 해당해요!",
    image: enfp,
    color: "#ff868654",
  },
  [MBTIType.ENFJ]: {
    title: "프로공감러!",
    subTitle: "호기심 넘치고 헌신하는\n 화학공학부",
    topText: "공감능력이 뛰어난 당신의 이상형!",
    midText:
      "타인을 돕는 것을 좋아하고 호기심이 넘치는 성격을 가자고 있습니다. 그들은 사랑하는 사람에게 헌신하는 스타일로 온전히 당신에게 집중하는 사람이랍니다. 매 순간 최선을 다하는 이 유형은 사랑하는 사람에게도 최선을 다한다고 하네요. 하지만 직설적으로 말을 못하니 그들의 기분을 헤아려 줄 수 있도록 노력해야 돼요.",
    lastText: "한국인 1%가 이 유형에 해당해요!",
    image: enfj,
    color: "#f9bbee",
  },
  [MBTIType.ESFJ]: {
    title: "걸어다니는 메모장!",
    subTitle: "세심하고 사랑넘치는\n 생물공학과",
    topText: "신나고 재미있는 사람인 당신의 이상형!",
    midText:
      "당신의 말을 항상 공감하고 세심하게 기억하죠. 그래서 당신에게 많은 사랑을 주고 그만큼 받고 싶어해요. 당신과 대화할 때 가벼운 이야기를 주로 하는 거와 달리 내면은 진지한 면이 있으니 꼭 기억해주세요.",
    lastText: "한국인 5%가 이 유형에 해당해요!",
    image: esfj,
    color: "#f8fdb0",
  },
  [MBTIType.ESFP]: {
    title: "하트뿅뿅!",
    subTitle: "적극적이고 금방 사랑에 빠지는\n K뷰티산업융합학과",
    topText: "즐거움을 추구하는 스타일인 당신의 이상형!",
    midText:
      "당신과 함께 보내는 시간을 좋아하고 종종 깜짝 이벤트도 준비하는 사랑꾼 기질이 다분합니다. 연락할 때에는 답장이 빠르거나 안읽씹을 자주 하는 스타일이네요. 그리고 싫고 좋은 감정이 분명히 표정에 드러나니 잘 캐치하도록 하세요.",
    lastText: "한국인 5%가 이 유형에 해당해요!",
    image: esfp,
    color: "#f30df759",
  },
  [MBTIType.ESTJ]: {
    title: "겉바속촉!",
    subTitle: "잘 챙겨주고 해바라기인\n 사회환경공학부",
    topText: "책임감이 강한 타입인 당신의 이상형!",
    midText:
      "연애를 우선적으로 생각하기에, 상대방을 잘 챙겨주고 헌신하는 스타일입니다. 그리고 호불호가 확실하기에 감정을 잘 표현하는 모습이 주로 보여요. 겉으로는 조금 딱딱해 보일 수 있지만 당신만을 보는 사람이기에 걱정마세요.",
    lastText: "한국인의 15%가 이 유형에 해당해요!",
    image: estj,
    color: "#fc4aff85",
  },
  [MBTIType.ESTP]: {
    title: "파워 인싸!",
    subTitle: "활동적인 불도저\n 컴퓨터공학부",
    topText: "자유분방하고 활동적인 당신의 이상형!",
    midText:
      "관심 받는 일을 매우 좋아하고, 무대 중심에 서있는 모습을 자주 볼 수 있어요. 그리고 상대방에게 관심이 많아서 미세한 옷차림의 변화도 잘 캐치해요. 당신과 함께 시간을 보낼 때 함께 운동을 하거나 맛집을 찾아다니는 등 활동적인 데이트를 좋아하기에 잘 기억해 두세요.",
    lastText: "한국인 6%가 이 유형에 해당해요!",
    image: estp,
    color: "#215bdf85",
  },
  [MBTIType.INTJ]: {
    title: "뚝딱뚝딱!",
    subTitle: "츤데레이고 추진력있는\n 생물공학과",
    topText: "체계적이며 완벽주의적 성향을 보이는 당신의 이상형!",
    midText:
      "개인적 성공을 중시하며 독창성 또한 뛰어납니다. 사고방식이 합리적이다 보니 연애 센스는 조금 떨어지는 편인데요, 이 유형은 재미만을 추구하거나 진심 없는 연애는 가치가 없다고 생각하여 진실된 사랑을 추구하는 편입니다.",
    lastText: "한국인의 4%가 이 유형에 해당해요!",
    image: intj,
    color: "#80f99485",
  },
  [MBTIType.INFJ]: {
    title: "해바라기!",
    subTitle: "신중하고 올인하는\n 기계항공공학부",
    topText: "공감능력이 뛰어나고 경청을 잘해주는 당신의 이상형!",
    midText:
      "상상력이 풍부하고 따듯한 마음을 가지고 있습니다. 표정관리를 잘해서 쉽게 마음을 알아채기 어려운데요, 좀처럼 속마음을 먼저 드러내지 않아 속앓이를 할 수도 있겠지만 연애할 때는 누군가와 사귀면 연애에 올인하고 삶의 1순위가 연애가 되는 로맨티스트입니다.",
    lastText: "한국인의 2%가 이 유형에 해당해요!",
    image: infj,
    color: "#f9f08085",
  },
  [MBTIType.INTP]: {
    title: "마이웨이!",
    subTitle: "독립적이고 취향이 맞으면 최고인\n 컴퓨터공학부",
    topText: "독창적이고 상상력이 풍부한 당신의 이상형!",
    midText:
      "컴퓨터공학부는 잡다한 상식이 많아 같이 대화를 하면 시간 가는 줄 모르겠는데요~ 세상질서에 관심이 없어 항상 편한 옷을 입고 이것저것 탐구하는 모습을 자주 볼 수 있을겁니다. 이 유형은 사람에게 감정을 쏟으면서 시간 보내기를 그다지 선호하지 않아 연애와 사랑은 삶에서 1순위가 아닌 경우가 많은데요, 상대방에게 구속되는 것 또한 싫어합니다. 하지만 대화가 잘 통하는 좋아하는 상대와는 편하고 친구 같은 연애를 할 수 있을거에요.",
    lastText: "한국인의 3%가 이 유형에 해당해요!",
    image: intp,
    color: "#f9f08085",
  },
  [MBTIType.INFP]: {
    title: "유리구슬!",
    subTitle: "이상적이고 감정적인\n 전기전자공학부",
    topText: "눈물이 많고 거절을 어려워하는 당신의 이상형!",
    midText:
      "혼자 있는것을 좋아하고 감정기복이 심한 모습을 볼 수 있습니다. 이 유형은 상대방에게 말 한마디 한 마디 신경 써서 하는 성격인만큼 상처 또한 잘 받는 모습인데요. 좋아하는 사람과 만나면 오버하고 어색하게 행동하는 귀여운 모습도 볼 수 있습니다. 작은 일에도 감동을 잘 받고 섬세한 성격으로 아기자기한 연애를 할 수 있을거에요.",
    lastText: "한국인의 3%가 이 유형에 해당해요!",
    image: infp,
    color: "#d9640085",
  },
  [MBTIType.ISTJ]: {
    title: "유교인간!",
    subTitle: "표현은 어렵지만 안정적인\n 신산업융합학과",
    topText: "현실을 중요시하고 공과 사의 경계가 뚜렷한 당신의 이상형!",
    midText:
      "규칙, 전통을 중요하게 생각하기 때문에 때론 유교걸/유교보이라는 소리를 듣기도합니다. 이 유형은 감정 기복이 심하지 않아, 안정적인 연애를 하게 됩니다. 하지만, 감정을 표현하는 것에 익숙하지 않기 때문에 공감과 소통을 하는 데 어려움을 겪을 수 있습니다.",
    lastText: "한국인의 25%가 이 유형에 해당해요!",
    image: istj,
    color: "#c059eb85",
  },
  [MBTIType.ISTP]: {
    title: "만능재주꾼!",
    subTitle: "내 사람을 잘 챙기는\n 사회환경공학부",
    topText: "직접 눈으로 보고 경험하는 것에 흥미를 느끼는 당신의 이상형!",
    midText:
      "만능 재주꾼이지만, 다른 사람의 감정을 파악하고 공감하는 데에는 어려워합니다. 새로운 사람 보다 오래된 인연을 아끼는 타입으로 내 사람에게 정말 잘하는 편입니다. 표현이 부족해서 무뚝뚝해 보일 수 있지만 마음은 정말 따듯한 사람입니다.",
    lastText: "한국인의 9%가 이 유형에 해당해요!",
    image: istp,
    color: "#59ebc385",
  },
  [MBTIType.ISFJ]: {
    title: "긍정왕!",
    subTitle: "책임감이 강하고 잘 맞춰주는\n 화학공학부",
    topText: "따뜻하며 공감능력이 높은 당신의 이상형!",
    midText:
      "상대방의 감정을 빨리 캐치해내는 데 능숙합니다. 또한, 헌신적이고 책임감이 높아 상대를 지나칠 정도로 배려하는 면모도 갖추고 있어요. 연인과 서로 긍정적인 영향을 주고받는 것을 좋아해요. 또한, 헌신적이고 공감능력이 높아 대부분 친구 같은 연애보다는 드라마나 영화에서와 같이 애정이 넘치는 연애를 해요.",
    lastText: "한국인의 8%가 이 유형에 해당해요!",
    image: isfj,
    color: "#fff94c85",
  },
  [MBTIType.ISFP]: {
    title: "사랑에는 올인!",
    subTitle: "다정하고 진심에 감동하는\n 산업공학과",
    topText: "성인군자형인 당신의 이상형!",
    midText:
      "정서적으로 따뜻하고 편안한 이들은 신중하지만 사랑에 빠지면 올인하는 스타일입니다. 상대방의 감정을 진심으로 이해하고 공감해주며 진정으로 도우려는 모습을 많이 보여요. 갈등을 싫어해서 상대방에게 맞춰주는 편이에요. 하지만 이들은 혼자 있는 시간이 꼭 필요해요!",
    lastText: "한국인의 7%가 이 유형에 해당해요!",
    image: isfp,
    color: "#f30df759",
  },
};

type TrendType = {
  title: string;
  subTitle: string;
  score: string;
  description: string;
  item: string;
  image: string;
  color: string;
};

export const Trend: Record<number, TrendType> = {
  [1]: {
    title: "호돌이와 동갑!",
    subTitle: "88학번",
    score: "(0점~6점)",
    description:
      "당신의 트렌드 나이는 여전히 그때에,,, SNS를 별로 안 하는 편이군요! 당신의 취미는 혹시 바둑이나 등산? 그래도 트렌드는 돌고 돌으니 언젠간 당신이 가장 트렌드를 잘 아는 사람이 될 수도 있어요!",
    item: "줄 이어폰",
    image: HeadPhonse,
    color: "#eef57e8c",
  },
  [2]: {
    title: "응애!",
    subTitle: "28학번",
    score: "(7점~12점)",
    description:
      "아무것도 모르는 당신은 애기! 아직 세상에 눈뜨지 않은 당신! 그래도 조금은 트렌드를 알고 있는 당신은 친구들에게 들은 내용으로 트렌드를 아는 경우가 많겠어요!",
    item: "급식판",
    image: Tray,
    color: "#a1e2fb8c",
  },
  [3]: {
    title: "혹시 아직도 삐삐 사용중?",
    subTitle: "94학번",
    score: "(13점~18점)",
    description:
      "‘응답하다 1994’를 보면서 엄청난 폭풍 공감을 했을 당신! X세대에 속해, Z세대와 공감하기에는 아직 부족한거 같군요. 트랜드에 어울리기 위한 노력이 조금 요구되고 있어요.",
    item: "삐삐, 카세트테이프",
    image: AudioTape,
    color: "#9d9d9d8c",
  },
  [4]: {
    title: "응원 다녀오셨어요?",
    subTitle: "02학번",
    score: "(19점~24점)",
    description:
      "혹시 기억 속에 붉은 티를 입고 거리 응원 해봤을 당신! Z세대가 되고 위해 노력하고 있지만, 잘못하면 M세대 사람인게 티날 수 있을거 같군요. 조금만 더 노력하면 얼리어답터가 될 수 있을 거예요.",
    item: "붉은악마 티셔츠",
    image: Devil,
    color: "#ff24248c",
  },
  [5]: {
    title: "자네 도토리 좀 모아봤나?",
    subTitle: "09학번",
    score: "(25점~30점)",
    description:
      "폴더폰으로 서로의 안부를 주고 받던 그 시절.. 싸이월드 감성을 아직 잊지 못하셨군요. 젊은 친구들의 유행이 다소 버겁더라도, 열심히 배우려 노력하는 자세가 멋지네요. 기억 저 편의 싸이월드가 다시 부활한 것처럼, 여러분의 젊은 감각도 곧 돌아올 거에요~",
    item: "폴더폰, mp3",
    image: FoldingPhone,
    color: "#8102028c",
  },
  [6]: {
    title: "롸떼는 말이야~",
    subTitle: "17학번",
    score: "(31점~36점)",
    description:
      "동 틀 때까지 술과 함께한 축제부터, 당당히 금메달 걸고 나간 중간고사까지 이제 학교의 어엿한 대선배가 되어 후배들에게 동경과 선망을 받는 당신! 대학생의 로망을 모두 경험해 본 그대가 진정한 위너 ..?",
    item: "롱패딩",
    image: DownJacket,
    color: "#93ff8c8c",
  },
  [7]: {
    title: "혼자서도 잘 놀아요!",
    subTitle: "20학번",
    score: "(37점~42점)",
    description:
      "코로나 학번으로 반강제 혼순이가 되어버린 20학번, 그래도 혼자서도 잘 놀았군요? 트렌드를 굉장히 많이 알고 있는 당신!",
    item: "마스크",
    image: Mask,
    color: "#fdf1c58c",
  },
  [8]: {
    title: "당신은 진정한 Z세대!",
    subTitle: "범접할 수 없는 21학번",
    score: "(43점~48점)",
    description:
      "당신은 사람들이 말하는 ‘요즘 애들’입니다. 스우파, 쇼미, 오징어게임을 보지 않아도 내용을 다 알고있는 당신은 인싸! 어딜가든 주목을 받고, 이야기 보따리가 끊임없이 나오는군요! 모두가 부러워할만한 트렌디함을 가졌군요!",
    item: "스마트워치",
    image: SmartWatch,
    color: "#ffaee28c",
  },
};
