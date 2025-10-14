This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Real-time Collaborative Markdown Editor (Next.js)

A focused full-stack Next.js app teaching real-time features, WebSockets, server/client components, auth, and rich text handling.

### Why this helps
- Teaches app router, API routes, WebSocket (or WebRTC) integration, optimistic UI, and deployment.
- Practical: buildable incrementally and useful.

### Core features (minimum viable)
1. **Create / Rename / Delete documents**
2. **Real-time collaboration**: multiple users edit same doc with live updates
3. **Markdown editor** with live preview (split view)
4. **Document history** (basic versioning / undo)
5. **Shareable links** to invite collaborators
6. **Authentication** (email magic link or OAuth)
7. **Persist docs** to a database (SQLite + Prisma or MongoDB)

### Tech stack
- Next.js (app router)
- WebSocket server (tRPC + WebSocket, or a simple WebSocket/Socket.IO server using Next.js API route or a separate Node server)
- Prisma + SQLite or MongoDB
- Yjs or Automerge for CRDT-based conflict resolution (recommended) or OT-lite for simpler cases
- React Markdown / Remark for preview
- Tailwind CSS for UI
- Vercel for deployment (or deploy WebSocket server to Fly/Vercel Serverless with Edge config)

### Implementation roadmap (7 steps)
1. Initialize Next.js + Tailwind and auth (NextAuth or custom).
2. DB schema: User, Document, DocumentVersion, Access (share links).
3. Build editor UI: left pane Markdown textarea (or editor like CodeMirror), right pane rendered preview.
4. Add real-time sync using Yjs with WebSocket provider (server route handles document rooms).
5. Implement presence (who’s online, cursors or simple collaborator list).
6. Add saving/versioning: periodic snapshots as DocumentVersion; allow reverting.
7. Add share links and access control; deploy and test with multiple clients.

### Stretch goals
- Rich text editor (TipTap) with Markdown import/export.
- Cursor awareness and per-user color highlighting.
- Offline editing + sync when reconnecting.
- Commenting and suggestions on document regions.
- Rate-limited anonymous guest editing via ephemeral sessions.

### Minimal file map to start
- /app
  - /docs/[id]/page.tsx (editor + preview)
  - /api/ws/route.ts (WebSocket server) or separate server
  - /api/docs/route.ts (CRUD)
- /lib/prisma.ts
- /lib/yjs-server.ts (if self-hosting Yjs websocket)
- /components/Editor.tsx
- /components/Preview.tsx
- /components/Presence.tsx
- /prisma/schema.prisma

Want a minimal starter scaffold (package.json, prisma schema, and basic editor page)? If so, pick WebSocket via Socket.IO or Yjs for CRDTs.
