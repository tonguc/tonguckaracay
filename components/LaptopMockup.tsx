import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

// Generic laptop-shaped device frame - deliberately NOT a literal MacBook
// reproduction (no logo, no exact Apple proportions/notch) since that shape
// is a protected product design. Screen bezel + hinge lip + keyboard deck +
// a soft ground shadow read clearly as "laptop" without copying a specific
// product, which is the standard approach real marketing sites use for
// device mockups.
export default function LaptopMockup({ src, alt, width, height, priority }: Props) {
  return (
    <div className="w-full select-none" aria-hidden={false}>
      <div className="rounded-t-xl rounded-b-md border-[6px] border-b-[10px] border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden">
        <div className="flex justify-center py-1.5 bg-neutral-950">
          <span className="w-1 h-1 rounded-full bg-neutral-700" />
        </div>
        <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto block" priority={priority} />
      </div>
      <div className="relative h-3 bg-gradient-to-b from-neutral-700 to-neutral-850 rounded-b-xl" style={{ background: "linear-gradient(to bottom, #3f3f46, #27272a)" }}>
        <div className="absolute left-1/2 -translate-x-1/2 -top-px w-24 h-1.5 bg-neutral-950 rounded-b-lg" />
      </div>
      <div className="mx-auto mt-1 h-2 w-[92%] rounded-full blur-md" style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.35), transparent 70%)" }} />
    </div>
  );
}
