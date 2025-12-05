import { shopBlogData } from "@/data/shopData";
import ShopBlogSingle from "@/templates/Shop/components/blog/ShopBlogSingle";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const singleBlog = shopBlogData.find((blog) => blog.slug == slug);
  const singleBlogIndex = shopBlogData.findIndex((blog) => blog.slug == slug);
  if (!singleBlog) {
    notFound();
  }
  return (
    <ShopBlogSingle singleBlog={singleBlog} singleBlogIndex={singleBlogIndex} />
  );
};

export default page;
