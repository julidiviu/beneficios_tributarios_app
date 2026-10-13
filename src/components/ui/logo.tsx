import Image from "next/image";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/images/Beneficios_Tributarios_LOGO.png"
        alt="Logo Beneficios Tributarios FNCE Colombia"
        width={36}
        height={36}
        priority
      />
      <span
        className={`flex flex-col leading-tight ${
          light ? "text-white" : "text-ink-900 dark:text-zinc-100"
        }`}
      >
        <span className="text-[15px] font-bold">Beneficios Tributarios</span>
        <span className="text-[13px] font-medium opacity-80">FNCE Colombia</span>
      </span>
    </span>
  );
}
