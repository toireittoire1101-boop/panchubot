export const metadata = {
  title: "panchubot",
  description: "ぱんてゃ専用アシタカ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
