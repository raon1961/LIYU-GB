const members = [
  { id: 1, name: "LEE SANG WON", img: "images/lee-sang-won.jpg", bio: "저는 늘 최선을 택하겠습니다." },
  { id: 2, name: "ZHOU AN XIN", img: "images/zhou-an-xin.jpg", bio: "이번 프로그램에서 최선을 다해서 제 모든 것을 보여드리고 여한 없이 하겠습니다." },
  { id: 3, name: "CHUNG SANG HYEON", img: "images/chung-sang-hyeon.jpg", bio: "여러분들의 마음에 ALL TIME 0순위가 되겠습니다!" },
  { id: 4, name: "KIM JUN SEO", img: "images/kim-jun-seo.jpg", bio: "모든 무대가 항상 마지막이라는 생각으로 정말 열심히 할테니까 이쁘게 봐주시면 감사하겠습니다." },
  { id: 5, name: "LEE LEO", img: "images/lee-leo.jpg", bio: "데뷔하겠습니다!!" },
  { id: 6, name: "CHUEI LI YU", img: "images/chuei-li-yu.jpg", bio: "BOYS II PLANET에서 슈퍼스타가 될 첫 STEP을 내딛겠습니다!" },
  { id: 7, name: "YOO KANG MIN", img: "images/yoo-kang-min.jpg", bio: "하루하루를 소중하게 여기고 무대 하나하나에 제가 할 수 있는 최선을 다하겠습니다!" },
  { id: 8, name: "MASATO", img: "images/masato.jpg", bio: "한순간도 놓치지 않고 무대 위에서 모든 걸 불태우겠습니다!" },
  { id: 9, name: "HE XIN LONG", img: "images/he-xin-long.jpg", bio: "최선을 다하겠습니다!" }
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
  return React.createElement(
    "div",
    {
      ref: ref,
      className: `bg-white rounded-lg shadow-md p-4 sm:p-6 text-center cursor-pointer transform transition duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
      onClick: () => onClick(member)
    },
    React.createElement("img", { src: member.img, alt: member.name, className: "w-40 h-32 mx-auto rounded-lg object-cover" }),
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
    React.createElement("a", { href: "https://www.youtube.com/ALPHAONE", target: "_blank", rel: "noopener noreferrer" },
      React.createElement("img", { src: "images/youtube.png", alt: "YouTube", className: "w-8 h-8 sm:w-10 sm:h-10 hover:scale-125 transition transform duration-300" })
    ),
    React.createElement("a", { href: "https://www.instagram.com/ALPHAONE", target: "_blank", rel: "noopener noreferrer" },
      React.createElement("img", { src: "images/instagram.png", alt: "Instagram", className: "w-8 h-8 sm:w-10 sm:h-10 hover:scale-125 transition transform duration-300" })
    ),
    React.createElement("a", { href: "https://x.com/ALPHAONE", target: "_blank", rel: "noopener noreferrer" },
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
    React.createElement(
      "div",
      { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" },
      members.map(member => React.createElement(MemberCard, { key: member.id, member: member, onClick: setSelectedMember }))
    ),
    React.createElement(SocialSection),
    selectedMember &&
    React.createElement("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
      onClick: handleCloseModal
    },
      React.createElement("div", {
        className: "bg-white p-6 rounded-lg w-11/12 max-w-md relative",
        onClick: e => e.stopPropagation()
      },
        React.createElement("button", { className: "absolute top-2 right-2 text-gray-500", onClick: handleCloseModal }, "X"),
        React.createElement("img", { src: selectedMember.img, alt: selectedMember.name, className: "w-56 h-44 mx-auto rounded-lg object-cover" }),
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