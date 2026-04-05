import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className=" relative w-50 h-40">
        <Image
          src="/Icone.svg"
          width={0}
          height={0}
          alt="logo-zenit"
          loading="eager"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}
