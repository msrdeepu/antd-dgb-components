import { useTypewriter } from "react-simple-typewriter";
import { Typography } from "antd";
const { Title } = Typography;

const TypedEffect = () => {
  const [text] = useTypewriter({
    words: [
      "SPA Single Page",
      "Responsive",
      "Awesome",
      "Fluid",
      "Dynamic CMS",
      "PWD Progressive",
    ],
    loop: 0,
  });

  return (
    <div className="App">
      <Title style={{ color: "white" }} level={1}>
        #{text}
      </Title>
    </div>
  );
};

export default TypedEffect;
