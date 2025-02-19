"use client";

import Card from "@/app/components/ui/partials/card";
import FormShare from "@/app/components/ui/form.post";
import { useFeeds } from "@/hooks/useFeeds";

export default function Dashboard() {
  const { loading, data } = useFeeds();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex">
      <div className="w-1/4 p-3">
        <p>Left Sidebar</p>
      </div>

      <div className="w-2/4 bg-white p-4">
        <FormShare />
        {data.map((item, key) => (
          <Card key={key} text={item.message} />
        ))}
      </div>

      <div className="w-1/4 p-3">
        <p>Right Sidebar</p>
      </div>
    </div>
  );
}