import { LucideSlash } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
type BreadcrumbsProps = {
  breadcrumbs: {
    title: string;
    href?: string;
  }[];
};
const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
    {breadcrumbs.map((crumb, index) => {
        let breadcrumbItem = (
            <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
        );

        if (crumb.href)
        {
            breadcrumbItem = (
                <BreadcrumbLink>
                <Link href={crumb.href}
                className="flex items-center gap-1">
                    {crumb.title}
                </Link>
                </BreadcrumbLink>
            );
        }

        return (
            <Fragment key={crumb.title}>
                <BreadcrumbItem>{breadcrumbItem}</BreadcrumbItem>
                {index < breadcrumbs.length - 1 && (
                    <BreadcrumbSeparator>
                    <LucideSlash className="h-4 w-4" />
                    </BreadcrumbSeparator>
                )}
            </Fragment>
        );
    })}
    </BreadcrumbList>
    </Breadcrumb>
  );
};

export {Breadcrumbs};