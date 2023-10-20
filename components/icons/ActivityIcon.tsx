import * as React from "react";
import { SVGProps } from "react";

type Props = {
  className?: string;
  props?: SVGProps<SVGSVGElement>
}

const ActivityIcon = ({ className = "", ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className={className}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);
export default ActivityIcon;
