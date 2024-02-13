interface LogCreateLayoutProps {
  children: React.ReactNode;
}

const LogCreateLayout = ({ children }: LogCreateLayoutProps) => {
  return <section>{children}</section>;
};

export default LogCreateLayout;
