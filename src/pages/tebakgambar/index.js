import React, {
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import "./styles.css";
import bannerIMG from "../../assets/png/banner-tebak.png";
import jokowiJPG from "../../assets/jpg/jokowi.jpg";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const COVER_IMG = "cover";
const FILL_IMG = "fill";
const CONTAINT_IMG = "contain";

function TebakGambar() {
  const ref = useRef(null);
  let widthF = window.innerWidth;
  let heightF = window.innerHeight;

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [rowX, setRowX] = useState(2);
  const [colY, setColY] = useState(2);
  const [visibleBox, setVisibleBox] = useState([]);
  const [openBox, setOpenBox] = useState(false);
  const [imgFile, setImgFile] = useState("");
  const handle = useFullScreenHandle();

  const handleKeyPress = useCallback((event) => {
    // console.log(`Key pressed: ${event.key}`);
    if (event.key === "!") {
      setOpenBox(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, []);

  const boxCardX = width / rowX - 2;
  const colCardY = height / colY - 2;

  const onClickinvi = (val) => {
    setVisibleBox([...visibleBox, val]);
  };

  const sumArray = rowX * colY;
  const fileupload = (file) => {
    setImgFile(URL.createObjectURL(file.target.files[0]));
  };

  return (
    <div className="backgroundT centerPage">
      <img
        src={bannerIMG}
        style={{ width: "40%", height: 100, marginTop: 25 }}
        alt="banner-tebak-gambar"
      />

      <FullScreen handle={handle}>
        {handle.active && (
          <div>
            <img
              src={imgFile}
              style={{
                width: "100%",
                height: "100%",
                objectFit: COVER_IMG,
              }}
              alt="gambar-tebak"
            />
            <div
              className="absBox"
              style={{
                width: widthF,
                height: heightF,
                position: "absolute",
                top: 0,
              }}
            >
              {Array.from(Array(sumArray).keys()).map((int) => {
                return (
                  <div
                    key={int}
                    onClick={() => onClickinvi(int)}
                    className="borderAbsBox"
                    style={{
                      width: widthF / rowX - 2,
                      height: heightF / colY - 2,
                      backgroundColor: visibleBox.includes(int)
                        ? ""
                        : openBox
                        ? ""
                        : "#FFE6C7",
                    }}
                  >
                    <label className="labelAbsBox">
                      {visibleBox.includes(int) ? "" : int + 1}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </FullScreen>

      <div
        ref={ref}
        style={{
          height: "60%",
          width: "50%",
        }}
        className="contentT"
      >
        {/* SHOW IMAGE  */}
        <img
          src={imgFile}
          style={{
            width: "100%",
            height: "100%",
            objectFit: COVER_IMG,
          }}
          alt="gambar-tebak"
        />
        <div
          className="absBox"
          style={{
            width: width,
            height: height,
            position: "absolute",
            top: 165,
          }}
        >
          {Array.from(Array(sumArray).keys()).map((int) => {
            return (
              <div
                key={int}
                onClick={() => onClickinvi(int)}
                className="borderAbsBox"
                style={{
                  width: boxCardX,
                  height: colCardY,
                  backgroundColor: visibleBox.includes(int)
                    ? ""
                    : openBox
                    ? ""
                    : "#FFE6C7",
                }}
              >
                <label className="labelAbsBox">
                  {visibleBox.includes(int) ? "" : int + 1}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="boxSettingIMG">
        <div>
          <label style={{ fontWeight: "bold", fontSize: 15 }}>
            Select image :
          </label>
          <input
            style={{ marginLeft: 15 }}
            type="file"
            id="img"
            name="img"
            accept="image/*"
            onChange={fileupload}
          />
          <div>
            <label style={{ fontWeight: "bold", fontSize: 15 }}>
              Box Row :
            </label>
            <input
              style={{ marginLeft: 15 }}
              type="number"
              name="rows"
              defaultValue={rowX}
              onChange={({ target: { value } }) => {
                if (value > 0) {
                  setRowX(value);
                }
              }}
            />
          </div>
          <div>
            <label style={{ fontWeight: "bold", fontSize: 15 }}>
              Box Column :
            </label>
            <input
              style={{ marginLeft: 15 }}
              type="number"
              name="column"
              defaultValue={colY}
              onChange={({ target: { value } }) => {
                if (value > 0) {
                  setColY(value);
                }
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <button type="button" onClick={handle.enter}>
              FullScreen
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setVisibleBox(
                  visibleBox ? Array.from(Array(sumArray).keys()) : []
                );
              }}
              type="button"
            >
              Show Image
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setVisibleBox(
                  !visibleBox ? Array.from(Array(sumArray).keys()) : []
                );
              }}
              type="button"
            >
              Close Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TebakGambar;
