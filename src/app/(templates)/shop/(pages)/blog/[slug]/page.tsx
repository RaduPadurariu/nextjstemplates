import ShopBlogSingle from "@/templates/Shop/components/blog/ShopBlogSingle";

export default function Page({ params }: { params: { slug: string } }) {
  return <ShopBlogSingle params={params} />;
}
