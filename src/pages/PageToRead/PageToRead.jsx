import { useContext } from "react";
import { FaBookOpenReader } from "react-icons/fa6";
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
    <div className="mt-30">
      <div className="text-center">
        <h4 className="font-bold text-2xl mb-10 ">Your Wishlist Books</h4>
      </div>
      {wishlistBooks.length === 0 ? (
        <>
          <div className="flex flex-col items-center justify-center pb-20">
            <FaBookOpenReader className="text-gray-400" size={100} />
            <p className="mt-5 text-gray-400 text-center">
              Your wishlist books is empty. Go to Home page and add your
              favourite books to wishlist to show how many page to read.
            </p>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default PageToRead;
