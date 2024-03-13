export default function PolicyMDLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return <article className="prose lg:prose-xl max-w-full p-6">{children}</article>;
}
