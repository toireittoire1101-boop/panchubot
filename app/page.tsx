export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>ぱんてゃ専用アシタカ</h1>
      <form method="post" action="/api/messages">
        <textarea name="content" rows={4} style={{ width: "100%" }} />
        <button type="submit">送信</button>
      </form>
    </main>
  );
}
