const members = {
  james: {
    title: "제임스 프로필",
    image: "https://cdn.kpopping.com/idols/James/profile.jpg",
    imageAlt: "CORTIS 멤버 James 프로필 이미지",
    kicker: "James / 제임스 / Chao Yu Fan",
    bio: "James는 Big Hit의 프리데뷔 그룹 Trainee A 출신으로 알려진 CORTIS 멤버입니다. 데뷔 전부터 안무와 송라이팅 작업에 참여했고, Jung Kook의 Seven 무대에서 백업 댄서로 선 이력도 공개되어 있습니다.",
    stats: [
      ["생일", "2005.10.14"],
      ["국적", "태국 / 홍콩"],
      ["키워드", "Dance / Writing"],
    ],
    detail: "제임스 포인트: Trainee A 이력, 안무 감각, ILLIT과 TXT 곡 작업 참여가 강점으로 언급됩니다.",
  },
  juhoon: {
    title: "주훈 프로필",
    image: "https://cdn.kpopping.com/idols/Juhoon/profile.jpg",
    imageAlt: "CORTIS 멤버 주훈 프로필 이미지",
    kicker: "Juhoon / 주훈 / Kim Juhoon",
    bio: "주훈은 CORTIS의 멤버로, 2025년 8월 18일 팀과 함께 데뷔했습니다. 공개 자료에서는 서울 출신이며, 이전에 아역 모델로 활동했고 여러 뮤직비디오에 출연한 이력이 소개됩니다.",
    stats: [
      ["생일", "2008.01.03"],
      ["출신", "서울"],
      ["키워드", "Vocal / Child model"],
    ],
    detail: "주훈 포인트: 아역 모델 이력, 감성적인 보컬, 자연스러운 카메라 표현력이 잘 어울리는 멤버입니다.",
  },
  martin: {
    title: "마틴 프로필",
    image: "https://cdn.kpopping.com/idols/Martin/profile.jpg",
    imageAlt: "CORTIS 멤버 Martin 프로필 이미지",
    kicker: "Martin / 마틴 / Martin Edwards Park",
    bio: "Martin은 CORTIS의 리더입니다. 한국계 캐나다인 싱어송라이터이자 프로듀서로 소개되며, ILLIT, TOMORROW X TOGETHER, LE SSERAFIM 등의 곡 작업 참여 이력이 공개되어 있습니다.",
    stats: [
      ["생일", "2008.03.20"],
      ["역할", "Leader"],
      ["키워드", "Producer / Rap"],
    ],
    detail: "마틴 포인트: 팀 리더이면서 작사, 작곡, 프로듀싱 이력이 뚜렷한 창작형 멤버입니다.",
  },
  seonghyeon: {
    title: "성현 프로필",
    image: "https://cdn.kpopping.com/idols/Seonghyeon/profile.jpg",
    imageAlt: "CORTIS 멤버 성현 프로필 이미지",
    kicker: "Seonghyeon / 성현 / Eom Seonghyeon",
    bio: "성현은 CORTIS 멤버로, 공개 멤버 표에서는 대전 출신으로 정리되어 있습니다. 팀의 무대 에너지와 퍼포먼스 분위기를 만드는 멤버로 소개되는 경우가 많습니다.",
    stats: [
      ["생일", "2009.01.13"],
      ["출신", "대전"],
      ["키워드", "Performance / Energy"],
    ],
    detail: "성현 포인트: 무대에서의 에너지, 관객을 끌어들이는 분위기, 퍼포먼스 존재감이 중심입니다.",
  },
  keonho: {
    title: "건호 프로필",
    image: "https://cdn.kpopping.com/idols/Keonho/profile.jpg",
    imageAlt: "CORTIS 멤버 건호 프로필 이미지",
    kicker: "Keonho / 건호 / Ahn Keonho",
    bio: "건호는 CORTIS의 막내 멤버로 소개됩니다. 공개 자료에서는 수원 출신이며, 데뷔 전 수영 선수로 활동한 이력이 있고 자연스러운 비주얼과 카리스마로 주목받았습니다.",
    stats: [
      ["생일", "2009.02.14"],
      ["출신", "수원"],
      ["키워드", "Maknae / Swimming"],
    ],
    detail: "건호 포인트: 수영 선수 출신의 체력, 막내다운 신선함, 무대에서 보이는 자연스러운 카리스마가 특징입니다.",
  },
};

const memberButtons = document.querySelectorAll(".member-card");
const profileTitle = document.querySelector("#profileTitle");
const profileImage = document.querySelector("#profileImage");
const profileKicker = document.querySelector("#profileKicker");
const profileBio = document.querySelector("#profileBio");
const statOneLabel = document.querySelector("#statOneLabel");
const statOneValue = document.querySelector("#statOneValue");
const statTwoLabel = document.querySelector("#statTwoLabel");
const statTwoValue = document.querySelector("#statTwoValue");
const statThreeLabel = document.querySelector("#statThreeLabel");
const statThreeValue = document.querySelector("#statThreeValue");
const detailButton = document.querySelector("#detailButton");
const detailMessage = document.querySelector("#detailMessage");

let selectedMember = "juhoon";

function renderMember(memberId) {
  const member = members[memberId];

  selectedMember = memberId;
  profileTitle.textContent = member.title;
  profileImage.src = member.image;
  profileImage.alt = member.imageAlt;
  profileKicker.textContent = member.kicker;
  profileBio.textContent = member.bio;
  statOneLabel.textContent = member.stats[0][0];
  statOneValue.textContent = member.stats[0][1];
  statTwoLabel.textContent = member.stats[1][0];
  statTwoValue.textContent = member.stats[1][1];
  statThreeLabel.textContent = member.stats[2][0];
  statThreeValue.textContent = member.stats[2][1];
  detailMessage.textContent = "";

  memberButtons.forEach((button) => {
    const isActive = button.dataset.member === memberId;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelector("#juhoon").scrollIntoView({ behavior: "smooth", block: "start" });
}

memberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    renderMember(button.dataset.member);
  });
});

detailButton.addEventListener("click", () => {
  detailMessage.textContent = members[selectedMember].detail;
});
