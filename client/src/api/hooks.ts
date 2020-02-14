import { useEffect, useState } from "preact/hooks";
import { getPage, Page } from "./index";

export function usePage(id: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageData, setPageData] = useState<Page | null>(null);
  useEffect(() => {
    getPage(id).then(setPageData).then(() => setLoading(false)).catch((e) => {
      setLoading(false);
      setError(e);
    });
  }, []);

  return {loading, error, pageData};
}
