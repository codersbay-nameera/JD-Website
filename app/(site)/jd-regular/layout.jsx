import { JdRegularBodyClass } from "./JdRegularBodyClass";
import "./jd-regular-text-colors.css";
import "./jd-regular-mobile.css";

export default function JDRegularLayout({ children }) {
  return (
    <>
      <JdRegularBodyClass />
      {children}
    </>
  );
}
