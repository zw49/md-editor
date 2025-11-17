import LoginCard from "@/components/LoginCard";
import { TypographyH1 } from "@/components/ui/typography";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full relative items-center justify-center bg-gradient-to-br from-gray-900 via-gray-600 to-gray-900">
      <div className="absolute top-1/10">
        <h1 className="text-white scroll-m-20 pt-2 pb-0 text-6xl font-extrabold font-mono tracking-tight text-balance first:mt-0 mt-4 mb-4">
          ShadCN Markdownified
        </h1>
      </div>
      <LoginCard />
    </div>
  );
}
