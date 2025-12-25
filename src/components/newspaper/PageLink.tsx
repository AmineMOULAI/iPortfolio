import { Link, LinkProps } from "react-router-dom";
import { ReactNode } from "react";

interface PageLinkProps extends Omit<LinkProps, 'className'> {
  children: ReactNode;
  className?: string;
}

const PageLink = ({ children, className = "", ...props }: PageLinkProps) => {
  return (
    <Link 
      {...props} 
      className={`hover:underline underline-offset-4 decoration-1 transition-opacity hover:opacity-70 ${className}`}
    >
      {children}
    </Link>
  );
};

export default PageLink;
