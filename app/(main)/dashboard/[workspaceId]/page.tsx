// app/(main)/dashboard/[workspaceId]/page.tsx

export const dynamic = "force-dynamic";

import React from "react";
import { redirect } from "next/navigation";
import QuillEditor from "@/components/quill-editor/quill-editor";
import { getWorkspaceDetails } from "@/lib/supabase/queries";

type Props = {
  // Next.js v15+ passes params as a Promise you must await
  params: Promise<{
    workspaceId: string;
  }>;
  // only include if you ever read query‑string params
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const WorkspacePage = async ({ params }: Props) => {
  // await to match Next’s internal PageProps
  const { workspaceId } = await params;

  // If no workspaceId (shouldn’t happen), bail out
  if (!workspaceId) {
    redirect("/dashboard");
    return null;
  }

  // Fetch the workspace details
  const { data, error } = await getWorkspaceDetails(workspaceId);
  if (error || !data.length) {
    redirect("/dashboard");
    return null;
  }

  // Render the QuillEditor for this workspace
  return (
    <div className="relative">
      <QuillEditor
        dirType="workspace"
        fileId={workspaceId}
        dirDetails={data[0]}
      />
    </div>
  );
};

export default WorkspacePage;
