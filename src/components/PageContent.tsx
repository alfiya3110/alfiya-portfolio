import type { ReactNode } from 'react';

type PageContentProps = {
  children: ReactNode;
};

export default function PageContent({ children }: PageContentProps) {
  return (
    <div className="page-content bg-cream/40">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">{children}</div>
    </div>
  );
}
