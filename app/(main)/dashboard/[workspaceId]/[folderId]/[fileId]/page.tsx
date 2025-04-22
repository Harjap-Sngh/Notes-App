// app/(main)/dashboard/[workspaceId]/[folderId]/[fileId]/page.tsx

export const dynamic = "force-dynamic";

import React from "react";
import { redirect } from "next/navigation";
import QuillEditor from "@/components/quill-editor/quill-editor";
import { getFileDetails } from "@/lib/supabase/queries";

type Props = {
  // Next.js now passes these as Promises you must await:
  params: Promise<{
    workspaceId: string;
    folderId:   string;
    fileId:     string;
  }>;
  // only include this if you actually read query‑string params:
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const FilePage = async ({ params }: Props) => {
  // await both so TS sees them match PageProps
  const { workspaceId, folderId, fileId } = await params;

  const { data, error } = await getFileDetails(fileId);
  if (error || !data.length) {
    return redirect("/dashboard");
  }

  return (
    <div className="relative">
      <QuillEditor
        dirType="file"
        fileId={fileId}
        dirDetails={data[0] || {}}
      />
    </div>
  );
};

export default FilePage;
