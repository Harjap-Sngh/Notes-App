// app/(main)/dashboard/[workspaceId]/[folderId]/page.tsx

export const dynamic = "force-dynamic";

import React from "react";
import { redirect } from "next/navigation";
import QuillEditor from "@/components/quill-editor/quill-editor";
import { getFolderDetails } from "@/lib/supabase/queries";

type Props = {
  // Next.js v15+ passes params as a Promise you must await
  params: Promise<{
    workspaceId: string;
    folderId:    string;
  }>;
  // only include if you ever read query‑string params
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const Folder = async ({ params }: Props) => {
  // await all dynamic segments so TS matches Next’s PageProps
  const { workspaceId, folderId } = await params;

  const { data, error } = await getFolderDetails(folderId);
  if (error || !data.length) {
    redirect("/dashboard");
  }

  return (
    <div className="relative">
      <QuillEditor
        dirType="folder"
        fileId={folderId}
        dirDetails={data[0] || {}}
      />
    </div>
  );
};

export default Folder;
