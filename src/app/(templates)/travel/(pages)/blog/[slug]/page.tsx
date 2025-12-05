import { travelBlogHomeBlogList } from "@/data/travelData";
import TravelBlogSingleBlog from "@/templates/Travel/components/Blog/TravelBlogSingleBlog";
import TravelBreadcrumbs from "@/templates/Travel/components/common/Breadcrumbs/TravelBreadcrumbs";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const singleBlog = travelBlogHomeBlogList.find((blog) => blog.slug == slug);

  if (!singleBlog) {
    notFound();
  }
  return (
    <div>
      <TravelBreadcrumbs />
      <TravelBlogSingleBlog singleBlog={singleBlog} />
    </div>
  );
};

export default page;
