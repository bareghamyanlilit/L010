import Link from "next/link"; 

export function Footer() {
  return (
    <footer className="FontMassis bottom-0 py-10 text-xl text-center text-[#FFFDFB]  bg-[#1F1F1F] ">
      
      <Link href="https://www.instagram.com/siteup.am/">
        <p className="mt-2 text-2xl">
          Պատրաստվել է <span className="underline">siteup.am</span> -ի  կողմից 
        </p>
      </Link>
    </footer>
  );
}
