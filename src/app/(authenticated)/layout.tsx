import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getAuthOrRedirect();
  return <>{children}</>;
}
