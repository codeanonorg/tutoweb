import axios from "../axios";

export interface ImageMeta {
  type: "wagtailimages.Image";
  detailUrl: string;
  tags: string[];
  downloadUrl: string;
}

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

export interface Image {
  id: number;
  meta: ImageMeta;
  title: string;
  width: number;
  height: number;
}

export interface StreamBlock<T = any> {
  type: string;
  value: T;
  id: string;
}

export interface RichTextBlock extends StreamBlock<string> {
  type: "rich_text";
}

interface Announce {
  title: string;
  image: number;
  content: string;
}

export interface AnnounceBlock extends StreamBlock<Announce> {
  type: "announce";
}

export interface HomePage extends Page {
  subtitle: string;
  content: StreamBlock[];
}

export async function getPage(id: number): Promise<Page> {
  const response = await axios.get<Page>(`pages/${id}`);
  // const { meta: { type } } = response.data;
  return response.data;
}

export async function getImage(id: number): Promise<Image> {
  const { data } = await axios.get<Image>(`images/${id}`);
  data.meta.downloadUrl = `${axios.defaults.baseURL}/${data.meta.downloadUrl}`.replace(/\/{2}/g, "/");
  return data;
}

export function isHomePage(page: Page): page is HomePage {
  return page.meta.type === "home.HomePage";
}

export function isRichTextBlock(block: StreamBlock): block is RichTextBlock {
  return block.type === "rich_text";
}

export function isAnnounceBlock(block: StreamBlock): block is AnnounceBlock {
  return block.type === "announce";
}
