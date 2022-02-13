type Props = {
  children: JSX.Element,
}
export default function MyButton({ children }: Props) {
  return (
    <button
    >
      {children}
    </button>
  );
}
