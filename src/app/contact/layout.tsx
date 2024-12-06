import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sai Santosh Kottakota",
  description:
    "Get in touch with Sai Santosh Kottakota, Tech Lead and experienced developer",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-black">{children}</div>;
}
