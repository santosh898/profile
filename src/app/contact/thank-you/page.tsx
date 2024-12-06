import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="text-xl mb-8">Your message has been sent successfully.</p>
      <Button asChild>
        <Link href="/">Return to Portfolio</Link>
      </Button>
    </div>
  );
}
