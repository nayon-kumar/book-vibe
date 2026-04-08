import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Label,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BookContext } from "../../context/MyContext";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

// Create triangle path
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

// Custom Triangle Bar
const TriangleBar = (props) => {
  const { x, y, width, height, index, isActive } = props;

  // Prevent crash if values are undefined
  if (x === undefined || y === undefined) return null;

  const color = colors[index % colors.length];

  return (
    <path
      d={getPath(x, y, width, height)}
      stroke={color}
      fill={color}
      strokeWidth={isActive ? 5 : 0}
      style={{ transition: "stroke-width 0.3s ease-out" }}
    />
  );
};

// Custom label color
const CustomColorLabel = (props) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};

const PageToRead = () => {
  const myData = [];
  const { wishlistBooks } = useContext(BookContext);
  for (const wislist of wishlistBooks) {
    const newObj = {
      bookName: `${wislist.bookName}`,
      pages: Number(`${wislist.totalPages}`),
    };
    myData.push(newObj);
  }
  return (
    <div className="mt-40">
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          height: "400px",
          margin: "0 auto",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={myData}
            margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip cursor={{ fillOpacity: 0.5 }} />
            <XAxis dataKey="bookName" />
            <YAxis />

            <Bar dataKey="pages" shape={TriangleBar} activeBar>
              <LabelList content={CustomColorLabel} position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PageToRead;
