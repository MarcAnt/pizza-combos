import Main from "@/components/Main";
import StoreProvider from "./StoreProvider";

export default function Home() {
  return (
    <StoreProvider>
      {/* <div className="flex w-full gap-2 min-h-screen p-8 pb-20  relative sm:p-20 font-[family-name:var(--font-geist-sans)]">
      </div> */}
      <Main></Main>
    </StoreProvider>
  );
}
