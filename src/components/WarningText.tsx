export default function WarningText({children}: {children: string}) {

  return (
    <>
      <span className='text-sm text-red-600'>{children}</span>
    </>
  );
}
