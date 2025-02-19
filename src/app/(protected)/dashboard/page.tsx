"use client";

import { useEffect, useState } from "react";
import { databases } from "@/lib/appwrite";
import Card from "@/app/components/ui/partials/card";
import FormShare from "@/app/components/ui/form.post";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeeds() {
      try {
        const response = await databases.listDocuments(
          "67a1f726001f51b0fb86",
          "67b6232e0015e5bf28bb"
        );
        console.dir(response)
      } catch (error) {
        console.error("Error fetching feeds:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeeds();
  }, [])


  if (loading) return <p>Loading...</p>;

  return (<div className="flex">
    <div className="w-1/4 p-3">
      <p>Left Sidebar</p>
    </div>

    <div className="w-2/4 bg-white p-4">
      <FormShare></FormShare>
      <Card />
    </div>

    <div className="w-1/4 p-3">
      <p>Right Sidebar</p>
    </div>
  </div>
  )
}