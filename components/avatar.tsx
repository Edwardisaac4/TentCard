import Image from "next/image";

/** Round avatar with a 2px brass ring: the member's photo, or serif initials on faint lagoon. */
export function Avatar({
  name,
  photo,
  size = 40,
  online,
  className = "",
}: {
  name: string;
  photo?: string;
  size?: number;
  online?: boolean;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <span className={`relative inline-flex shrink-0 ${className}`}>
      <span
        aria-hidden="true"
        className="avatar"
        style={{ width: size, height: size, fontSize: Math.round(size * 0.38) }}
      >
        {photo ? (
          <Image src={photo} alt="" width={size} height={size} className="size-full object-cover" />
        ) : (
          initials
        )}
      </span>
      {online && (
        <span className="absolute right-0 bottom-0 size-3 rounded-full border-2 border-white bg-success">
          <span className="sr-only">Online</span>
        </span>
      )}
    </span>
  );
}
