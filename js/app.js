const members = [
  { 
    id: 1, 
    name: "WE WANT", 
    profileImgs: [
      "images/lee-sang-won1.jpg", 
      "images/lee-sang-won2.jpg", 
      "images/lee-sang-won3.jpg"
    ], 
    detailImg: "images/liyu-pro1.jpg", 
    bio: "립우가 생각한 립우의 이미지는 차갑게 생긴 바보." 
  },
  { 
    id: 2, 
    name: "CHUEI LI YU'S", 
    profileImgs: [
      "images/zhou-an-xin1.jpg", 
      "images/zhou-an-xin2.jpg", 
      "images/zhou-an-xin3.jpg"
    ], 
    detailImg: "images/liyu-pro2.jpg", 
    bio: "립우가 연습하며 생긴 습관은 정신 나가며 몸 움직이기." 
  },
  { 
    id: 3, 
    name: "DEBUT", 
    profileImgs: [
      "images/chung-sang-hyeon1.jpg", 
      "images/chung-sang-hyeon2.jpg"
    ], 
    detailImg: "images/liyu-pro3.jpg", 
    bio: "립우가 도전하고 싶은 무대 컨셉은 뭐든지!" 
  },
  { 
    id: 4, 
    name: "崔立于", 
    profileImgs: [
      "images/kim-jun-seo1.jpg", 
      "images/kim-jun-seo2.jpg"
    ], 
    detailImg: "images/liyu-pro4.jpg", 
    bio: "나의 최대 강점은 얼굴!" 
  },
  { 
    id: 5, 
    name: "최립우", 
    profileImgs: [
      "images/lee-leo1.jpg", 
      "images/lee-leo2.jpg"
    ], 
    detailImg: "images/liyu-pro5.jpg", 
    bio: "BOYS II PLANET에서 슈퍼스타가 될 첫 STEP을 내딛겠습니다!" 
  },
  { 
    id: 6, 
    name: "CHUEI LI YU", 
    profileImgs: [
      "images/chuei-li-yu1.jpg", 
      "images/chuei-li-yu2.jpg"
    ], 
    detailImg: "images/liyu-pro6.jpg", 
    bio: "과거 지원서 쓰던 립우에게 한마디 잘 될거니까 그냥 하자!" 
  },
  { 
    id: 7, 
    name: "#순간콜렉터", 
    profileImgs: [
      "images/yoo-kang-min1.jpg", 
      "images/yoo-kang-min2.jpg"
    ], 
    detailImg: "images/liyu-pro7.jpg", 
    bio: "지금 립우에게 힘이 되는 한마디는 잘 하고 있어 걱정마!" 
  },
  { 
    id: 8, 
    name: "#미대오빠", 
    profileImgs: [
      "images/masato1.jpg", 
      "images/masato2.jpg"
    ], 
    detailImg: "images/liyu-pro8.jpg", 
    bio: "미래 파이널을 앞둔 립우에게 한마디 이번에도 잘 할 수 있어!" 
  },
  { 
    id: 9, 
    name: "#버니립우", 
    profileImgs: [
      "images/he-xin-long1.jpg", 
      "images/he-xin-long2.jpg"
    ], 
    detailImg: "images/liyu-pro9.jpg", 
    bio: "베스트 초이스 리부초이 놓치지 마세요!" 
  }
];

// 스크롤 등장 훅
function useScrollAnimation() {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if(ref.current) observer.unobserve(ref.current); };
  }, []);

  return [ref, visible];
}

// 멤버 카드
function MemberCard({ member, onClick }) {
  const [ref, visible] = useScrollAnimation();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (!member.profileImgs || member.profileImgs.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % member.profileImgs.length);
    }, 3000); // 3초마다 변경
    return () => clearInterval(interval);
  }, [member.profileImgs.length]);

  return React.createElement(
    "div",
    {
      ref: ref,
      className: `bg-white rounded-lg shadow-md p-4 sm:p-6 text-center cursor-pointer transform transition duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
      onClick: () => onClick(member)
    },
    React.createElement("img", { 
      src: member.profileImgs[index], 
      alt: member.name, 
      loading: "lazy",
      className: "w-40 h-32 mx-auto rounded-lg object-cover transition duration-700 ease-in-out"
    }),
    React.createElement("h2", {
      className: "text-lg sm:text-xl font-semibold mt-2",
      style: { fontFamily: "Sequel100Black, sans-serif" }
    }, member.name)
  );
}

// SNS 아이콘 섹션
function SocialSection() {
  const [ref, visible] = useScrollAnimation();
  return React.createElement(
    "div",
    { ref: ref, className: `mt-12 flex justify-center space-x-6 opacity-0 transform translate-y-10 transition duration-700 ${visible ? "opacity-100 translate-y-0" : ""}` },
    React.createElement("a", { href: "https://youtube.com/@boysplanet.official?si=uWoML6FSkZG1qDg1", target: "_blank", rel: "noopener noreferrer" },
      React.createElement("img", { src: "images/youtube.png", alt: "YouTube", className: "w-8 h-8 sm:w-10 sm:h-10 hover:scale-125 transition transform duration-300" })
    ),
    React.createElement("a", { href: "https://www.instagram.com/boysplanet.official?igsh=MXJpYzVjeGljdzVyeg==", target: "_blank", rel: "noopener noreferrer" },
      React.createElement("img", { src: "images/instagram.png", alt: "Instagram", className: "w-8 h-8 sm:w-10 sm:h-10 hover:scale-125 transition transform duration-300" })
    ),
    React.createElement("a", { href: "https://x.com/_mnetboysplanet?s=21", target: "_blank", rel: "noopener noreferrer" },
      React.createElement("img", { src: "images/x.png", alt: "X", className: "w-8 h-8 sm:w-10 sm:h-10 hover:scale-125 transition transform duration-300" })
    )
  );
}

// 메인 앱
function App() {
  const [selectedMember, setSelectedMember] = React.useState(null);
  const handleCloseModal = () => setSelectedMember(null);

  return React.createElement(
    "div",
    { className: "container mx-auto p-4" },

    // 제목 추가 (왼쪽 상단 고정)
    React.createElement("h1", {
      className: "text-2xl sm:text-3xl font-bold mb-6 fixed top-4 left-4 z-50",
      style: { fontFamily: "Sequel100Black, sans-serif" }
    }, "CHUEI LI YU"),

    // 멤버 카드 그리드
    React.createElement(
      "div",
      { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16" },
      members.map(member => React.createElement(MemberCard, { key: member.id, member: member, onClick: setSelectedMember }))
    ),

    React.createElement(SocialSection),

    // 모달
    selectedMember &&
    React.createElement("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
      onClick: handleCloseModal
    },
      React.createElement("div", {
        className: "bg-white p-6 rounded-lg w-11/12 max-w-md relative transition-transform duration-500 ease-in-out scale-95 hover:scale-100",
        onClick: e => e.stopPropagation()
      },
        React.createElement("button", { className: "absolute top-2 right-2 text-gray-500", onClick: handleCloseModal }, "X"),
        React.createElement("img", { src: selectedMember.detailImg, alt: selectedMember.name, className: "w-56 h-44 mx-auto rounded-lg object-cover" }),
        React.createElement("h2", {
          className: "text-2xl sm:text-3xl font-bold mt-4 text-center",
          style: { fontFamily: "Sequel100Black, sans-serif" }
        }, selectedMember.name),
        React.createElement("p", { className: "mt-2 text-gray-600 text-center text-sm sm:text-base" }, selectedMember.bio)
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
