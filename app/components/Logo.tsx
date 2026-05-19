import Image from "next/image";
import Link from "next/link";

export default function Logo({
  href = "/",
  width = 120,
  height = 40,
  className = "",
}: {
  href?: string | null;
  width?: number;
  height?: number;
  className?: string;
}) {
  const img = (
    <Image
      src="/ebright-logo.png"
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
