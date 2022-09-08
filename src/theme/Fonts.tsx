import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
    `}
  />
);

export default Fonts;
