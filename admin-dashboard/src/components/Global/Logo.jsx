export default function Logo() {
  return (
    <div className="w-full flex items-center justify-center gap-2">
      <img
        src={"/logo.svg"}
        alt="logo"
        width={16}
        height={26}
        className="object-contain"
      />
      <p className="text-[20px] font-extrabold">
        <strong>Admin</strong>
      </p>
    </div>
  );
}
