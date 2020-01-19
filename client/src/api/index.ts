import axios from "../axios";

export interface PageMeta {
  type: "home.HomePage";
  detailUrl: string;
  htmlUrl: string;
  slug: string;
  showInMenus: boolean;
  seoTitle: string;
  searchDescription: string;
  firstPublishedAt: Date;
  parent: Page | null;
}

export interface Page {
  id: number;
  meta: PageMeta;
  title: string;
}

interface StreamBlock {
  type: "rich_text",
  value: string,
  id: string,
}

export interface HomePage extends Page {
  subtitle: string;
  content: StreamBlock[];
}

export async function getPage(id: number): Promise<Page> {
  const response = await axios.get(`pages/${id}`);
  // const { meta: { type } } = response.data;
  return response.data;
}

export function isHomePage(page: Page): page is HomePage {
  return page.meta.type === "home.HomePage";
}
