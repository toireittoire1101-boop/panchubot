"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: input }),
    });

    const data = await res.json();
    const assistantMessage = {
      role: "assistant",
      content: data.response ?? "(返事なし)",
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setInput("");
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>ぱんてゃ専用アシタカ</h1>

      <div
        style={{
          border: "1px solid #ddd",
          padding: 10,
          height: 300,
          overflowY: "scroll",
          marginBottom: 10,
        }}
      >
        {messages.map((m, i) => (
          <p key={i}>
            <b>{m.role}：</b> {m.content}
          </p>
        ))}
      </div>

      <textarea
        rows={3}
        style={{ width: "100%" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={sendMessage} style={{ marginTop: 10 }}>
        送信
      </button>
    </main>
  );
}
