declare module "react-scroll" {
  import type { ComponentType, ReactNode } from "react";

  export type ScrollLinkProps = {
    to: string;
    smooth?: boolean;
    duration?: number;
    offset?: number;
    spy?: boolean;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
  };

  export const Link: ComponentType<ScrollLinkProps>;
}
