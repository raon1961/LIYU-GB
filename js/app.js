const members = [
  { 
    id: 1, 
    name: "WE WANT", 
    profileImgs: [
      "images/liyu23.jpeg", 
      "images/liyu24.jpeg"
    ], 
    detailImg: "images/liyu-pro1.gif", 
    bio: "The image LIYU has of himself is a cold-looking fool." 
  },
  { 
    id: 2, 
    name: "CHUEI LI YU'S", 
    profileImgs: [
      "images/liyu12.jpeg", 
      "images/liyu13.jpeg", 
      "images/liyu14.jpeg"
    ], 
    detailImg: "images/liyu-pro2.jpeg", 
    bio: "A habit LIYU developed during practice is moving his body absentmindedly." 
  },
  { 
    id: 3, 
    name: "DEBUT", 
    profileImgs: [
      "images/liyu28.jpeg", 
      "images/liyu29.jpeg"
    ], 
    detailImg: "images/liyu-pro3.jpeg", 
    bio: "The stage concept LIYU wants to challenge is anything!" 
  },
  { 
    id: 4, 
    name: "崔立于", 
    profileImgs: [
      "images/liyu32.jpeg", 
      "images/liyu33.jpeg"
    ], 
    detailImg: "images/liyu-pro4.jpeg", 
    bio: "LIYU’s biggest strength is his face!" 
  },
  { 
    id: 5, 
    name: "チェリブ", 
    profileImgs: [
      "images/liyu36.jpeg", 
      "images/liyu37.jpeg", 
      "images/liyu38.jpeg"
    ], 
    detailImg: "images/liyu-pro5.jpeg", 
    bio: "I'll take my first STEP to become a superstar on BOYS II PLANET!" 
  },
  { 
    id: 6, 
    name: "CHUEI LI YU", 
    profileImgs: [
      "images/liyu34.jpeg", 
      "images/liyu35.jpeg"
    ], 
    detailImg: "images/liyu-pro6.jpeg", 
    bio: "It’s going to work out, so just go for it!" 
  },
  { 
    id: 7, 
    name: "#MomentCollector", 
    profileImgs: [
      "images/liyu46.jpeg", 
      "images/liyu47.jpeg"
    ], 
    detailImg: "images/liyu-pro7.jpeg", 
    bio: "You’re doing well, don’t worry!" 
  },
  { 
    id: 8, 
    name: "#ArtSchoolOppa", 
    profileImgs: [
      "images/liyu5.jpeg", 
      "images/liyu6.jpeg"
    ], 
    detailImg: "images/liyu-pro8.jpeg", 
    bio: "You can do well this time too!" 
  },
  { 
    id: 9, 
    name: "#BunnyLiyu", 
    profileImgs: [
      "images/liyu10.jpeg", 
      "images/liyu11.jpeg"
    ], 
    detailImg: "images/liyu-pro9.jpeg", 
    bio: "Don’t miss the Best Choice, LIYU CHOI!" 
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

// 카드
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
      className: `bg-white rounded-lg shadow-md p-4 sm:p-6 text-center cursor-pointer transform transition duration-500 ${
        visible ? "animate-fadeInUp" : "opacity-0"
      }`,
      onClick: () => onClick(member)
    },
    React.createElement("img", {
      src: member.profileImgs[index],
      alt: member.name,
      loading: "lazy",
      className: "w-52 h-72 mx-auto rounded-lg object-cover transition duration-700 ease-in-out"
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

    // 제목 (왼쪽 상단 고정)
    React.createElement("h1", {
      className: "text-2xl sm:text-3xl font-bold mb-6 fixed top-4 left-4 z-50",
      style: { fontFamily: "Sequel100Black, sans-serif" }
    }, "CHUEI LI YU"),

    // 카드 그리드
    React.createElement(
      "div",
      { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16" },
      members.map(member =>
        React.createElement(MemberCard, { key: member.id, member: member, onClick: setSelectedMember })
      )
    ),

    React.createElement(SocialSection),

    // 모달
selectedMember &&
React.createElement("div", {
  className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
  onClick: handleCloseModal
},
  React.createElement("div", {
    className: "bg-white p-6 rounded-lg w-11/12 max-w-md relative animate-fadeInModal",
    onClick: e => e.stopPropagation()
  },
    React.createElement("button", { className: "absolute top-2 right-2 text-gray-500", onClick: handleCloseModal }, "X"),
    React.createElement("img", { src: selectedMember.detailImg, alt: selectedMember.name, className: "w-full h-72 mx-auto rounded-lg object-cover" }),
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
