import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes, FC } from "react";
import classNames from "classnames";

type Props = NextLinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    className?: string;
  };


export const Link: FC<Props> = ({ href, className, children, ...rest }) => {
  return (
    <NextLink
      href={href}
      className={classNames(className)}
      {...rest}
    >
      {children}
    </NextLink>
  );
};
