import Image from "next/image";
import Link from "next/link";

export default function Logo({
  href = "/",
  width = 120,
  height = 40,
  className = "",
  white = false,
}: {
  href?: string | null;
  width?: number;
  height?: number;
  className?: string;
  white?: boolean;
}) {
  const img = (
    <Image
      src={white ? "/ebright-logo-white.png" : "/ebright-logo.png"}
      alt="Ebright"
      width={width}
      height={height}
      priority
      className={className}
    />
  );
  return href ? (
    <Link href={href} aria-label="Ebright — home">
      {img}
    </Link>
  ) : (
    img
  );
}
