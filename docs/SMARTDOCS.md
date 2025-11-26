<!-- SMARTDOCS:BEGIN -->
# Repository Documentation

## Overview
Branch: master
Folders: prisma, public, src

## Getting Started
Scripts: `dev`, `build`, `start`, `lint`, `lint-fix`, `postinstall`, `seed`

## Routes
(none)

## Controllers
(none)

## Services
(none)

## Components
- src/components/card-compact.tsx
- src/components/confirm-dialog.tsx
- src/components/date-picker.tsx

## Key Files
- README.md
- package.json
- src/app/(authenticated)/account/_navigation/account-tabs.tsx
- src/app/(authenticated)/account/password/page.tsx
- src/app/(authenticated)/account/profile/page.tsx
- src/app/(authenticated)/layout.tsx
- src/app/(authenticated)/tickets/[ticketId]/edit/page.tsx
- src/app/(authenticated)/tickets/[ticketId]/loading.tsx
- src/app/(authenticated)/tickets/[ticketId]/not-found.tsx
- src/app/(authenticated)/tickets/[ticketId]/page.tsx
- src/app/(authenticated)/tickets/error.tsx
- src/app/(authenticated)/tickets/page.tsx
- src/app/_navigation/account-dropdown.tsx
- src/app/_navigation/header.tsx
- src/app/_navigation/sidebar/components/sidebar-item.tsx
- src/app/_navigation/sidebar/components/sidebar.tsx
- src/app/_navigation/sidebar/constants.tsx
- src/app/_navigation/sidebar/types.ts
- src/app/favicon.ico
- src/app/globals.css
- src/app/layout.tsx
- src/app/page.tsx
- src/app/password-forgot/page.tsx
- src/app/setting/page.tsx
- src/app/sign-in/page.tsx
- src/app/sign-up/page.tsx
- src/app/template.tsx
- src/components/card-compact.tsx
- src/components/confirm-dialog.tsx
- src/components/date-picker.tsx

## Dependencies
- @lucia-auth/adapter-prisma
- @prisma/client
- @radix-ui/react-alert-dialog
- @radix-ui/react-avatar
- @radix-ui/react-dropdown-menu
- @radix-ui/react-label
- @radix-ui/react-popover
- @radix-ui/react-select
- @radix-ui/react-separator
- @radix-ui/react-slot
- @radix-ui/react-tabs
- argon2
- big.js
- class-variance-authority
- clsx
- date-fns
- lucia
- lucide-react
- next
- next-themes
- nuqs
- react
- react-day-picker
- react-dom
- sonner
- tailwind-merge
- use-debounce
- zod

## Payloads (detected snippets)
### README.md

```
<!-- SMARTDOCS:BEGIN -->
# Project Documentation

> setting path added

<!-- SMARTDOCS:BEGIN -->
# Commit Changes

> setting path added

# Changelog

### ff9a003 - setting path added
**Author:** dev-saiful
**Files:** src/app/setting/page.tsx, src/paths.ts

<!-- SMARTDOCS:END -->
<!-- SMARTDOCS:END -->
```

### package.json

```
{
  "name": "road-to-next",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint-fix": "next lint --fix",
    "postinstall": "prisma generate",
    "seed": "tsx prisma/seed.ts"
  },
  "dependencies": {
    "@lucia-auth/adapter-prisma": "^4.0.1",
    "@prisma/client": "^5.22.0",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/rea
```

### src/app/(authenticated)/account/_navigation/account-tabs.tsx

```
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { accountPasswordPath, accountProfilePath } from "@/paths";

const AccountTabs = () => {
  const pathName = usePathname();
  return (
    <Tabs value={pathName.split("/").at(-1)}>
      <TabsList>
        <TabsTrigger value="profile" asChild>
          <Link href={accountProfilePath()}>Profile</Link>
        </TabsTrigger>
        
```

### src/app/(authenticated)/account/password/page.tsx

```
import { AccountTabs } from "@/app/(authenticated)/account/_navigation/account-tabs";
import { Heading } from "@/components/heading";

const PasswordPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Password"
        description="Manage your password settings"
        tabs={<AccountTabs />}
      />
    </div>
  );
};

export default PasswordPage;

```

### src/app/(authenticated)/account/profile/page.tsx

```
import { AccountTabs } from "@/app/(authenticated)/account/_navigation/account-tabs";
import { Heading } from "@/components/heading";

const ProfilePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Profile"
        description="Manage your profile settings"
        tabs={<AccountTabs />}
      />
    </div>
  );
};

export default ProfilePage;

```

### src/app/(authenticated)/layout.tsx

```
import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getAuthOrRedirect();
  return <>{children}</>;
}

```

### src/app/(authenticated)/tickets/[ticketId]/edit/page.tsx

```
import { notFound } from "next/navigation";

import { CardCompact } from "@/components/card-compact";
import { Breadcrumbs } from "@/components/form/breadcrumb";
import { getAuth } from "@/features/auth/queries/get-auth";
import { isOwner } from "@/features/auth/utils/is-owner";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { homePath, ticketPath } from "@/paths";

type TicketEditPagePr
```

### src/app/(authenticated)/tickets/[ticketId]/loading.tsx

```
import Spinner from "@/components/spinner";

export default function Loading() {
  return <Spinner />;
}

```

### src/app/(authenticated)/tickets/[ticketId]/not-found.tsx

```
import Link from "next/link";

import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/paths";

export default function NotFound() {
  return (
    <Placeholder
      label="Ticket not found"
      button={
        <Button variant="outline" asChild>
          <Link href={ticketsPath()}>Go back</Link>
        </Button>
      }
    />
  );
}

```

### src/app/(authenticated)/tickets/[ticketId]/page.tsx

```
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/form/breadcrumb";
import { getComments } from "@/features/comment/queries/get-comments";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { homePath } from "@/paths";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { tic
```

<!-- SMARTDOCS:END -->