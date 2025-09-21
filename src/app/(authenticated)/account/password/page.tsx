import { Heading } from "@/components/heading";
import { AccountTabs } from "@/app/(authenticated)/account/_navigation/account-tabs";

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
