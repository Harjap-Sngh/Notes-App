export const dynamic = "force-dynamic";

import React from "react";
import QuillEditor from "@/components/quill-editor/quill-editor";
import { getFolderDetails } from "@/lib/supabase/queries";
import { redirect } from "next/navigation";
import { any } from "zod";

const Folder = async ({ params }: any) => {
  const { folderId } = await params;
  const { data, error } = await getFolderDetails(folderId);
  if (error || !data.length) redirect("/dashboard");

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
