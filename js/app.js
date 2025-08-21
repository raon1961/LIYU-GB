const member = {
  id: 6,
  name: "CHUEI LI YU",
  img: "images/chuei-li-yu.jpg",
  bio: "BOYS II PLANET에서 슈퍼스타가 될 첫 STEP을 내딛겠습니다!"
};

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

// 멤버 카드 (풀페이지 느낌)
function MemberSection({ member }) {
  const [ref, visible] = useScrollAnimation();
  return React.createElement(
    "section",
    {
      ref: ref,
      className: `w-full h-screen flex flex-col items-center justify-center text-center px-4 transition-all duration-1000 transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`,
      style: {
        backgroundImage: `url('images/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    },
    React.createElement("div", { className: "w-64 sm:w-80 md:w-96 lg:w-1/3 relative" },
      React.createElement("img", { src: member.img, alt: member.name, className: "rounded-xl shadow-2xl object-cover w-full h-full" })
    ),
    React.createElement("h1", {
      className: "text-3xl sm:text-4xl md:text-5xl font-bold mt-6 text-white",
      style: { fontFamily: "Sequel100Black, sans-serif", textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }
    }, member.name),
    React.createElement("p", {
      className: "mt-4 text-white text-sm sm:text-base md:text-lg max-w-md mx-auto",
      style: { textShadow: "1px 1px 6px rgba(0,0,0,0.6)" }
    }, member.bio)
  );
}

// SNS 아이콘 섹션 (고정)
function SocialSection() {
  const icons = [
    { href: "https://youtube.com/@boysplanet.official?si=uWoML6FSkZG1qDg1", src: "images/youtube.png", alt: "YouTube" },
    { href: "https://www.instagram.com/boysplanet.official?igsh=MXJpYzVjeGljdzVyeg==", src: "images/instagram.png", alt: "Instagram" },
    { href: "https://x.com/_mnetboysplanet?s=21", src: "images/x.png", alt: "X" }
  ];

  return React.createElement(
    "div",
    { className: "fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6 z-50" },
    icons.map((icon, idx) => React.createElement(
      "a",
      { key: idx, href: icon.href, target: "_blank", rel: "noopener noreferrer" },
      React.createElement("img", { src: icon.src, alt: icon.alt, className: "w-10 h-10 sm:w-12 sm:h-12 hover:scale-125 transition-transform duration-300" })
    ))
  );
}

// 메인 앱
function App() {
  return React.createElement(
    "div",
    { className: "w-full h-full overflow-x-hidden" },
    React.createElement(MemberSection, { member: member }),
    React.createElement(SocialSection)
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
