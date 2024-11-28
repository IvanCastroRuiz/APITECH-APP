import { jsx as _jsx } from "react/jsx-runtime";
const Image = ({ src, alt, width, height, ...props }) => {
    return (_jsx("img", { src: src, alt: alt, width: width, height: height, loading: "lazy", ...props }));
};
export default Image;
