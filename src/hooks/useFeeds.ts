import { useEffect, useState } from "react";
import { databases } from "@/lib/appwrite";

interface FeedItem {
  message: string;
  created: string;
}

export function useFeeds() {
  const [data, setData] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await databases.listDocuments(
          "67a1f726001f51b0fb86",
          "67b5d98900395c75f665"
        );

        const feedItems: FeedItem[] = response?.documents?.map((item) => ({
          message: item.message,
          created: item.created,
        }));

        setData(feedItems);
      } catch (error) {
        console.error("Error fetching feeds:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { loading, data };
}