import { shopBlogData } from "@/data/shopData";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useTravelBreadcrumbs = () => {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);

    const pathArray = segments.map(
      (_, i) => "/" + segments.slice(0, i + 1).join("/")
    );
    const crumbs = pathArray.map((href) => {
      if (href.startsWith("/blog/")) {
        const slug = href.replace("/blog/", "");
        const post = shopBlogData.find((p) => p.heading === slug);
        return {
          href,
          label: post?.heading || slug,
        };
      }

      const defaultLabels: Record<string, string> = {
        "/travel": "Home",
        "/travel/blog": "Blog",
        "/travel/contact": "Contact Us",
        "/travel/packages": "Tour Packages",
        "/travel/insurance": "Insurance",
        "/travel/myLocations": "My Locations",
      };

      return {
        href,
        label:
          defaultLabels[href] ||
          decodeURIComponent(href.split("/").pop() || ""),
      };
    });

    return crumbs;
  }, [pathname]);

  return breadcrumbs;
};
