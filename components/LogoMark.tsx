import Image from "next/image";

export default function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <Image src="/pionexus-logo.png" alt="PIONEXUS LABS" width={170} height={48} priority />
    </div>
  );
}
